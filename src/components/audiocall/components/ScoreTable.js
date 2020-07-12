import React, { Component } from 'react';
import ScoreRow from './ScoreRow';

class ScoreTable extends Component {
  render() {
    const { title, items } = this.props;

    if (items.length < 1) {
      return null;
    }

    return (
      <>
        <h5>{title}</h5>

        {items.map((item, index) => <ScoreRow key={index} item={item} />)}

        <br /><br />
      </>
    );
  }
}

export default ScoreTable;
