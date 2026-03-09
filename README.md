
## What is the difference between var, let, and const?

These are three different keywords for declaring variables in JavaScript. 

var: It is function-scoped and can be declared repeatedly with the same name. It supports "Hoisting".

let: It is block-scoped (works inside { }). It cannot be declared again with the same name in the same block, but its value can be changed.

const: It is also block-scoped, but its value cannot be changed (re-assigned) once it is set.

## What is the spread operator (...)?

 Definition: This operator, written with three dots (...), helps to extract the elements inside an array or object separately.
 
 It is mainly used for copying or merging data, which cannot be easily done with the normal assignment operator.

# Why is it used for: 
•	To copy the elements of one array to another array.
•	To merge multiple arrays or objects.
•	To send a list as an argument to a function.


## What is the difference between map(), filter(), and forEach()?

 Difference between map(), filter(), and forEach()
 
 Definition: These are JavaScript array methods that are used as an alternative to loops.

 Difference: 
# forEach(): It only operates on each item in the array, but does not return a new array.
 
 # map(): It operates on each item and creates a new array and returns it.

# filter(): It selects some items based on a specific  condition and returns a new array.

 Why to use: They are essential for data processing. You use filter() when you want to separate certain data from a list, and use map() when you want to change each data in the list and want a new list.

## What is an arrow function?

 Definition: This is a short and modern way of writing simple functions. It takes less code to write than a simple function. Also, it does not have its own this keyword, which makes it easier to handle code in complex applications.

 For example: const add = (a, b) => a + b;

 Why is it used for: It is used to make the code clean and readable. Arrow functions are especially popular as callback functions.

## What are template literals?

  Definition: The method of writing a string using backticks (`) is called a template literal.

  When writing a string with single quotes (' ' or " "), you have to use the plus sign to add variables. But in template literals, you can easily insert variables into the middle of the string using ${variable}.

  Why is it used for: It is used to write multi-line strings and to easily input dynamic data or variables into the string.

