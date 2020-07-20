function qs(selector){
    return document.body.querySelector(selector)
}

function ce(element){
    return document.createElement(element)
}

const mainDiv = qs("div#main") 
const newCanvas = ce("canvas")
newCanvas.id = "my-canvas"
mainDiv.appendChild(newCanvas)

const confettiSettings = {
    target: 'my-canvas',
    max:150,
    clock: 50,
    rotate: true
}
const confetti = new ConfettiGenerator(confettiSettings)
confetti.render()
console.log("rendering confetti background")
