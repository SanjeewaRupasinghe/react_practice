import { Component } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBar from "./components/search-bar/search-bar.component.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar onChangeHandler={onSearchChange} />
          <CardList monsters={filteredMonsters} />
        </header>
      </div>
    );
  }
}

export default App;
