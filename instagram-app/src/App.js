import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { PostContainer } from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div>
          <PostContainer data={this.state.data} />
        </div>
      </div>
    );
  }
}
export default App;
