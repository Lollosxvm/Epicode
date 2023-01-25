// Implemento l'API
const api = "https://api.pexels.com/v1/search?query=Ocean"
const apiDue = "https://api.pexels.com/v1/search?query=Tigers"
const apiTre = "https://api.pexels.com/v1/search?query="
const token = "EcZN2xYFacKdjKPus0oMZ7sr38DsS6FG4vcdtWDHFwz6S2FW2VCmmJvp"

const options = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
    }
}

//creo l'elemento html da aggiungere 
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

// creo la card + btn nascondi
const createCard = (data, container) => {
    const card = createEl("div", { class: "col-md-4"},
        createEl("div", { class: "card mb-4 shadow-sm" },
            createEl("div", { class: "bd-placeholder-img card-img-top", style: `background-image: url(${data.src.medium})` },
            ),
            createEl("div", { class: "card-body" },
                createEl("p", { class: "card-text" }, `${data.photographer}`),
                createEl("div", { class: "d-flex justify-content-between align-items-center" },
                    createEl("div", { class: "btn-group" },
                        createEl("button", { class: "btn btn-sm btn-outline-primary" }, "View"),
                        createEl("button", { class: "btn btn-sm btn-outline-secondary", id: data.id }, "Nascondi"),
                    ),
                    createEl("small", { class: "card-text" }, `${data.id}`)
                ))))
    container.appendChild(card)
}
//richiedo i dati 1volta per ogni btn (con query diversa) e converto ciò che arriva in json 
async function loadImages() {
    const data = await fetch(api, options)
    return await data.json()
}
async function loadSecondImages() {
    const data = await fetch(apiDue, options)
    return await data.json()
}

//Al click di "Load Images" compaiono le card ed il bottone nacondi funziona su ognuna di essa
const primoBtn = document.querySelector(".btn-primary.my-2");

primoBtn.addEventListener("click", () => {
    loadImages().then((response) => {
        response.photos.map((photo) => {
            createCard(photo, Row)
        })
        const btnNascondi = document.querySelectorAll(".btn-outline-secondary")
        btnNascondi.forEach((btn) => {
            btn.addEventListener("click", () => {
                const card = btn.closest(".col-md-4")
                card.remove()
            })
        })
    })
})
//Al click di "Load Secondary Images comapiono altre card"
const secondoBtn = document.querySelector(".btn-secondary.my-2");

secondoBtn.addEventListener("click", () => {
    const querySent =
        loadSecondImages().then((response) => {
            response.photos.map((photo) => {
                createCard(photo, Row)
            })//creo il btn nascondi e relativo funzionamento
            const btnNascondi = document.querySelectorAll(".btn-outline-secondary")
            btnNascondi.forEach((btn) => {
                btn.addEventListener("click", () => {
                    const card = btn.closest(".col-md-4")
                    card.remove()
                })
            })
        });
    if (querySent) {
        // const cancelCard = document.querySelectorAll("col-md-4")
        // cancelCard.forEach((card) => {
        //     btn.addEventListener("click", () => {
        //         const card = btn.closest("col-md-4")
        //         card.remove()
    //         })
    //     })
    // } else {
        
    // }
})

// async function input() {
//     const data = await fetch(api, options)
//     return await data.json()
// }



