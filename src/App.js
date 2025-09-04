import CardList from "./components/card-list/card-list.component.jsx";
import SearchBar from "./components/search-bar/search-bar.component.jsx";
import "./App.css";
import { useState,useEffect } from "react";

const App = () => {

  const [searchField,setSearchFeild]=useState("");
  const [monsters,setMonsters]=useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[]);
  // console.log(searchField);

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ monsters: users }));
  // }

  const onSearchChange = (event) => {
    const searchFieldString=event.target.value.toLowerCase();
    setSearchFeild(searchFieldString);
  };

  // const monsters=[];

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
};

export default App;
