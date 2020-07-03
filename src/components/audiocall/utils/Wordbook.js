import book1 from '../../../data/book1';
import book2 from '../../../data/book2';
import book3 from '../../../data/book3';
import book4 from '../../../data/book4';
import book5 from '../../../data/book5';
import book6 from '../../../data/book6';

class Wordbook {
  getWordsByCriteria(level, total) {
    const words = this.getRandomizedWordsByLevel(level);

    return words.splice(0, total);
  }

  getRandomizedWordsByLevel(level) {
    let words = [];

    switch (parseInt(level)) {
      case 1: words = book1; break;
      case 2: words = book2; break;
      case 3: words = book3; break;
      case 4: words = book4; break;
      case 5: words = book5; break;
      case 6: words = book6;
    }

    return this.randomizeWords(words);
  }

  randomizeWords(words) {
    return words.sort(() => {
      return 0.5 - Math.random();
    });
  }

  getSimilarTranslations(level, wordTranslate, total) {
    const words = this.getRandomizedWordsByLevel(level);
    const [ firstLetter ] = wordTranslate;

    let translations = [];

    words.forEach((item) => {
      if (translations.length === total) {
        return;
      }

      const [ wordFirstLetter ] = item.wordTranslate;

      if (wordFirstLetter === firstLetter) {
        translations.push(item.wordTranslate);
      }
    });

    translations.push(wordTranslate);

    return this.randomizeWords(translations);
  }
}

export default Wordbook;
