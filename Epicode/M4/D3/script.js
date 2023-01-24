// GET API
const api = "https://api.pexels.com/v1/curated/"
const token = "EcZN2xYFacKdjKPus0oMZ7sr38DsS6FG4vcdtWDHFwz6S2FW2VCmmJvp"

const options = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
    }
}

function loadImages() {
    //prendo l'img
    return fetch(api, options).then(res => res.json()).then((res) => {
        res.photos
        console.log(
            res.photos,
            res.photos[0].url
            
        )
    })
}
