function qs(selector){
    return document.body.querySelector(selector)
}

function ce(element){
    return document.createElement(element)
}

const mainDiv = qs("div#main") 
const canvas = qs("canvas#my-canvas")

const confettiSettings = {
    target: 'my-canvas',
    max:150,
    clock: 50,
    rotate: true
}
const confetti = new ConfettiGenerator(confettiSettings)
confetti.render()
console.log("rendering confetti background")
