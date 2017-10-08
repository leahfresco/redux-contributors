import React, { Component } from "react";
import ContributorsList from "./ContributorsList";
import FilterContributors from "./FilterContributors";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchReduxContributors } from "../actions";

class App extends Component {
  componentWillMount() {
    this.props.fetchReduxContributors(1);
    this.props.fetchReduxContributors(2);
    this.props.fetchReduxContributors(3);
    this.props.fetchReduxContributors(4);
    this.props.fetchReduxContributors(5);
    this.props.fetchReduxContributors(6);
  }

  render() {
    return (
      <div className="app">
        <h3 className="text-center">Redux Contributors</h3>
        <FilterContributors />
        <ContributorsList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchReduxContributors }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
