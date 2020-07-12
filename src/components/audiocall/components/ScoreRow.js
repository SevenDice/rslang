import React, { Component } from 'react';
import Sound from "./Sound";

class ScoreRow extends Component {
  render() {
    const { item } = this.props;

    return (
      <>
        <div className="scope-row">
          <Sound audio={item.audio} />
          {item.word} &ndash; {item.wordTranslate}
        </div>
      </>
    );
  }
}

export default ScoreRow;
