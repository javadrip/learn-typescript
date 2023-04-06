// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
// Right
highScore = 1;
highScore = true;
// Wrong
// highScore = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = [];
// Right
stuff = [1, 2, 3];
stuff = ["one", "two", "three"];
// Right
var level1 = "Beginner";
// Right
var john = {
    name: "John",
    age: 32,
    sport: "ski",
    level: "Beginner"
};
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
var greet = function (name) {
    if (typeof name === "string") {
        console.log("Hello, ".concat(name));
    }
    else {
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var n = name_1[_i];
            console.log("Hello, ".concat(n));
        }
    }
};
console.log(greet("Jane"));
console.log(greet(["Jolie", "John", "Jenny"]));
