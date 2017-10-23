const $          = require('jQuery')
const baseURL    = 'https://wordwatch-api.herokuapp.com/api/v1/' // slash included!
const topWordUrl = 'top_word'
//const htmlBuilder = require('./lib/htmlBuilder')

class Words {

  static getTopWord(){ // start getTopWord method
    this.makeApiCall()
    .then((word) => {
      let topWord   =  Object.keys(word.word) // returns the top word string
      let topCount  =  word.word[topWord] // returns the numeric value for the word count
      alert(`${topWord} and count ${topCount}`)
      let displayHeader = $('h3')
      //htmlBuilder.appendTopWord(displayHeader)
      displayHeader.append(`<p> Top Word: ${topWord} (${topCount}) </p>`)
    })
  } //end getTopWord method

  static makeApiCall(){ // start get AJAX call to pass to getTopWord method
    return $.getJSON(`${baseURL}${topWordUrl}`)
  } //end AJAX call get

} // end class Words constructor

module.exports = Words
