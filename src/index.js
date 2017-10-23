const $     = require('jQuery')
const Words = require('./lib/words')
//const htmlBuilder = require('./lib/htmlBuilder')

$(document).ready(() => {
  Words.getTopWord()
  $('.input-button').on('click', inputWordCount())


// add functionality for user story 4
  $(document).keypress(function(e){
    if (e == 13){
      Words.inputWordCount()
    }
  })
})
