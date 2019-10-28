import React from "react";
import "./styles/styles.scss";
import Galleries from "./components/galleries/Galleries";
import Slideshow from "./components/slideshow/Slideshow";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const spaceId = "yx8bx9i9yjcr";
const environment = "master";
const deliveryToken = "vO2pP2CV19EMDnQH4jsb9ML-vExsLLHaOcBv14qf75Q";

function App() {
  return (
    <Router>
      <div className="header" style={{ display: "none" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <Switch>
          <Route
            path="/gallery/:gallerySlug"
            render={props => (
              <Slideshow
                gallerySlug={props.match.params.gallerySlug}
                deliveryToken={deliveryToken}
                spaceId={spaceId}
                environment={environment}
              />
            )}
          />
          <Route path="/about">coucou</Route>
          <Route path="/">
            <Galleries
              deliveryToken={deliveryToken}
              spaceId={spaceId}
              environment={environment}
            />
          </Route>
        </Switch>
      </div>

      <div className="footer">this is the footer</div>
    </Router>
  );
}

export default App;
