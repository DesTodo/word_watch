const $          = require('jQuery')
const baseURL    = 'https://wordwatch-api.herokuapp.com/api/v1/' // slash included!
const topWordUrl = 'top_word'
//const htmlBuilder = require('./lib/htmlBuilder')

class Words {


  // and paste a paragraph into the "Paste text here" textarea
  // and I click "Break down"
  // Then I should see text appear on the right side of the page
  // With each word from the paragraph only shown once
  // and the size of each word is relative to its frequency in the paragraph.












  static getTopWord(){ // start getTopWord method
    this.makeApiCall()
    .then((word) => {
      let topWord   =  Object.keys(word.word) // returns the top word string
      let topCount  =  word.word[topWord] // returns the numeric value for the word count
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
