// Recuperare dall'endpoint https://epicode-crud-api.onrender.com/products tutti i prodotti presenti nel database e
// mostrarli nelle card del firstCardContainer

// aggiungere un form per aggiungere un prodotto al database
// aggiungere un form per cancellare un prodotto dal database
// aggiungere un form per modificare un prodotto

const getDialog = document.getElementById('modalAddProduct');
const addProduct = document.getElementById('addProduct');
const closeModal = document.getElementById('closeModal');
const form = document.getElementById('addProductForm');
const addTitle = document.getElementById('title');
const addDescription = document.getElementById('description');
const addCategory = document.getElementById('category');
const addImage = document.getElementById('image');
const addPrice = document.getElementById('price');
const submitProduct = document.getElementById('submitProduct');
const firstCardContainer = document.getElementById('card-list')
const secondCardContainer = document.getElementById('second-card-list')


const createEl = (type, attributes, ...children) => {
    const element = document.createElement(type)

    Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key])
    })

    children.forEach(child => {
        typeof child === 'string'
            ? element.appendChild(document.createTextNode(child))
            : element.appendChild(child)
    })

    return element
}

const createCard = (data, container) => {

    const cardWithText = createEl('li', {},
    createEl('a', {class: 'card', href: '#'},
        createEl('p', {class: 'card-category'}, `${data.category}`),
        createEl('h3', {class: 'card-title'}, `${data.title}`),
        createEl('div', {class: 'card-img-cont'},
            createEl('img', {
                class: 'card-img',
                alt: `${data.title}`,
                src: `${data.image}`
            })
        ),
        createEl('p', {}, `${data.description}`),
    )
)

container.appendChild(cardWithText);
}

const getData = async () => {
    try{
        const data = await fetch('https://epicode-crud-api.onrender.com/products/');
        return await data.json();
    }

    catch(error) {
        console.log(error);
    }
}

getData().then(products => {
    console.log(products);
    products.products.map((product) => createCard(product, secondCardContainer))
});

addProduct.addEventListener('click', event => {
    getDialog.showModal();
})

closeModal.addEventListener('click', event => {
    getDialog.close();
})

title.addEventListener('change', event => {
    console.log(title.value)
})

const getDataForm = async () => {
    const title = addTitle.value;
    const description = addDescription.value;
    const category = addCategory.value;
    const image = addImage.value;
    const price = addPrice.value;

    const formObject = {
        title: title,
        description: description,
        category: category,
        image: image,
        price: price,
    }

    await fetch('https://epicode-crud-api.onrender.com/products/', {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify(formObject),
    })
}

submitProduct.addEventListener('click', event => {
    event.preventDefault();
    console.log('func.getDataForm -> start')
    getDataForm();
})

// const handleSubmit = (event) => {
//     event.preventDefault();
  
//     const data = new FormData(event.target);
  
//     const value = data.get('email');
  
//     console.log({ value });
//   }
  
//   const form = document.querySelector('form');
//   form.addEventListener('submit', handleSubmit);




