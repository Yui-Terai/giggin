import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Gi<span className="highlight">gg</span>in
        </h1>
        <div className="App">
          <div className="App-playlist"></div>
        </div>
      </div>
    );
  }
}

export default App;
