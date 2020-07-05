import React from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import NavArrows from "./NavArrows";
import LanguageCard from "./LanguageCard";

export default class Lingvist extends React.Component {
  state = {
    showModal: false,
    isPrev: false,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  handleLeftClick = () => {
    const { currentIndex, updateIndex } = this.props;
    if (this.props.currentIndex < 1) return;
    if (this.state.isPrev) return;
    this.setState({ isPrev: true });
    updateIndex(currentIndex - 1);
  };
  handleRightClick = () => {
    const { currentIndex, updateIndex } = this.props;
    if (this.state.isPrev) {
      this.setState({
        isPrev: false,
      });
      updateIndex(currentIndex + 1);
    } else {
      // TODO should trigger form submission
    }
  };
  handleSuccess = () => {
    const { currentIndex, updateIndex } = this.props;
    updateIndex(currentIndex + 1);
  };
  render() {
    const { showModal, isPrev } = this.state;
    const {
      wordId,
      wordGroup,
      wordPage,
      wordForeign,
      wordImage,
      wordAudio,
      wordAudioMeaning,
      wordAudioExample,
      wordTextMeaning,
      wordTextExample,
      wordTranscription,
      wordTextExampleTranslate,
      wordTextMeaningTranslate,
      wordTranslate,
      wordsPerExampleSentence,
      currentIndex,
    } = this.props;
    console.log(
      wordId +"\n",
      wordGroup+"\n",
      wordPage+"\n",
      wordForeign+"\n",
      wordImage+"\n",
      wordAudio+"\n",
      wordAudioMeaning+"\n",
      wordAudioExample+"\n",
      wordTextMeaning+"\n",
      wordTextExample+"\n",
      wordTranscription+"\n",
      wordTextExampleTranslate+"\n",
      wordTextMeaningTranslate+"\n",
      wordTranslate+"\n",
      wordsPerExampleSentence+"\n",
      currentIndex
    );
    return showModal ? (
      <Modal>
        {/* <LevelsInfo toggleModal={this.toggleModal} /> */}
      </Modal>
    ) : (
      <div className="cards-startpage">
          <NavArrows
            isPrev={isPrev}
            onLeftClick={this.handleLeftClick}
            onRightClick={this.handleRightClick}
          >
            <LanguageCard
              wordId={wordId}
              wordGroup={wordGroup}
              wordPage={wordPage}
              wordForeign={wordForeign}
              wordImage={wordImage}
              wordAudio={wordAudio}
              wordAudioMeaning={wordAudioMeaning}
              wordAudioExample={wordAudioExample}
              wordTextMeaning={wordTextMeaning}
              wordTextExample={wordTextExample}
              wordTranscription={wordTranscription}
              wordTextExampleTranslate={wordTextExampleTranslate}
              wordTextMeaningTranslate={wordTextMeaningTranslate}
              wordTranslate={wordTranslate}
              wordsPerExampleSentence={wordsPerExampleSentence}
              toggleModal={this.toggleModal}
              handleSuccess={this.handleSuccess}
              isCorrect={isPrev}
              currentIndex={currentIndex}
            />
          </NavArrows>
        <div/>
      </div>
    );
  }
}

Lingvist.propTypes = {
  wordId: PropTypes.string,
  wordGroup: PropTypes.number,
  wordPage: PropTypes.number,
  wordForeign: PropTypes.string,
  wordImage: PropTypes.string,
  wordAudio: PropTypes.string,
  wordAudioMeaning: PropTypes.string,
  wordAudioExample: PropTypes.string,
  wordTextMeaning: PropTypes.string,
  wordTextExample: PropTypes.string,
  wordTranscription: PropTypes.string,
  wordTextExampleTranslate: PropTypes.string,
  wordTextMeaningTranslate: PropTypes.string,
  wordTranslate: PropTypes.string,
  wordsPerExampleSentence: PropTypes.number,
  currentIndex: PropTypes.number,
  updateIndex: PropTypes.func,
};
