const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RhYWNkMjJiMDAxNTAwMTU5YThiNjUiLCJpYXQiOjE2NzUyODQwMjAsImV4cCI6MTY3NjQ5MzYyMH0.rXWufcubqCjKYxLzLBr38LAFlfv67bInld58TKyL1YQ";
const api = "https://striveschool-api.herokuapp.com/api/product/";
const pageProduct = "./product.html?q=";
const container = document.getElementById("container");

const options = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token,
    }
}

async function getData() {
    try {
        const data = await fetch(api, options);
        return await data.json();
    }
    catch (error) {
        console.log(error)
    }
}
getData().then((res) => {
    console.log(res)
    res.map((element) => {
        createCard(element, container)
    })
})

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

const createCard = (data, container) => {
    const card = createEl("div", { class: "col-md-4" },
        createEl("div", { class: "card mb-4 shadow-sm" },
            createEl("div", { class: "bd-placeholder-img card-img-top", style: `background-image: url(${data.imageUrl}` }),
            createEl("div", { class: "card-body" },
                createEl("p", { class: "card-text text-start fs-5 fw-bold" }, "Nome : " + `${data.name}`),
                createEl("p", { class: "card-text text-start fw-light" }, "Description : " + `${data.description}`),
                createEl("p", { class: "card-text text-start fw-light" }, " Brand : " + `${data.brand}`),
                createEl("p", { class: "card-text text-start semibold" }, " Price ($) : " +`${data.price}`),
                createEl("div", { class: "btn btn-sm btn-outline-primary cart-btn mt-3" },
                    createEl("a", { class: "new-page", target: "_blank", href: `${pageProduct}${data._id}` }, "Vedi il prodotto n." + `${data.price}`))
            )))
    container.appendChild(card)
}






