const $          = require('jQuery')


class htmlBuilder{

  static appendTopWord(element){
    element.append(`<p> Top Word: ${topWord} (${topCount}) </p>`)
  }
}


module.exports = htmlBuilder
