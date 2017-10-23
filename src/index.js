const $    = require('jQuery')
const Words = require('./lib/words')

$(document).ready(() => {
  Words.getTopWord();
})
