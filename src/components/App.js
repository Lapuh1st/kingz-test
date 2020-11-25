import React from "react";
import MainPage from "./mainPage/MainPage";
import InfoPage from "./infoPage/InfoPage";
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

let App = () => {

  return (
    <div className="app">
      <Router>
        <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route path="/info">
              <InfoPage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;