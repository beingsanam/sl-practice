//BOM - Broswer Object Model
//jS interacts with the browser

//Types of browser object
//1. window object --> represents the broser window (root object of browser)
//2. screen object - information about users screen
//3. location object --> get the current address(url) and redirects to new web page
//4. history object --> contains the browser history
//5. navigator object --> contains the information about the user's browser

//1. Window object

//i. open()

//Syntax: window.open(URL, name, spec)
let myWindow;
function openWin() {
  myWindow = window.open("", "myWindow", "width=200,height=100");
  myWindow.document.write("Hello");
}

//ii . close()

function closeWin() {
  myWindow.close();
}

//iii. moveBy(x,y)

function moveWin() {
  myWindow.moveBy(300, 300);
  myWindow.focus();
}

//iv. focus()

//v. alert(message)
function displayAlert() {
  alert("Hello I clicked alert");
}

//vi. prompt(text,defaultText)

function displayprompt() {
  let person = prompt("Enter a name", "ayushma");
  console.log("Hello", person);
}

//vii. confirm()

function confirmFunction() {
  confirm("Click here to conform");
}

//viii. frames
function showFrame() {
  let fram = window.frames;
  for (let i = 0; i < frames.length; i++) {
    fram.document.body.style.background = "blue";
  }
}
