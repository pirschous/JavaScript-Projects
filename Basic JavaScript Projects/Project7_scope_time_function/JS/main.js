var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>");

function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(y + 100);   //it is a broken code because y is an undefined value.  
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

document.write("<br>");

if (4 < 8) {
    document.write("I am finally starting to grasp this whole Javascript thing, very slowly!")
}

document.write("<br>");

function Money_Function() {
    Money = document.getElementById("Money").value;
    if (Money >= 20) {
        Buy = "You have enough money to buy this watch.";
    }
    else {
        Buy = "You don't have enough money to buy this watch.";
    }
    document.getElementById("How_much_money?").innerHTML = Buy;
}

document.write("<br>");

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}