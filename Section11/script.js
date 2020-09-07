let age = Number(prompt("Hello, how old are you?"));

if (age < 0) {
    console.log("Error please type in your age in postive numbers");
}
if(age === 21) {
    console.log("Happy 21st birthday!!");
}
if(age % 2 !== 0) {
    console.log("Your age is odd");
}