import React from "react";
import "./SearchBar.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
    this.setState({ term: "" });
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          value={this.state.term}
          placeholder="Enter a Song, Album or Artist"
          onChange={this.handleTermChange}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
