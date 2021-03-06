import React, { Component } from 'react';
import Button from './Button';

export const AVAILABLE_LEVELS = 6;

class LevelSelector extends Component {
  getList() {
    const levels = AVAILABLE_LEVELS + 1;

    return new Array(levels).fill('', 1, levels);
  }

  render() {
    return (
      <>
        <p>Ход игры: звучит произношение слова на английском языке, нужно выбрать перевод слова из пяти предложенных
          вариантов ответа.</p>
        <h4>Выбор уровня</h4>
        <select name="level" defaultValue={this.props.level} onChange={this.props.handleLevelChange}>
          {this.getList().map((value, index) => {
            return <option key={index} value={index}>{index}</option>
          })}
        </select>
        <br />
        <Button label="Начать игру" handleEvent={this.props.handleGame} />
      </>
    );
  }
}

export default LevelSelector;
