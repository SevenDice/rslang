import React, {Component, createRef} from 'react';
import Repeat from './Repeat';
import Word from './Word';
import Wordbook from '../utils/Wordbook';
import Button from './Button';
import Score from './Score';
import ProgressBar from "./ProgressBar";

const SIMILAR_TRANSLATIONS = 4;
const INITIAL_WORD_INDEX = 0;

export const WORDS_PER_PAGE = 5;

export const STATUS_WAITING = 'waiting';
export const STATUS_NOT_SUCCESS = 'not_success';
export const STATUS_SUCCESS = 'success';
export const STATUS_PASSED = 'passed';
export const STATUS_NOT_PASSED = 'not_passed';

class Game extends Component {
  constructor(props) {
    super(props);

    this.prepareWords();
    this.prepareStatistic();

    this.handleAction = this.handleAction.bind(this);
    this.handleChoose = this.handleChoose.bind(this);
    this.statusIn = this.statusIn.bind(this);

    this.score = createRef();
    this.repeat = createRef();

    this.state = {
      status: STATUS_WAITING,
      wordIndex: INITIAL_WORD_INDEX,
      similarTranslations: this.getSimilarTranslations(INITIAL_WORD_INDEX),
    };
  }

  componentDidMount() {
    this.playSound();
  }

  prepareWords() {
    this.wordbook = new Wordbook();
    this.words = this.wordbook.getWordsByCriteria(this.props.level, WORDS_PER_PAGE);
  }

  prepareStatistic() {
    this.statistic = {
      errors: [],
      skipped: [],
      success: [],
    };
  }

  getSimilarTranslations(wordIndex) {
    return this.wordbook.getSimilarTranslations(
      this.props.level,
      this.words[wordIndex].wordTranslate,
      SIMILAR_TRANSLATIONS
    );
  }

  playSound() {
    this.repeat.current.play();
  }

  handleAction() {
    switch (this.state.status) {
      case STATUS_WAITING: return this.skipWord();
      case STATUS_NOT_SUCCESS:
      case STATUS_SUCCESS: return this.nextWord();
      default: this.showResults();
    }
  }

  isLastWord() {
    return this.state.wordIndex + 1 === WORDS_PER_PAGE;
  }

  handleChoose(isSuccess) {
    if (isSuccess) {
      this.statistic.success.push(this.words[this.state.wordIndex]);
    } else {
      this.statistic.errors.push(this.words[this.state.wordIndex]);
    }

    if (this.isLastWord()) {
      this.setState({status: this.hasErrors() ? STATUS_NOT_PASSED : STATUS_PASSED});
    } else {
      this.setState({status: isSuccess ? STATUS_SUCCESS : STATUS_NOT_SUCCESS});
    }
  }

  skipWord() {
    this.statistic.skipped.push(this.words[this.state.wordIndex]);

    if (!this.isLastWord()) {
      const newWordIndex = this.state.wordIndex + 1;

      this.setState({
        wordIndex: newWordIndex,
        similarTranslations: this.getSimilarTranslations(newWordIndex),
      }, this.playSound);

      return;
    }

    if (this.hasErrors()) {
      this.setState({status: STATUS_NOT_PASSED});
    } else {
      this.setState({status: STATUS_PASSED});
    }
  }

  nextWord() {
    const newWordIndex = this.state.wordIndex + 1;

    this.setState({
      status: STATUS_WAITING,
      wordIndex: newWordIndex,
      similarTranslations: this.getSimilarTranslations(newWordIndex),
    }, this.playSound);
  }

  showResults() {
    this.score.current.show();
  }

  hasErrors() {
    return this.statistic.success.length !== WORDS_PER_PAGE;
  }

  statusIn(list) {
    let found = false;

    list.forEach((value) => {
      if (this.state.status === value) {
        found = true;
      }
    });

    return found;
  }

  render() {
    const word = this.words[this.state.wordIndex];

    return (
      <>
        <h5>Уровень: {this.props.level}</h5>

        <div>
          <Repeat ref={this.repeat} image={word.image} audio={word.audio} statusIn={this.statusIn} />
          <Word status={this.state.status}
                word={word.word}
                wordTranslate={word.wordTranslate}
                isLastWord={this.isLastWord()}
                similarTranslations={this.state.similarTranslations}
                handleAction={this.handleAction}
                handleChoose={this.handleChoose}
                statusIn={this.statusIn} />
        </div>

        {!this.statusIn([STATUS_NOT_PASSED, STATUS_PASSED]) &&
          <Button className="stop-game" label="Завершить игру" handleEvent={this.props.handleGame} />
        }

        <Score ref={this.score}
               level={this.props.level}
               statistic={this.statistic}
               handleGame={this.props.handleGame}
               handleLevel={this.props.handleLevel} />

        <ProgressBar number={this.state.wordIndex + 1}
                     total={WORDS_PER_PAGE} />
      </>
    );
  }
}

export default Game;
