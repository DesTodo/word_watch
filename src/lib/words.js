const $           = require('jQuery')
const baseURL     = 'https://wordwatch-api.herokuapp.com/api/v1/' // slash included!
const topWordUrl  = 'top_word'
const postWordUrl = 'words'
//const htmlBuilder = require('./lib/htmlBuilder')

class Words {

  // For story 2,
  // each word should be sent via POST request
  // to the Word Watch API. See https://github.com/tmikeschu/wordwatch_api for details.
  // PO

  static postWord(inputWord){
    let data = { word: { value: "sample" } }
    $.post(`${baseURL}${postWordUrl}`, data){
    .then(data){
      console.log(data)
    }}
  }

  static inputWordCount(){ // start breakdownword count function

    //let inputText =

    let inputEach = $('.input-value').val.split("") // split input words
    debugger
    let wordCount = {}
    alert(`${inputCount}`)
    inputCount.forEach((word) => {
      word = word.toLowerCase()
      return wordCount[word] = wordCount[word] + 1 || 1 // keep word count
    })
    for (var property in word){
      if (word.hasOwnProperty(property)) {
        let diplayInput = $(".word-count") // append to right side of page
        displayInput.append(`<p style= ${wordCount[property]} em> ${property} </p>`) //make input relative to frequency
      }
    }
  }  //end breakdown count function

  // static submitInput(){ // start submitInput
  //   alert('clicked')
  //   $('.input-button').on('click', inputWordCount() )} //end  submitInput




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
