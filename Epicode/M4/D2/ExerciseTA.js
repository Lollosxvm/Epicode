const takeDiv = document.getElementById('main')

const products = [
    {
        id: "1",
        name: "Prodotto 1",
        description: "lorem ipsum",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    },
    {
        id: "2",
        name: "Prodotto 2",
        description: "lorem ipsum",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    },
    {
        id: "3",
        name: "Prodotto 3",
        description: "lorem ipsum",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    },
    {
        id: "3",
        name: "Prodotto 1",
        description: "lorem ipsum",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    },
]

const createEl = (type, attrib, ...children) => {
    const element = document.createElement(type);
    Object.keys(attrib).forEach((key) => {
        element.setAttribute(key, attrib[key]);
    })

    children.forEach((child) => {
        typeof child === "string"
            ? element.appendChild(document.createTextNode(child))
            : element.appendChild(child)
    })
    return element
}

// const p = createEl("div",{id: "parag", class: "first"}, createEl("h1", {id :"titolo"}, "cia cia"));
// takeDiv.appendChild(p)


//creo card


function createCard(data, element) {
    const card = createEl("div", { class: "cardContainer", id: "classContainer" },
        createEl("div", {
            class: "cardImg", style: `background-image: url(${data.img});`,
        }),
        createEl("div", { class: "data" },`${data.name}`),
        createEl("p", { class: "cardDescription" }, `${data.description}`),
    )
        element.appendChild(card);
}

products.map((product) => createCard(product,takeDiv))