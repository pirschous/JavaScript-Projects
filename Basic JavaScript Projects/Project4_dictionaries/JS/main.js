function my_Dictionary() {
    var Animal = {
        Species:"Dog",//Went with the same dictionary as the example to keep it easy for me. 
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;//Deleted the object Animal.Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}