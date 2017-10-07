import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchReduxContributors } from "../actions";

class ContributorsList extends Component {
  componentWillMount() {
    this.props.fetchReduxContributors();
  }

  renderContributors(contributor) {
    return (
      <li key={contributor.id} className="media text-center">
        <img
          src={contributor.avatar_url}
          className="d-flex align-self-center mr-3 contributor-avatar"
        />
        <div className="media-object">
          <p className="mt-2 mb-1">{contributor.login}</p>
        </div>
      </li>
    );
  }

  render() {
    console.log(this.props.contributors);
    return (
      <div className="text-center">
        <h3>Redux Contributors</h3>
        <ul className="list-unstyled">
          {this.props.contributors.map(this.renderContributors)}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchReduxContributors }, dispatch);
}

function mapStateToProps({ contributors }) {
  return { contributors };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContributorsList);
