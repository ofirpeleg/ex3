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

    var newSec = document.createElement("section");
    var mainObj = document.getElementById("main");

    mainObj.appendChild(newSec);
    newSec.style.backgroundColor = generateRandomColor();
    counterOfsections++;  

    if(counterOfsections == 1) {
        newSec.className = "first";
        newSec.style.backgroundImage = "url('images/plus.svg')";

        newSec.onclick = function() {
            createSections();
        }
    }    

    if(counterOfsections % 3 == 0) {
            newSec.style.backgroundImage = "url('images/star.png')";
        }    
    }
  

function initalize() { 

    for (i = 0; i < (familyName.length) * 2; i++) {

        createSections();

    }   

}    

