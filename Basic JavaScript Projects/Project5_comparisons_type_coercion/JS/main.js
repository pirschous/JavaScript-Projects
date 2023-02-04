document.write(typeof "one hundred and fifty");
document.write("<br>");
document.write("10" + 5);
document.write("<br>");
document.write(10 > 2);
document.write("<br>");
document.write(10 < 2);
document.write("<br>");
document.write(10 == 10);
document.write("<br>");
document.write(3 == 11);
document.write("<br>");
X = 10;
Y = 10;
document.write(X === Y);
document.write("<br>");
Z = 82;
A = "pineapple";
document.write(Z === A);
document.write("<br>");
J = 50;
K = "50";
document.write(J === K);
document.write("<br>");
M = 23;
N = "twenty three";
document.write(M === N);
document.write("<br>");
document.write(5 > 2 && 10 > 4);
document.write("<br>");
document.write(5 > 2 && 1 > 4);
document.write("<br>");
document.write(5 > 10 || 10 > 4);
document.write("<br>");
document.write(5 > 10 || 10 > 20);
document.write("<br>");


function my_Function1() {
    document.getElementById("Test").innerHTML = isNaN('this is a string');
}

function my_Function() {
    document.getElementById("Test1").innerHTML = isNaN('808');
}

function displayInfinity() {
    document.getElementById("display").innerHTML = 3E310;
}

function displayInfinity1() {
    document.getElementById("display1").innerHTML = 3E310;
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_Function1() {
    document.getElementById("Not1").innerHTML = !(5 > 10);
}

console.log(2 + 2);

console.log(10 > 2);