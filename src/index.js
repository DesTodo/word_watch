const $     = require('jQuery')
const Words = require('./lib/words')
//const htmlBuilder = require('./lib/htmlBuilder')

$(document).ready(() => {
  Words.getTopWord();

  $('button').on('click',() => {
    alert( "Handler for .click() called." )
  })
})
