

/* Exercise 5 */

const filterString = (value) {
    var digits = value.split('').filter((char) => {
      return !isNaN(parseInt(char));
    });
    
    return parseInt(digits.join(''));
  };
  

function filter(arr){
return arr.filter(()=> !isNaN(a))
}
  
