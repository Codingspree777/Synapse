import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../actions/index";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>dash</p>
      </div>
    );
  }
}

export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )
(DashBoardContainer)
);
