import React from 'react';
import Armer from './armer';
import dispatcher from '../dispatcher'

export default React.createClass({
  componentWillMount(){
    this.props.store.on('change', this.updateState);
    this.setState(this.props.store.state);
  },
  componentWillUnMount(){
    this.props.store.off('change', this.updateState);
  },
  updateState(state){
    this.setState(state);
  },
  onClick(){
    dispatcher.dispatch({
      type: 'launcher:press'
    });
  },
  render(){
    return (<div>
      <h1>Launcher is {this.state.state}</h1>
      <Armer />
      <div>
        <button onClick={this.onClick}>Launch</button>
      </div>
    </div>);
  }
});
