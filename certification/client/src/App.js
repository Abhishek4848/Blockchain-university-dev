import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import GenerateForm from './Components/GenerateForm';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "#fafafa" }}>
        <Switch>
          <Route path="/generate-certificate/:id" component={GenerateForm} />
          <Route path="/display/certificate/:id" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
