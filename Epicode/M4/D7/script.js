const url="http://localhost:3000"

fetch(url, {
   //dati che inviamo
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer wqriouhjqwoirqwhjoirqwjiorwqjriqwo"
    },//informazioni aggiuntive della chiamata http
    method: "GET" //GET POST DELETE PUT/PATCH - descrivono in che modo verranno traferiti
})