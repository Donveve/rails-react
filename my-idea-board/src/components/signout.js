import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Redirect } from 'react-router-dom';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
    const { history } = this.props;
    history.push("/")
  }

  render() {
    return <div></div>;
  }
}

export default connect(null, actions)(Signout);