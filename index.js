
for (var i = 1; i <= 200; i++) {
    let allDiv = document.createElement("div");
    allDiv.classList.add("box");
    console.log(allDiv);
    var container = document.querySelector(".container");
    container.appendChild(allDiv);
}
//var container = document.querySelector(".container");
var colorCreate = document.querySelector("#btn");
var allBoxes = document.querySelectorAll(".box");


function RandomColorCode() {
    var chars = "0123456789abcdef";
    var colorLength = 6;
    var color = "";
    for (var i = 0; i < colorLength; i++) {
        var randomColor = Math.floor(Math.random() * chars.length)
        color += chars.substring(randomColor, randomColor + 1);
    }
    return "#" + color;
}

function addColor() {
    allBoxes.forEach((e) => {
        var newColor = RandomColorCode();
        console.log(newColor);
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
}
colorCreate.addEventListener("click", addColor);
addColor();