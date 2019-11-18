var bodyFont = document.querySelector("body").style.fontFamily = "Arial"

var headCenter = document.querySelector("h1").style.textAlign = "center"

var klasseCategory = document.querySelectorAll(".category")


for (i = 0; i < klasseCategory.length; i++){
    klasseCategory[i].style.color = "red"
    klasseCategory[i].style.fontStyle = "italic"
}

function colorGenerator (){

    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

colorGenerator()


var klasseFoodCat = document.querySelectorAll(".food-category")



klasseFoodCat.forEach(item =>{
    item.style.backgroundColor = colorGenerator();
    item.style.padding = "20px"
    item.style.width = "200px"
    
})



var klasseMain = document.querySelector("main")

klasseMain.style.display = "flex"
klasseMain.style.flexDirection = "row"
klasseMain.style.flexWrap = "wrap"
klasseMain.style.justifyContent = "space-around"

var alergBig = document.querySelector(".allergy-warning")
alergBig.style.display = "flex"
alergBig.style.flexDirection = "column"
alergBig.style.alignItems = "center"




var warningID = document.getElementById("warning")

warningID.style.fontSize = "25px"
warningID.style.textAlign = "Center"
warningID.style.fontFamily = "Sans"

var alergyList = document.querySelectorAll("section ul li:nth-child(even)")
var alergyCenter = document.querySelectorAll(".allergies")
var centerTwo = document.querySelector(".allergies")






alergyCenter.forEach(item =>{
     item.style.listStyle = "none"
     item.style.width = "300px"
      
    
})

alergyList.forEach(item =>{
    item.style.backgroundColor = "blue"
    item.style.justifyItems = "center"

    
})


var footerCenter = document.querySelector(".footer")
footerCenter.style.display = "flex"

footerCenter.style.flexDirection = "row"
footerCenter.style.flexWrap = "wrap"
footerCenter.style.justifyContent = "space-around"

var footerBorder = document.querySelectorAll(".food-desc")

footerBorder.forEach(item =>{
    item.style.border = "2px solid yellow"
    item.style.borderRadius = "50%"
    item.style.padding = "25px"
    
})