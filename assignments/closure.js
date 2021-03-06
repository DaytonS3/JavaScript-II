// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


function acuraCars() {
   console.log("I am the car company");
   const message = "New cars coming soon";

   //dealership owner
   function owner() {
     console.log(`Message recieved: ${message}`);

   function salesTeam() {
     console.log(`Message also recieved: ${message}`);
   }
    salesTeam(); 
  }
   owner();
}
acuraCars();







/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = function add1(x) {
  let c = 0;
  return () => {
    count += 1;
    console.log(count);
  };
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
