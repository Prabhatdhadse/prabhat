var screen = document.querySelectorAll(".screen")
var btn = document.querySelector(".screen button")
var allbox = document.querySelectorAll(".box")
var selected = ""
var playGround = document.querySelector(".playground")


btn.addEventListener("click",function(){
       screen[1].style.transform = "translateY(-100%)"
})

allbox.forEach(function(box){
    box.addEventListener("click",function(){
        screen[2].style.transform = "translateY(-200%)"
        selected = box.childNodes[3].getAttribute("src",selected)
        createImage()
    })
})

function createImage(){
    var newImg = document.createElement("img")
    var obj = getRandom()
    newImg.setAttribute("src",selected)
    newImg.style.left = obj.x+"%"
    newImg.style.top = obj.y+"%"
    newImg.style.rotate = obj.rot+"deg"
    playGround.appendChild(newImg)
    catchImage()
}
function getRandom(){
    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360
    return {x,y,rot}
}
function catchImage(){
    var playImage = document.querySelector(".playground.img")
    playImage.addEventListener("click",function(){
        var obj = getRandom()
        console.log(obj.x)
    })
}