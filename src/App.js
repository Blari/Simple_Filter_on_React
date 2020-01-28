import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import data from "./assets/data.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: Object.values(data),
      searchField: ''
    };
  }

  render() {
    return (
      <div className="App">

        <input
          type='search'
          placeholder='search monster'
          onChange={e => {
            this.setState({ searchField: e.target.value },
              () => console.log(this.state)
            );
          }}
        />

        < CardList monsters={this.state.monsters} ></CardList>
      </div>
    );
  }
}

export default App;