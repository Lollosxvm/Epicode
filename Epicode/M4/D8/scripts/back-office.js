const submitBtn = document.getElementById("addProductsBtn");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RhYWNkMjJiMDAxNTAwMTU5YThiNjUiLCJpYXQiOjE2NzUyNzU0NzcsImV4cCI6MTY3NjQ4NTA3N30.g6So5Ksx8gdfO2MVLIwLddxtOjIdw_8fIin71rnO8Ok"
const url = "https://striveschool-api.herokuapp.com/api/product/"
const form = document.getElementById("post-form");

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

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    postData()
})

