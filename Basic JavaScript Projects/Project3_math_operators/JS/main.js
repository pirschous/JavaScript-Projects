function addition_Function() {
    var addition = 3 + 3;
    document.getElementById("Math").innerHTML = "3 + 3 = " + addition;//Did the addition function and used the id Math to have my HTML File call it using a button.
}

function subtraction() {
    var subtraction = 10 - 3;
    document.getElementById("Math1").innerHTML = "10 - 3 = " + subtraction;//Did the subtraction function and used the id Math to have my HTML File call it using a button.
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math2").innerHTML = "6 x 8 = " + simple_Math;//Did the multiplication function and used the id Math to have my HTML File call it using a button.
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math3").innerHTML = "48 / 6 = " + simple_Math;//Did the division function and used the id Math to have my HTML File call it using a button.
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math4").innerHTML = "1 plus 2, multiplied by 10, \
    divided in half and then subtracted by 5 equals " + simple_Math;//Did a few different math functions and used the id Math to have my HTML File call it using a button.
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;//Did the division function to get a remainder returnedand used the id Math to have my HTML File call it using a button.
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math6").innerHTML = -x;//turned a number into a negative using the negation_Operator function and used the id Math to have my HTML File call it using a button.
}

//var X = 5;
//X++;
//document.write(X);//Showed how to count up by 1

//var X = 5.25;
//X--;
//document.write(X);//Showed how to count down by 1. 

window.alert(Math.random());//Used the alert box to return a random number

window.alert(Math.random() * 100);//Used the alert box to return a random number between blank and 100