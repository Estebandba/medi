import React from "react";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import PatientDetails from "./components/PatientDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/patient-details/" component={PatientDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
