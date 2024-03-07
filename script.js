var screen = document.querySelectorAll(".screen")
var btn = document.querySelector(".screen button")
var allelem = document.querySelectorAll(".box")
var selected = ""
var playGround = document.querySelector(".playground")
var scoreDiv = document.querySelector(".score span")
var timeDiv = document.querySelector(".time span")
var h4 = document.querySelector(".screen>h4 ")
var score = 0;
var min = 0;
var sec = 0;


btn.addEventListener("click",function(){
       screen[1].style.transform = "translateY(-100%)"
})

allelem.forEach(function(elem){
    elem.addEventListener("click",function(){
        screen[2].style.transform = "translateY(-200%)"
        selected = elem.childNodes[3].getAttribute("src",selected)
        createImage()
        timing()
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
    newImg.addEventListener("click",catchImage)
    // catchImage()
}
function getRandom(){
    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360
    return {x,y,rot}
}
function catchImage(){
    increaseScore()
    this.style.opacity = 0
   
   
    setTimeout(function(){
        this.style.opacity = 1
    },2000)
    addImages()
} 
function increaseScore(){
    score++
    scoreDiv.innerHTML = score
    if(score>5){
        h4.style.display = "block"
    }
}  
function addImages(){
    setTimeout(createImage,1000)
    setTimeout(createImage,1500)
}
function timing(){
    setInterval(function(){
        sec++
        timeDiv.innerHTML = `${sec} : ${sec}`
    },100)
}