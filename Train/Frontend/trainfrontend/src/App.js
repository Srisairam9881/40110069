import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistrationPage from './Components/RegistrationPage';
import TrainDetailsPage from './Components/TrainDetailsPage';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register">
            <RegistrationPage />
          </Route>
          <Route path="/">
            <RegistrationPage />
          </Route>
          <Route path="/train-details">
            <TrainDetailsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
