import CardList from "./components/card-list/card-list.component.jsx";
import SearchBar from "./components/search-bar/search-bar.component.jsx";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchFeild] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // new string field
  const [newStringField, setNewStringField] = useState("");

  const onNewStringChange = (event) => {
    const newStringFieldString = event.target.value.toLowerCase();
    setNewStringField(newStringFieldString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      console.log(searchField);
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchFeild(searchFieldString);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onChangeHandler={onSearchChange} />
        <SearchBar onChangeHandler={onNewStringChange} placeholder="nothing" />
        <CardList monsters={filteredMonsters} />
      </header>
    </div>
  );
};

export default App;
