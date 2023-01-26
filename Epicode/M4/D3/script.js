const api = "https://api.pexels.com/v1/search?query=Ocean"
const apiDue = "https://api.pexels.com/v1/search?query=Tigers"
const apiTre = "https://api.pexels.com/v1/search?query="
const token = "EcZN2xYFacKdjKPus0oMZ7sr38DsS6FG4vcdtWDHFwz6S2FW2VCmmJvp"
const modaleCard = document.getElementById("idModale")
const secondoBtn = document.querySelector(".btn-secondary.my-2");
const secondContainer = document.getElementById("secondContainer")
const query = document.getElementById("fname").value;
const invio = document.getElementById("invioQuery");
const thirdContainer = document.getElementById("thirdContainer");
const primoBtn = document.querySelector(".btn-primary.my-2");
const Row = document.getElementById("Row");

// Implemento l'API
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
    const card = createEl("div", { class: "col-md-4" },
        createEl("div", { class: "card mb-4 shadow-sm" },
            createEl("div", { class: "bd-placeholder-img card-img-top", style: `background-image: url(${data.src.medium})` },
            ),
            createEl("div", { class: "card-body" },
                createEl("p", { class: "card-text" }, `${data.photographer}`),
                createEl("div", { class: "d-flex justify-content-between align-items-center" },
                    createEl("div", { class: "btn-group" },
                        createEl("button", { class: "btn btn-sm btn-outline-primary", "data-target": "idModale", "data-toggle": "modal" }, "View"),
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
secondoBtn.addEventListener("click", () => {
    if (Row.children.length > 0) {
        Row.remove()
    } loadSecondImages().then((response) => {
        response.photos.map((photo) => {
            createCard(photo, secondContainer)
        })//creo il btn nascondi e relativo funzionamento
        const btnNascondi = document.querySelectorAll(".btn-outline-secondary")
        btnNascondi.forEach((btn) => {
            btn.addEventListener("click", () => {
                const card = btn.closest(".col-md-4")
                card.remove()
            })
        })
    });
})

// All'invio del form restituisce le card con la query richiesta
async function queryUser(input) {
    const data = await fetch(`https://api.pexels.com/v1/search?query=${input}`, options)
    return await data.json()
} invio.addEventListener("click", (e) => {
    const query = document.getElementById("fname").value;
    console.log(query)
    e.preventDefault();
    queryUser(query).then((response) => {
        console.log(response)
        if (thirdContainer.hasChildNodes()) {
            thirdContainer.innerHTML = "";
        } response.photos.map(array => createCard(array, thirdContainer))
    })
})



