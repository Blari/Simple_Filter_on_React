import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import data from "./assets/data.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: Object.values(data)
    };
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
