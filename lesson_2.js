/*------------------------------modulexports---------------------------------------------
//module.exports is the object that a Node.js module returns when it is required using the require() function in another file.It is used to export functions, objects, or variables from one file so they can be imported and used in another.To organize code across multiple files.

To reuse functions, variables, or classes.

To follow modular programming — clean, readable, and maintainable code.*/

function add(a, b) {
  return a + b;
}

module.exports = {add,userName,square}; // exporting the function




function userName(name){
    return ` username  is  ${name}`

}


//Q2: Create a module named greet.js that exports a function called greetUser(name). This function should take a user's name as a parameter and return a greeting message like:

function userName(name){
    return ` username  is  ${name}`

}


//Q3: Create a module file math.js that exports a function square(num) which returns the square of a number.


function square(num) {
  return num * num;
}


//Q4:In your main file app.js, take a number from the command line and print its square using the imported function.