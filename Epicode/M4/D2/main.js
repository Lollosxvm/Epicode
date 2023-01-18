//creo la funzione per creare la card
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

//prendo i 3 div dell'html per popolarli con js 
const cardContainer = document.querySelector("#cardContainer");
const cardManeskin = document.querySelector("#cardManeskin");
const cardMahmod = document.querySelector("#cardMahmod");


//creo async function con una new promise (che può essere risolta o rigettata)
//try   -> per usare i dati se arrivano
//catch -> se ancora i dati non sono arrivati

const getData = async (url) => {
    try {
        const data = await fetch(url);
        return await data.json();

    } catch (error) {
        console.log(error);
    }
}

//creo la funzione che automaticamente creerà gli elementi
const createCard = (data, container) => {
    const card = createEl("div", { class: "card-container", id: "card-container" },
        createEl("div", { class: "card-img", id: "card-img", style: `background-image: url(${data.album.cover})` }),
        createEl("h1", { class: "card-title" }, `${data.title}`),
        createEl("p", { class: "card-info" }, `${data.artist.name}`)
    )
    container.appendChild(card)
}

//popolo i 3 div dell'html con i dati delle api
getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=pinguini%20tattici%20nucleari").then((response) => {
    response.data.slice(0,3).map((artist) => {
        createCard(artist, cardContainer)
    })
});

getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=maneskin").then((response) => {
    response.data.slice(0,3).map((artist) => {
        createCard(artist, cardManeskin)
    })
});

getData("https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood").then((response) => {
    response.data.slice(0,3).map((artist) => {
        createCard(artist, cardMahmod)
        console.log(response)
    })
});