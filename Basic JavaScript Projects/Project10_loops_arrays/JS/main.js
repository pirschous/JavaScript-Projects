function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function length_Property() {
    let text = "Hello World!";
    let length = text.length;
    document.getElementById("length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black", strings:"6"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    Musical_Instrument.brand = "Strat";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.color + " " + Musical_Instrument.strings + " string "
        + Musical_Instrument.brand + " was " + Musical_Instrument.price;
}

var Y = 55;
document.write(Y);
{
    let Y = 45;
    document.write("<br>" + Y);
}
document.write("<br>" + Y);



function return_function(a, b) {
    return a * b;
}


let boat = {
    make: "Seedoo ",
    model: "wave ",
    year: "2022 ",
    color: "blue ",
    description : function() {
        return "The boat is a " + this.year + this.color + this.make + this.model;
    }
};

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}

let cont = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    cont += "The number is " + i + "<br>";
}