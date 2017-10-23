const $          = require('jQuery')
const baseURL    = 'https://wordwatch-api.herokuapp.com/api/v1/' // slash included!
const topWordUrl = 'top_word'

class Words {

  static getTopWord(){ // start getTopWord method
    this.makeApiCall()
    .then((word) => {
      return console.log(word)
    })
    //$.getJSON(`${baseURL} + ${topWordUrl}`, ((word) => {
// {"word":{"test":30}}

    } //end getTopWord method

  static makeApiCall(){ // start get AJAX call to pass to getTopWord method
    return $.getJSON(`${baseURL} + ${topWordUrl}`)
  } //end AJAX call get

} // end class Words constructor

// As a user,
// when I visit Word Watch
// I should see the top used word and its count (based on the Word Watch API database)
// in the "Top Word: " heading.
// e.g., "Top Word: ciabatta (22)"

export { Person as default}
//export.modules = Words
