import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchReduxContributors } from "../actions";
import { upvoteContributor, downvoteContributor } from "../actions/index";
import { bindActionCreators } from "redux";

class ContributorsList extends Component {
  constructor(props) {
    super(props);

    this.renderContributors = this.renderContributors.bind(this);
  }

  renderContributors({ login, avatar_url, votes }) {
    if (login.startsWith(this.props.filter)) {
      return (
        <li key={login} className="media text-center contributor-media">
          <img
            src={avatar_url}
            className="d-flex align-self-center mr-3 contributor-avatar"
          />
          <div className="media-object">
            <p className="mt-3 mb-1 contributor-detail">
              {login}
              <a
                className="text-right fa fa-2x fa-thumbs-up contributor-detail"
                aria-hidden="true"
                onClick={() => this.props.upvoteContributor(login)}
              />
              <a
                className="text-right fa fa-2x fa-thumbs-down contributor-detail"
                aria-hidden="true"
                onClick={() => this.props.downvoteContributor(login)}
              />
              &emsp; Votes: {votes}
            </p>
          </div>
        </li>
      );
    }
  }

  render() {
    return (
      <div className="contributors-list">
        <ul className="list-unstyled">
          {this.props.contributors.map(this.renderContributors)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ contributors, filter }) {
  return { contributors, filter };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { upvoteContributor, downvoteContributor },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ContributorsList);
