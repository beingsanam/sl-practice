//Object
//Real world entity
//Student,home,teacher,car

//They have attributes and behavior
//Attributes - property : model,color,name,address,point
//Behavior - functionality : padhauni, getArea

//Js object
//Collection of properties
//Properties - Key value pair
//key : name of the propoerty
//Value : data, function, object

//mcq
//html - document
//browser hierarchy top object - window
//js - top hierarchy maa parni object - Object

//In js, everything is object
//Number string boolean function array object

// Types of objects in js
//1. Inbuilt object - Predefined in the language
//Eg: Reference object ": Number, string, array, function , dom , bom"
//2. User defined object - defined/created by the programmer
//eg: student, teacher, car

//How to create object in JS?
//1. Using built in object constructor
//Syntax: let objectName = new Object()
// let student = new Object();
//Add data in object constructor
//Dot notation
// student.name = "sanam";
//Array notation
// student["age"] = 22;
//name and age are key and sanam,22 are value

//Delete data in object constructor
//keyword - delete
//Dot nottion
// delete student.name;
//array notation
// delete student["age"];
// console.log(student.name); //sanam
//2. Using object literal
//Syntax: let objectName = {}
// let product = {
//   name: "shampoo",
//   price: 200,
// };
// console.log(product); //name,price
// console.log(product.name); //shampoo
// console.log(product["price"]); //200
//3. Using constructor function
// let student1 = {
//   name: "sanam",
//   age: 22,
// };
// let student2 = {
//   name: "ayushma",
//   age: 20,
// };
// let student3 = {
//   name: "bandan",
//   age: 21,
// };
//this keyword represents the property of current object
// function student(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let stud1 = new student("sanam", 22);
// let stud2 = new student("ayushma", 20);
// console.log(stud1);

//Inbuilt Object

//Date
//Math
