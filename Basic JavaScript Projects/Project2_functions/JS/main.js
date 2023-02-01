function displayDate() {//This is a function that is calling 2 elements. 
    document.getElementById("demo").innerHTML = Date();
  }

  function myFunction() {//Function element that calls the variables sentence. 
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
  }