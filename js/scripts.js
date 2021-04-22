var familyName = "Peleg";
var counterOfsections = 0;


function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function createSections() {

    var newSecObj = document.createElement("section");
    var mainObj = document.getElementById("main");

    mainObj.appendChild(newSecObj);
    newSecObj.style.backgroundColor = generateRandomColor();
    counterOfsections++;



}


function initalize() { 

    for (i = 0; i < (familyName.length) * 2; i++) {

        createSections();

    }   

}    


