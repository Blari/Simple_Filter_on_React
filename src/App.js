import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import data from "./assets/data.json";
import { SearchBox } from "./components/searchbox/serchbox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: Object.values(data),
      searchField: ""
    };
  }

  render() {
    const { monsters, searchField } = this.state;
    const filtetedMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={e => this.setState({ searchField: e.target.values })}
        />
        <CardList monsters={filtetedMonsters}></CardList>
      </div>
    );
  }
}

export default App;
