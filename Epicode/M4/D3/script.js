// GET API
const api = "https://api.pexels.com/v1/search?query=Ocean"
const token = "EcZN2xYFacKdjKPus0oMZ7sr38DsS6FG4vcdtWDHFwz6S2FW2VCmmJvp"

const options = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
    }
}

const createCard = (data, container) => {
    const card = createEl("div", { class: "col-md-4" },
        createEl("div", { class: "card mb-4 shadow-sm" },
            createEl("div", { class: "bd-placeholder-img card-img-top", style: `background-image: url(${data.src.medium})` },
            )),
        createEl("div", { class: "card-body" },
            createEl("p", { class: "card-text" }, `${data.photographer}`),
            createEl("div", { class: "d-flex justify-content-between align-items-center" },
                createEl("div", { class: "btn-group" },
                    createEl("button", { class: "btn btn-sm btn-outline-secondary" }, "View"),
                    createEl("button", { class: "btn btn-sm btn-outline-secondary", id:data.id }, "Nascondi"),
                ),
                createEl("small", { class: "card-text" }, `${data.id}`)
            )))
    container.appendChild(card)

}


const createEl = (type, attributes, ...childrens) => {
    const element = document.createElement(type);
    Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key])
    })
    childrens.forEach((child) => {
        typeof child === "string"
            ? element.appendChild(document.createTextNode(child)) : element.appendChild(child)
    })
    return element;
}


async function loadImages() {

    const data = await fetch(api, options)
    return await data.json()
}
const Row = document.getElementById("Row")
console.log(Row)

const primoBtn = document.querySelector(".btn-primary");
primoBtn.addEventListener("click", () => {
    loadImages().then((response) => {
        response.photos.map((photo) => {
            console.log(photo)
            createCard(photo, Row)
            
        }
        )
        const btnNascondi = document.querySelectorAll(".btn-outline-secondary")
        btnNascondi.forEach((btn)=>{
            btn.addEventListener("click", () =>{
                const card = btn.closest(".col-md-4")
                card.remove()
            } )
        })
    })
})





