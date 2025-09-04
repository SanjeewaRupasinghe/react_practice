import { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input placeholder="Search monsters" onChange={this.props.onChangeHandler} type="search" />
      </div>
    );
  }
}

export default SearchBar;
