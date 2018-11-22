import Skills from "./components/Skills";
import { Hello } from "./components/Hello";
import * as React from "react";
import "./App.css";
import { Skill } from "./model";

const logo = require("./logo.svg");

export interface AppState {
  skills: Skill[];
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      skills: [
        { id: 1, name: "node.js" },
        { id: 2, name: "type script" },
        { id: 3, name: "pnp core js" }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Hello />
          <Skills
            removeMsg="Click on item to remove"
            skills={this.state.skills}
          />
        </div>
      </div>
    );
  }
}

export default App;
