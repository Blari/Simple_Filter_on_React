import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      persons: []
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

    fetch("https://api.generated.photos/api/v1/faces?per_page=10", {
      headers: {
        Authorization: "API-Key zLLXLX6p66VFZ8TE3p81Ow"
      }
    })
      .then(response => response.json())
      .then(faces => this.setState({ persons: faces }))
      .then(console.log(this.state.persons));
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
