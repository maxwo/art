export const FETCH_GALLERIES = "FETCH_GALLERIES";
export const SAVE_GALLERIES = "SAVE_GALLERIES";

const mapById = contents => {
  const contentsById = {};
  contents.forEach(element => (contentsById[element.sys.id] = element.fields));
  return contentsById;
};

async function getDataFromContentful({ accessToken, spaceId, environment }) {
  const contentType = "photoGallery";
  const galleriesUri = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}&content_type=${contentType}&include=1`;
  const response = await fetch(galleriesUri);
  const json = await response.json();
  const galleryList = json.items.map(item => item.sys.id);
  const galleries = mapById(json.items);
  const pictures = mapById(
    json.includes.Entry.filter(
      entry => entry.sys.contentType.sys.id !== "author"
    )
  );
  const files = mapById(json.includes.Asset);
  return { galleryList, galleries, pictures, files };
}

export function fetchGalleries(accessToken, spaceId, environment) {
  return async (dispatch, getState) => {
    const data = await getDataFromContentful({
      accessToken,
      spaceId,
      environment
    });
    dispatch(saveGalleries(data));
  };
}

export function saveGalleries({ galleryList, galleries, pictures, files }) {
  return {
    type: SAVE_GALLERIES,
    galleryList,
    galleries,
    pictures,
    files
  };
}

export function fetchPictures(accessToken, spaceId, environment, gallery) {
  return {
    type: FETCH_GALLERIES,
    accessToken,
    spaceId,
    environment,
    gallery
  };
}
