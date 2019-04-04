import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Person name="Ivan" age="25" />
        <Person name="Max" age="28">
          My hobbies: JS
        </Person>
        <Person name="Alex" age="31" />
      </div>
    );
  }
}

export default App;
