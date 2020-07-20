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

    // user indication to stop confetti
    const headerDiv = qs("div#header")
    const pInfo = ce("p")
    pInfo.id = "user-info"
    pInfo.style="color:white"
    pInfo.innerText="** click anywhere inside canvas to stop the confetti/continue **"
    headerDiv.append(pInfo)

    newCanvas.addEventListener("click", () => {
        confetti.clear()
        mainDiv.innerHTML=""
        console.log("canvas has been clicked, and confetti stoped")

        pInfo.innerText=""
        const h1 = ce("h1")
        h1.style="color:white"
        h1.innerText="❤️❤️ HAPPY 63RD BIRTHDAY KAREN ❤️❤️"
        headerDiv.append(h1)

        const sideDiv = ce("div")
        sideDiv.className="content side"
        const gif = ce("img")
        gif.src = "assets/birthday-cake.gif"

        const br = ce("br")
        mainDiv.append(sideDiv)
        sideDiv.append(gif, br)

        const contentMainDiv = ce("div")
        contentMainDiv.className="content main"
        contentMainDiv.id="content-main"
        
        const wishList = ce("ul")

        let addWishBtn = false

        const addBtn = ce("button")
        addBtn.id="add-wish"
        addBtn.className="btn btn-light"
        addBtn.innerText = "Create Wish"
        addBtn.style="margin-left: 5%; margin-bottom: 25px; margin-top: 25px"

        const formContainer = ce("div")
        formContainer.id="form-container"
        formContainer.style.display="none"


        addBtn.addEventListener("click", () => {
            formContainer.innerHTML=""
            formContainer.style="margin: 25px"

            const newWishForm = ce("form")

            const formGroup= ce("div")
            formGroup.className="form-group"
            
            const inputDiv = ce("div")
            inputDiv.className="input-group mb-3"
            inputDiv.innerHTML='<input name="name" type="text" class="form-control" id="new-name" placeholder="Name ... ">'

            const inputDiv2 = ce("div")
            inputDiv2.className="input-group mb-3"
            inputDiv2.innerHTML='<input name="message" type="text" class="form-control" id="new-name" placeholder="Birthday Message ... ">'

            const inputDiv3 = ce("div")
            inputDiv3.className="input-group mb-3"
            inputDiv3.innerHTML='<div class="custom-file"><input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"><label class="custom-file-label" for="inputGroupFile01">Upload Image</label></div>'

            const inputDiv4 =ce("div")
            inputDiv4.className="input-group mb-3"
            inputDiv4.innerHTML='<button type="submit" class="btn btn-light">Send Wish</button>'

            formGroup.append(inputDiv, inputDiv2, inputDiv3, inputDiv4)
            newWishForm.append(formGroup)
            formContainer.append(newWishForm)
         
            // hide & seek with the form
            addWishBtn = !addWishBtn;
            if (addWishBtn) {
            formContainer.style.display="block"
            addBtn.innerText="Hide Wish Form"
            } else {
            formContainer.style.display="none"
            addBtn.innerText="Create Wish"
            }
        })

        contentMainDiv.append(addBtn, formContainer, wishList)
        contentMainDiv.style="width: 66%"
        mainDiv.append(contentMainDiv)
        
        // fetch posts
        function fetchPosts(){
            // fetch("http://localhost:3000/api/v1/posts")
            fetch("http://localhost:3000/api/v1/posts?sort=-created-at")
            .then(res => res.json())
            // .then(console.log)
            .then(data => showPosts(data))
        }

        // iterate through posts
        function showPosts(posts){
            posts.forEach(post => addWish(post))
        }

        // display singel post 
        function addWish(post){
            const li = ce("li")
            li.className = "wishCard"

            let blockquote = ce("blockquote")
            blockquote.className = "blockquote"

            const p = ce("p")
            p.className = "mb-0"
            p.innerText = post.message // message

            const img = ce("img")
            if (post.img === null){
                img.src=""
            } else {
                img.src = post.img
                blockquote.append(img)
            }

            // add audio playback function here
            // const audioFile = ce() 

            const footer = ce("footer")
            footer.className = "blockquote-footer"
            footer.innerText = post.name 

            blockquote.append(p, footer)
            li.append(blockquote)
            wishList.append(li)
        }

        fetchPosts()
        
    })
    

})



