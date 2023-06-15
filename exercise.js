
/* Exercise_1 */

function joinStrings(string1, string2) {

    if (!isNaN(parseInt(string1))) {

        string1 = String(string1);

    } else if (!isNaN(parseInt(string2))) {

        string2 = String(string2);
    }

    return `${string1} ${string2}`
}



/* Exercise 2 */

function sumOfDifferences(arr) {
    if (arr.length === 0 || arr.length === 1) {
      return 0;
    }
  
    arr.sort((a, b) => b - a);
    let sum = 0;
  
    for (let i = 0; i < arr.length - 1; i++) {
      sum += arr[i] - arr[i + 1];
    }
  
    return sum;
  }



  /* Exercise 3 */

  
function arrayPlusArray(arr1, arr2) {
  
  
    return arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b)
  }





/* Exercise 4 */

class SmallestIntergerFinder{
    findSmallestInt(args){
        return Math.min(...args)
    }

}





/* Exercise 5 */

var filterString = function(value) {
    var digits = value.split('').filter(function(char) {
      return !isNaN(parseInt(char));
    });
    
    return parseInt(digits.join(''));
  };
 