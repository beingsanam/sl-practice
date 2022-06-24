//RegExp
//Built in object used to define specific search pattern by making variety of tests on the given string
//Application:
//1.search for word(s) in a given string
//2.find and replace word(s) in a given string
//3.data validation

//How to define regexp
//1. Using regexp notation
//Syntatx : let variabelName = new RegExp("Search pattern",["flags"])
//Eg : phone number validaton
// let pattern = new RegExp("^[0-9]{10}$");

//2.using regexp literal notation
//syntax let variableName = /Search pattern/[flags]
// let pattern = /^[0-9]{10}$/;

//Note:
//"String"
// /RegExp/

//js regexp method
//1.test() method
//2.exec() method

//1.test() method

//it checks if there is match between the regular expression and given string44
//if match - returns true else return false
// let phoneNumber = "1234567891";
// let pattern = /^[0-9]{10}$/;
// console.log(pattern.test(phoneNumber));//true

// 2.exec() method
//used to search for the occurence of a pattern in a given string
//returns array, else return null

// let myName = "I am javascript. I am not quite easy to learn";
// let pattern = /am/g;
// let arrayContent = [];
/*
arrayContent = pattern.exec(myName);
console.log("Found word:", arrayContent[0]);
console.log("Location:", arrayContent.index);
arrayContent = pattern.exec(myName);
console.log("Found word:", arrayContent[0]);
console.log("Location:", arrayContent.index);
arrayContent = pattern.exec(myName);
console.log("Found word:", arrayContent[0]);
console.log("Location:", arrayContent.index);
*/
// while ((arrayContent = pattern.exec(myName)) != null) {
//   console.log("Found word:", arrayContent[0]);
//   console.log("Location:", arrayContent.index);
// }

//Flags

//indicates how a regular expression must be interpreted

//1. i - ignore case
//ignores the case of the pattern while testing with the string
// let str = "Hello087";
// let pattern = /hello/i;
// console.log(pattern.test(str)); //true

//2. g - global match

// let myName = "I am javascript. I am not quite easy to learn";
// let pattern = /am/g;
// let arrayContent = [];

// arrayContent = pattern.exec(myName);
// console.log("Found word:", arrayContent[0]);
// console.log("Location:", arrayContent.index);
// arrayContent = pattern.exec(myName);
// console.log("Found word:", arrayContent[0]);
// console.log("Location:", arrayContent.index);
// arrayContent = pattern.exec(myName);
// console.log("Found word:", arrayContent[0]);
// console.log("Location:", arrayContent.index);

//Metacharacters
