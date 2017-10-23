const $     = require('jQuery')
const Words = require('./lib/words')
//const htmlBuilder = require('./lib/htmlBuilder')

$(document).ready(() => {
  Words.getTopWord()
  $('.input-button').on('click', inputWordCount())
})
  //Words.submitInput()
  // $('button').on('click', inputWordCount() => {
  //   alert( "Handler for .click() called." )
  // })

// For story 2,
// each word should be sent via POST request
// to the Word Watch API. See https://github.com/tmikeschu/wordwatch_api for details.
// POST	/api/v1/words	{ word: { value: "sample" } }	{ message: "sample added!" }
