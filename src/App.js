import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Ivan", age: "25" },
      { name: "Max", age: "28" },
      { name: "Alex", age: "33" }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: "26" },
        { name: "MAX", age: "29" },
        { name: "ALEX", age: "34" }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Ivan", age: "26" },
        { name: event.target.value, age: "29" },
        { name: "ALEX", age: "34" }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.switchNameHandler.bind(this, "Andrew")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Andrew!")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Andrew!")}
          changed={this.nameChangedHandler}
        >
          My hobbies: JS
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Andrew!")}
        />
      </div>
    );
  }
}

export default App;
