import React, {Component, createRef} from 'react';
import { STATUS_WAITING } from './Game';
import Sound from './Sound';

const IMAGES_URL = 'https://raw.githubusercontent.com/irinainina/rslang-data/master/';

class Repeat extends Component {
  constructor(props) {
    super(props);

    this.sound = createRef();
  }

  play() {
    this.sound.current.togglePlay();
  }

  render() {
    let className = 'repeat-button';

    if (this.props.statusIn([STATUS_WAITING])) {
      className += ' without-image';
    }

    return (
      <>
        <div className={className}
             style={{ backgroundImage: `url(${IMAGES_URL + this.props.image})` }}>
          <Sound ref={this.sound} audio={this.props.audio} />
        </div>
      </>
    );
  }
}

export default Repeat;
