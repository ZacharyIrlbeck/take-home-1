let currentDotId
const dotContainers = document.querySelectorAll(".dot-container")
const imageUrls = {
    "blue": "ia-logo/ia-logo-dot-blue.png",
    "black": "ia-logo/ia-logo-dot-black.png",
    "green": "ia-logo/ia-logo-dot-green.png",
    "red": "ia-logo/ia-logo-dot-red.png"
}
const dotElementNames = ["blue", "red", "green", "black", "black1"]
let dotElements
const resetButton = document.getElementById("reset-button")
const dotsCont = document.getElementById("dots")

resetButton.addEventListener("click", function(e){
    e.preventDefault()
    reset()
})

for(let i = 0; i < dotContainers.length; i++){
    dotContainers[i].addEventListener("dragover", function(e){ e.preventDefault() })
    dotContainers[i].addEventListener("drop", handleDrop)
}

document.addEventListener("DOMContentLoaded", function(){ 
    addDotsToPage()
})

function handleDragStart(e){
    currentDotId = e.target.id
}

function handleDrop(e){
    if(!e.target.classList.contains("dot-container"))
    return
    
    if(e.target.firstChild)
    return
    
    const dotToAppend = document.getElementById(currentDotId)
    const containerColor = e.target.id.split("-")[0]
    const dotColor = currentDotId.split("-")[0]                

    if(dotColor === containerColor){
        e.target.appendChild(dotToAppend)
        if(dotsCont.childElementCount === 0){
            congrats()
        }
    }
}

function addDotsToPage(){

    dotElements = dotElementNames.map((dotName) => {
        return {
            elm: document.createElement("img"),
            name: dotName,
            placed: false
        }
    })

    dotElements.forEach((dotElm) => {
        if(dotElm.name === "black1"){
            dotElm.elm.setAttribute("src", imageUrls["black"])
        }else{
            dotElm.elm.setAttribute("src", imageUrls[dotElm.name])
        }
    })

    dotElements.forEach((dotElm) => {
        if(dotElm.name === "black"){
            dotElm.elm.setAttribute("id", "black-dot-1")
        }else if(dotElm.name === "black1"){
            dotElm.elm.setAttribute("id", "black-dot-2")
        }else{
            dotElm.elm.setAttribute("id", dotElm.name + "-dot")
        }
    })

    dotElements.forEach((dotElm) => {
        dotElm.elm.setAttribute("draggable", "true")
        dotElm.elm.classList.add("dot")
    })
    
    dotElements.forEach((dotElm) => {
        dotsCont.appendChild(dotElm.elm)
    })

    dotElements.forEach((dotElm) => {
        dotElm.elm.addEventListener("dragstart", handleDragStart)
    })
}

function reset(){
    dotContainers.forEach((dotContainer) => {
        if(dotContainer.firstChild)
            dotContainer.removeChild(dotContainer.firstChild)
    })

    removeDotsFromPage()
    addDotsToPage()
}

function removeDotsFromPage(){
    while(dotsCont.firstChild){
        dotsCont.removeChild(dotsCont.firstChild)
    }
}

function congrats(){
    setTimeout(function(){
        window.alert("Well done!")
    }, 200)
}