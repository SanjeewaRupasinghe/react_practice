import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters:[
        {id:1,name:"abc"},
        {id:2,name:"def"},
        {id:3,name:"ghi"},
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>
            {this.state.monsters.map(monster => (
              <p key={monster.id}>{monster.name}</p>
            ))}
          </h4>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
