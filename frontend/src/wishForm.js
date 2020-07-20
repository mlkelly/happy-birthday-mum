function qs(selector){
    return document.body.querySelector(selector)
}

function ce(element){
    return document.createElement(element)
}

// const form = qs("form#new-wish")

// form.addEventListener("submit", () => {
//     // debugger
//     event.preventDefault()

//     let configObj = {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//             "Content-Type":"appliction/json",
//             // "Access-Control-Allow-Origin":  "http://127.0.0.1:3000",
//             // "Access-Control-Allow-Methods": "POST",
//             // "Access-Control-Allow-Headers": "Content-Type, Authorization"
//         },
//         body: JSON.stringify({
//             name: form[0].value,
//             message: form[1].value,
//             img: form[3].value
//         })
//     }

//     fetch("http://localhost:3000/api/v1/posts?sort=-created-at", configObj)
//     .then(res => res.json())
//     .then(post => {
//         console.log(post)
//         form.reset()
//     })
// })

// // was trying to append the confetti to the background of the wishForm, but couldn't figure out the right canvas nesting so that text would appear over it
// const mainDiv = qs("div#main") 
// const canvas = qs("canvas#my-canvas")

// const confettiSettings = {
//     target: 'my-canvas',
//     max:150,
//     clock: 50,
//     rotate: true
// }
// const confetti = new ConfettiGenerator(confettiSettings)
// confetti.render()
// console.log("rendering confetti background")
