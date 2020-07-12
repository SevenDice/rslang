import React, { Component } from 'react';

const SOUNDS_URL = 'https://raw.githubusercontent.com/irinainina/rslang-data/master/';

class Sound extends Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);

    this.audio = new Audio(this.getSrc());
    this.canStop = true;
  }

  getSrc() {
    return SOUNDS_URL + this.props.audio;
  }

  togglePlay() {
    if (!this.canStop) {
      return;
    }

    this.canStop = false;
    this.audio.src = this.getSrc();
    this.audio.play().then(() => {
      this.canStop = true;
    });
  }

  render() {
    return (
      <>
        <i className="fa fa-volume-up sound" onClick={this.togglePlay} />
      </>
    );
  }
}

export default Sound;
