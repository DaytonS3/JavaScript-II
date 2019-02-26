// Create a higher order function and invoke the 
// callback function to test your work. 
//You have been provided an example of a problem and 
//a solution to see how this works with our items array.  
//Study both the problem and the solution to figure
// out the rest of the problems.





  // //Given this problem: 
  
  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // // Potential Solution:

  // // Higher order function using "cb" as the call back
  // function firstItem(arr, cb) {
  //   return cb(arr[0]);
  // }

  // // Function invocation 
  // firstItem(items, function(first) {
  //   console.log(first)
  // });

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];











function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(items.length);
}

getLength(items, function(ArrL){
  console.log(ArrL);
});












function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(items[items.length - 1]);
}

last(items, function(lastI){
  console.log(lastI);
});












function sumNums(parem1, parem2, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(parem1, parem2);
}

function add(a, b) {
  return a + b;
}

console.log(sumNums(2, 4, add));














function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function multiplyN(c, d) {
  return c * d;
}

console.log(multiplyNums(2,5, multiplyN));

















function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);


} 

function contain(item, list) {
  for(var i = 0; i<list.length;i++) {
    if(item[i] === list) {
      return true;
    }else return false;
  } 
  
}


  
  console.log(contain("cat", items));









/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
