import React, { Component } from "react";
import "./App.css";
import Current from "./components/current";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="container App">
        <h3 className="heading indigo-text">Weather App</h3>
        <div className="card">
          <Current />
        </div>
      </div>
    );
  }
}

export default App;
