import React, { Component } from 'react';
import { STATUS_NOT_PASSED, STATUS_NOT_SUCCESS, STATUS_PASSED, STATUS_SUCCESS } from './Game';
import Button from './Button';

class Word extends Component {
  constructor(props) {
    super(props);

    this.handleAction = this.handleAction.bind(this);
    this.handleChoose = this.handleChoose.bind(this);

    this.state = {
      disableChoose: false,
      timeStamp: this.getTimeStamp(),
    };
  }

  getTimeStamp() {
    return (new Date()).getTime();
  }

  handleAction() {
    if (!this.props.isLastWord) {
      this.setState({disableChoose: false, timeStamp: this.getTimeStamp()});
    }

    this.props.handleAction();
  }

  handleChoose(event) {
    if (this.state.disableChoose) {
      return;
    }

    const target = event.target;
    const isSuccess = target.textContent === this.props.wordTranslate;

    target.classList.add(isSuccess ? 'success' : 'not-success');

    this.setState({disableChoose: true});
    this.props.handleChoose(isSuccess);
  }

  render() {
    let actionLabel = 'Пропустить слово';

    if (this.props.statusIn([STATUS_NOT_SUCCESS, STATUS_SUCCESS])) {
      actionLabel = 'Следующее слово';
    } else if (this.props.statusIn([STATUS_NOT_PASSED, STATUS_PASSED])) {
      actionLabel = 'Показать результаты';
    }

    return (
      <>
        <br />
        <h4 className="current-word">{this.props.word}</h4>
        <br />

        <ul className={this.state.disableChoose ? 'disabled' : null}>
          {this.props.similarTranslations.map((value, index) => {
            return <li key={this.state.timeStamp + index} className="button" onClick={this.handleChoose}>{value}</li>
          })}
        </ul>

        <Button label={actionLabel} handleEvent={this.handleAction} />
      </>
    );
  }
}

export default Word;
