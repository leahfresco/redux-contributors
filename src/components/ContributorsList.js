import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchReduxContributors } from "../actions";

class ContributorsList extends Component {
  constructor(props) {
    super(props);

    this.renderContributors = this.renderContributors.bind(this);
  }

  renderContributors({ login, avatar_url }) {
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
              <i
                className="text-right fa fa-2x fa-thumbs-up contributor-detail"
                aria-hidden="true"
              />
              <i
                className="text-right fa fa-2x fa-thumbs-down contributor-detail"
                aria-hidden="true"
              />
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

export default connect(mapStateToProps)(ContributorsList);
