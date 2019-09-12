import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        name: 'test name',
        artist: 'test artist',
        album: 'test album',
        id: 1
      }]
    }
  }
  render() {
    return (
      <div>
        <h1>
          Gi<span className="highlight">gg</span>in
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
