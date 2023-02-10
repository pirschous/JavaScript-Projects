function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

document.write("<br>");

function slice_Method() { //This will point to the position of the letters that you specify in range
    var Sentence = "My daughters sure love to fight each other at times!";
    var Section = Sentence.slice(3,12);
    document.getElementById("Slice").innerHTML = Section.toUpperCase();
}

function search_Method() { //seraches for the word and returns the position
    let text = "My Blue Ox was given to me by Paul.";
    let position = text.search("Blue");
    document.getElementById("search").innerHTML = position;
}

function string_Method() { //takes a number and returns a string
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //rounds to the place that you specify
    var Y = 220018.3624896325433;
    document.getElementById("Precision").innerHTML = Y.toPrecision(7);
}

function fixed_Method() { //similar to precision_Method
    let num = 5.56789;
    let n = num.toFixed(3);
    document.getElementById("Fix").innerHTML = n;
}

function value_Method() { //returns the value of the string. 
    let text = new String("This is my Value Method.");
    let result = text.valueOf();
    document.getElementById("value").innerHTML = result;
}