function qs(selector){
    return document.body.querySelector(selector)
}

function ce(element){
    return document.createElement(element)
}

const enter = qs("button#enter")
const mainDiv = qs("div#main") 
const newCanvas = ce("canvas")
const officeHBD = new Audio("assets/theOffice_S4E7_HBD.mp3");

enter.addEventListener("click", () =>{
    console.log("user has 'entered' main page")
    mainDiv.innerHTML= "" //not best practice but not sure what else to do 

    newCanvas.id = "my-canvas"
    mainDiv.appendChild(newCanvas)

    officeHBD.play() //plays once immediately upon button click
    
    const confettiSettings = {
        target: 'my-canvas',
        max:150,
        clock: 50,
        rotate: true
    }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()
    console.log("now rendering confetti")

    newCanvas.addEventListener("click", () => {
        confetti.clear()
        mainDiv.innerHTML=""
        console.log("canvas has been clicked, and confetti stoped")

        fetch("http://localhost:3000/api/v1/posts")
        .then(res => res.json())
        .then(console.log)
        // add what I want to show up once confetti is cleared here
    })
})




