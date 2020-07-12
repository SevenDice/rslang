import React, { Component } from 'react';
import ScoreTable from './ScoreTable';
import Button from './Button';
import {AVAILABLE_LEVELS} from "./LevelSelector";

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    }
  }

  show() {
    this.setState({hidden: false});
  }

  hide() {
    this.setState({hidden: true});
  }

  render() {
    const { statistic, level } = this.props;
    const { errors, skipped, success } = statistic;
    const hasErrors = !(errors.length === 0 && skipped.length === 0);

    let className = 'score';

    if (this.state.hidden) {
      className += ' hidden';
    }

    return (
      <>
        <div className={className}>
          <h1>Результаты игры</h1>

          <h6>
            Уровень пройден
            {!hasErrors ? ' без ошибок!' : ' с ошибками :('}
          </h6>

          <br />

          <ScoreTable title="Слова с ошибками" items={errors} />
          <ScoreTable title="Пропущенные слова" items={skipped} />
          <ScoreTable title="Правильные ответы" items={success} />

          <div>
            <Button className="stop-game" label="Завершить игру" handleEvent={this.props.handleGame} />

            {hasErrors &&
              <Button label="Попробовать еще раз" handleEvent={() => this.props.handleLevel(level)} />
            }

            {level < AVAILABLE_LEVELS && !hasErrors &&
              <Button className="next-level"
                      label="Следующий уровень"
                      handleEvent={() => this.props.handleLevel(level + 1)} />
            }
          </div>
        </div>
      </>
    );
  }
}

export default Score;
