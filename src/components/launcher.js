import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import Armer from './armer';

const Launcher = React.createClass({
  render(){
    const { launch, arm, disarm, status} = this.props
    return (<div>
      <h1>Launcher is {status}</h1>
      <Armer {... { status, arm, disarm }}/>
      <div>
        <button onClick={ launch }>Launch</button>
      </div>
    </div>);
  }
});

export default connect(state => state, actionCreators)(Launcher);
