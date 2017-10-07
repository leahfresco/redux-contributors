import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFilter } from "../actions/index";

class FilterContributors extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.props.setFilter(event.target.value);
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Filter contributors by login"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFilter }, dispatch);
}

export default connect(null, mapDispatchToProps)(FilterContributors);
