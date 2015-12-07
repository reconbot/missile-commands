import React from 'react';
import dispatcher from '../dispatcher'

export default React.createClass({
  getInitialState(){
    return {
      armed: false
    };
  },

  onChange(e){
    this.setState({
      armed: e.target.checked
    });

    dispatcher.dispatch({
      type: e.target.checked ? 'armer:closed' : 'armer:open'
    });
  },

  render(){
    return (
      <div>
        <label><input type="checkbox" onChange={this.onChange} checked={this.state.armed} /> Armed</label>
      </div>
    );
  }
});
