import React from "react";
import "./styles/styles.scss";
import Galleries from "./components/galleries/Galleries";
import Slideshow from "./components/slideshow/Slideshow";
import Header from "./components/core/Header";
import Footer from "./components/core/Footer";
import About from "./components/about/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const spaceId = "yx8bx9i9yjcr";
const environment = "master";
const deliveryToken = "vO2pP2CV19EMDnQH4jsb9ML-vExsLLHaOcBv14qf75Q";

function App() {
  return (
    <Router>
      <Header />
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

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Galleries
              deliveryToken={deliveryToken}
              spaceId={spaceId}
              environment={environment}
            />
          </Route>
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
