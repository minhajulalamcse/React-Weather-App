import React, { Component } from "react";
import "./App.css";
import Current from "./components/current";
import Forecast from "./components/forecast";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container App">
        <h3 className="heading indigo-text">Weather App</h3>
        <div className="row card">
          <Current />
          <Forecast />
        </div>
      </div>
    );
  }
}

export default App;
