/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

const addition = (...numbers) => {
  // all your code
  var addition = numbers.reduce(function (a, b) {
    if (numbers.length == 0) {
      console.log("Invalid Input");
      return;
    } else {
      for (let i of numbers) {
        if (!isNaN(i)) {
          return a + b;
        } else {
          console.log("Invalid Input");
          return;
        }
      }
    }
  }, 0);
  console.log(addition);
};
addition(10, 20, 30);
module.exports = addition;
