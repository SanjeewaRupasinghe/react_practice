import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField:""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {

    const filteredMonsters=this.state.monsters.filter((monster)=>
      monster.name.toLowerCase().includes(this.state.searchField)
    )

    return (
      <div className="App">
        <header className="App-header">
          <input type="search" onChange={(event) => {
            this.setState({searchField:event.target.value})
          }} />
          <h4>
            {filteredMonsters.map((monster) => (
              <p key={monster.id}>{monster.name}</p>
            ))}
          </h4>
        </header>
      </div>
    );
  }
}

export default App;
