import React, { Component } from "react";
import "./App.css";
import data from "./assets/data.json";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/searchbox/serchbox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: data,
      searchField: ''
    };
  }

  render() {
    const { robots, searchField } = this.state;
    const filtetedRobots = robots.filter(robot => (robot.name.toLowerCase().includes(searchField.toLowerCase()))
    );

    return (
      <div className="App">
        <h1>Robots Rolodex</h1>
        <SearchBox
          placeholder="Search"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filtetedRobots}></CardList>
      </div>
    );
  }
}

export default App;
