

/* Exercise 5 */

var filterString = function(value) {
    var digits = value.split('').filter(function(char) {
      return !isNaN(parseInt(char));
    });
    
    return parseInt(digits.join(''));
  };
  