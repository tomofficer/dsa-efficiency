
/**
 The missing number problem
 Implement algorithm 1 here
*/
//solution 2, shorter code
function missing1(array){
    for(let i = 1; i < array.length; i++) {
        if(!array.includes(i)) return i
    }
  }



/**
The missing number problem
Implement algorithm 2 here
*/

function missing2(array) {
  let N = array.length + 1;
  let fullSum = 0;
  for (let i =1; i <= N; i++) {
    fullSum += i;
  }
  //shorter code for sum variable line 27
//   let sum = array.reduce((a, b) => a + b);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  };
  
  return fullSum - sum;
}

module.exports = {missing1, missing2}