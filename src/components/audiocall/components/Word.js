import React, { Component, createRef } from 'react';
import { STATUS_NOT_PASSED, STATUS_NOT_SUCCESS, STATUS_PASSED, STATUS_SUCCESS } from './Game';
import Button from './Button';

class Word extends Component {
  constructor(props) {
    super(props);

    this.handleAction = this.handleAction.bind(this);
    this.handleChoose = this.handleChoose.bind(this);
    this.handleKey = this.handleKey.bind(this);

    this.elements = [];

    this.props.similarTranslations.map((item, index) => {
      this.elements[index] = createRef();
    });

    this.state = {
      disableChoose: false,
      timeStamp: this.getTimeStamp(),
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  getTimeStamp() {
    return (new Date()).getTime();
  }

  handleAction() {
    this.renewElements();
    this.props.handleAction();
  }

  renewElements() {
    if (!this.props.isLastWord) {
      this.setState({disableChoose: false, timeStamp: this.getTimeStamp()});
    }
  }

  handleChoose(event) {
    if (this.state.disableChoose) {
      return;
    }

    const target = event.target;
    const isSuccess = target.textContent === this.props.wordTranslate;

    target.classList.add(isSuccess ? 'success' : 'not-success');

    if (!isSuccess) {
      this.elements.map((item) => {
        if (item.current.textContent === this.props.wordTranslate) {
          item.current.classList.add('success');
        }
      });
    }

    this.setState({disableChoose: true});
    this.props.handleChoose(isSuccess);
  }

  handleKey(event) {
    const key = parseInt(event.key);
    const index = key - 1;

    switch (key) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        if (this.elements[index] && this.elements[index].current) {
          this.elements[index].current.click();
        }
        break;
      default:
        return;
    }
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
            return <li key={this.state.timeStamp + index}
                       className="button"
                       onClick={this.handleChoose}
                       ref={this.elements[index]}>{value}</li>
          })}
        </ul>

        <Button label={actionLabel}
                handleEvent={this.handleAction} />
      </>
    );
  }
}

export default Word;
