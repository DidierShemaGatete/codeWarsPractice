

/* Exercise 5 */

const filterString = (value) {
    var digits = value.split('').filter(function(char) {
      return !isNaN(parseInt(char));
    });
    
    return parseInt(digits.join(''));
  };
  

function filter(arr){
return arr.filter(()=> !isNaN(a))
}
  