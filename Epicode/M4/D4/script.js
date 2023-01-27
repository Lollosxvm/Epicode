const api = "https://striveschool-api.herokuapp.com/books";
const cardContainer = document.getElementById("row");
const cartBtn = document.getElementById("cardButton");
const cartModal = document.getElementById("cartModal");
const cartList = document.getElementById("Cartlist");
const closeModal = document.getElementById("chiuditi");


const cart = [];  //contenitore dei dati


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
    const button =  createEl("button", { class: "btn btn-sm btn-outline-primary cart-btn", "data-target": "idModale", "data-toggle": "modal"}, "Aggiungi al Carrello")
    const card = createEl("div", { class: "col-md-4", style:"position:relative" },
        createEl("div", { class: "card mb-4 shadow-sm" },
            createEl("div", { class: "bd-placeholder-img card-img-top", style: `background-image: url(${data.img})` },
            ),
            createEl("div", { class: "card-body" },
                createEl("p", { class: "card-text" }, `${data.title}`),
                createEl("div", { class: "d-flex justify-content-between align-items-center" },
                    createEl("div", { class: "btn-group", id:"btn-group" },
                        createEl("button", { class: "btn btn-sm btn-outline-secondary", id: data.asin }, "Salta"),
                    ),
                    createEl("small", { class: "card-text" }, `${data.asin}`)
                ))))
    container.appendChild(card)
    card.appendChild(button)
    button.addEventListener("click", ()=> addToCart(data))
}

const createCartList = (data, container) => {
    const list = createEl("li", { class: "list-item" },`${data.title}`)
    container.appendChild(list)
}

//Chiamata rest-api
async function loadBooks() {
    const data = await fetch(api);
    return await data.json();
}

loadBooks().then(res => {
    res.map(book => createCard(book, cardContainer))
})

closeModal.addEventListener("click", () => {
    cartModal.close()
    cartList.innerHTML = ""
})

cartBtn.addEventListener("click", () => {
    cartModal.showModal()
    cart.map(array => createCartList(array, cartList))
    console.log(cart)
})

function addToCart(book) {
    cart.push(book)
    cartBtn.innerText = `Carrello (${cart.length})`
}

////////////////////

const startTime = new Date();
window.addEventListener("beforeunload",()=>{
    const endTime = new Date() 
    const duration = (endTime - startTime ) / 1000
    localStorage.setItem("durata sessione", duration)
})

