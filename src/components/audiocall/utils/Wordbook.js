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
    let words;

    switch (parseInt(level)) {
      case 2: words = book2; break;
      case 3: words = book3; break;
      case 4: words = book4; break;
      case 5: words = book5; break;
      case 6: words = book6; break;
      default: words = book1;
    }

    return this.randomizeWords(words);
  }

  getRandomizedWords() {
    let words = [ ...book1, ...book2, ...book3, ...book4, ...book5, ...book6 ];

    return this.randomizeWords(words);
  }

  randomizeWords(words) {
    return words.sort(() => {
      return 0.5 - Math.random();
    });
  }

  getSimilarTranslations(wordTranslate, total) {
    const words = this.getRandomizedWords();
    const [ firstLetter ] = wordTranslate;

    let translations = [];

    words.forEach((item) => {
      if (translations.length === total || item.wordTranslate === wordTranslate) {
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
