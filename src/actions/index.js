export const FETCH_GALLERIES = 'FETCH_GALLERIES';
export const DISPLAY_GALLERIES = 'DISPLAY_GALLERIES';
export const FETCH_PICTURES = 'FETCH_PICTURES';

function mapById(contents) {
  const contentsById = {};
  contents.forEach(element => contentsById[element.sys.id] = element.fields);
  return contentsById;
}

async function getDataFromContentful({accessToken, spaceId, environment}) {
  const contentType = 'photoGallery';
  const galleriesUri = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}&content_type=${contentType}&include=1`;
  const response = await fetch(galleriesUri);
  const json = await response.json();
  console.log('JSON', json);
  const galleryList = json.items.map(item => item.sys.id);
  const galleries = mapById(json.items);
  console.log('Galleries', galleries);
  const pictures = mapById(json.includes.Entry.filter(entry => entry.sys.contentType.sys.id !== 'author'));
  console.log('Pictures', pictures);
  const files = mapById(json.includes.Asset);
  console.log('Files', files);
  return {galleryList, galleries, pictures, files};
}

export function fetchGalleries(accessToken, spaceId, environment) {
  return async (dispatch, getState) => {
    const data = await getDataFromContentful({accessToken, spaceId, environment});
    dispatch(displayGalleries(data));
  };
}

export function displayGalleries({galleryList, galleries, pictures, files}) {
  return {
    type: DISPLAY_GALLERIES,
    galleryList,
    galleries,
    pictures,
    files,
  }
}

export function fetchPictures(accessToken, spaceId, environment, gallery) {
  return {
    type: FETCH_GALLERIES,
    accessToken,
    spaceId,
    environment,
    gallery,
  }
}
