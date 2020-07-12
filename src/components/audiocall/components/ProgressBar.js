import React, { Component } from 'react';

class ProgressBar extends Component {

  render() {
    let percent = Math.round(100 / this.props.total * this.props.number);

    return (
      <>
        <div className="progress-bar" style={{ width: `${percent}%` }} />
      </>
    );
  }
}

export default ProgressBar;
