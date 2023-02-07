const api = "https://striveschool-api.herokuapp.com/api/product/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RhYWNkMjJiMDAxNTAwMTU5YThiNjUiLCJpYXQiOjE2NzUyNzU0NzcsImV4cCI6MTY3NjQ4NTA3N30.g6So5Ksx8gdfO2MVLIwLddxtOjIdw_8fIin71rnO8Ok"
const url = "https://striveschool-api.herokuapp.com/api/product/"
const form = document.getElementById("post-form");
const select = document.getElementById("select-Id");
const cancelbtn = document.getElementById("cancelProductsBtn");
const submitBtn = document.getElementById("addProductsBtn");

async function postData() {
    if (submitBtn) {
        const formData = new FormData(form)
        const data = Array.from(formData.entries()).reduce((acc, [key, value]) => {
            if (value !== "") {
                acc[key] = value
            }
            return acc
        }, {})
        console.log(form)
        data.price = Number(data.price)
        await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(data)
        })
    }
}



const options = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token,
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    postData()
})
async function putData() {
    if (modifyProductsBtn) {
        const formData = new FormData(form)
        const data = Array.from(formData.entries()).reduce((acc, [key, value]) => {
            if (value !== "") {
                acc[key] = value
            }
            return acc
        }, {})
        data.price = Number(data.price)
        await fetch(`https://striveschool-api.herokuapp.com/api/product/${select.value}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(data)
        })
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

async function populateSelect() {
    const product = await getData()
    //console.log(product)
    product.forEach(element => {
        const opt = document.createElement("option")
        opt.value = element._id
        opt.innerHTML = element.brand
        select.appendChild(opt)
    });
}
populateSelect()

async function deleteProduct() {
    return await fetch(
        `https://striveschool-api.herokuapp.com/api/product/${select.value}`,
        {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + token,
            },
        })

}

cancelbtn.addEventListener("click", (e) => {
    e.preventDefault()
    deleteProduct()
    setTimeout(()=>{
        window.location.reload()
    },1000)
})

