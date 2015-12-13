import React from 'react';

export default React.createClass({
  armed(){
    return this.props.status !== 'rest';
  },

  onChange(e){
    if (this.armed()){
      this.props.disarm();
    } else {
      this.props.arm();
    }
  },

  render(){
    return (
      <div>
        <label><input type="checkbox" onChange={this.onChange} checked={this.armed()} /> Armed</label>
      </div>
    );
  }
});
