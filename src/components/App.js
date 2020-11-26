import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MainPage from './mainPage/MainPage';
import InfoPage from './infoPage/InfoPage';
import './app.scss';


const App = () => {

  return (
    <div className="app">
      <Router>
        <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route path="/info/:teamId">
              <InfoPage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;