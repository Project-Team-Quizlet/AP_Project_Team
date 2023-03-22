const cards = [
  {
    Front: "What is Python?",
    Back: "Python is a high-level programming language used for a variety of applications, including web development, scientific computing, data analysis, and artificial intelligence.",
  },
  {
    Front: "What is the difference between single and double quotes in Python?",
    Back: "There is no difference in functionality between single and double quotes in Python. Both can be used to represent string literals.",
  },
  {
    Front: 'How do you print "Hello, world!" to the console in Python?',
    Back: 'You can use the print() function, like this: print("Hello, world!").',
  },
  {
    Front: "How do you define a variable in Python?",
    Back: "You can define a variable by giving it a name and assigning it a value using the = operator, like this: my_variable = 42.",
  },
  {
    Front: "What is the difference between == and = in Python?",
    Back: "== is used to compare two values for equality, while = is used to assign a value to a variable.",
  },
  {
    Front: "How do you create a list in Python?",
    Back: "You can create a list by enclosing a comma-separated sequence of values in square brackets, like this: my_list = [1, 2, 3].",
  },
  {
    Front: "How do you access an element in a list in Python?",
    Back: "You can access an element in a list by using its index, which starts at 0. For example, to access the first element in a list, you can use my_list[0].",
  },
  {
    Front: "What is a function in Python?",
    Back: "A function is a block of code that performs a specific task. Functions can take parameters and return values.",
  },
  {
    Front: "How do you define a function in Python?",
    Back: "You can define a function using the def keyword, followed by the function name and its parameters, like this: def my_function(param1, param2):.",
  },
  {
    Front: "How do you import a module in Python?",
    Back: "You can import a module using the import keyword, like this: import math. Once a module is imported, you can use its functions and variables in your code.",
  },
  {
    Front: "What is JavaScript?",
    Back: "JavaScript is a high-level programming language used for building dynamic web pages and web applications.",
  },
  {
    Front: 'How do you print "Hello, world!" to the console in JavaScript?',
    Back: 'You can use the console.log() method, like this: console.log("Hello, world!");',
  },
  {
    Front: "What is the difference between let, const, and var in JavaScript?",
    Back: "let and const are block-scoped variables, while var is function-scoped. const is a constant, which means its value cannot be changed once it is assigned, while let and var can be reassigned.",
  },
  {
    Front: "How do you define a variable in JavaScript?",
    Back: "You can define a variable using the let, const, or var keywords, followed by the variable name and its initial value, like this: let myVariable = 42;",
  },
  {
    Front: "How do you create an array in JavaScript?",
    Back: "You can create an array by enclosing a comma-separated sequence of values in square brackets, like this: let myArray = [1, 2, 3];",
  },
  {
    Front: "How do you access an element in an array in JavaScript?",
    Back: "You can access an element in an array by using its index, which starts at 0. For example, to access the first element in an array, you can use myArray[0].",
  },
  {
    Front: "What is a function in JavaScript?",
    Back: "A function is a block of code that performs a specific task. Functions can take parameters and return values.",
  },
  {
    Front: "How do you define a function in JavaScript?",
    Back: "You can define a function using the function keyword, followed by the function name and its parameters, like this: function myFunction(param1, param2) { // function body }",
  },
  {
    Front: "How do you add an event listener to an HTML element in JavaScript?",
    Back: 'You can add an event listener using the addEventListener() method, like this: document.getElementById("myButton").addEventListener("click", myFunction);',
  },
  {
    Front: "How do you use the ternary operator in JavaScript?",
    Back: 'The ternary operator is a shorthand way of writing an if/else statement. It takes the form of condition ? expression1 : expression2, where condition is a Boolean expression, expression1 is the value to be returned if the condition is true, and expression2 is the value to be returned if the condition is false. For example: let result = age >= 18 ? "You are an adult" : "You are a minor";',
  },
];

export default cards;
