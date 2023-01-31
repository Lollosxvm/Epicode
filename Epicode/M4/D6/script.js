
async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
}

async function displayUsers() {
    const users = await fetchUsers();
    const select = document.querySelector("#filter-by");
    const input = document.querySelector("#filter-input");
    const table = document.querySelector("#users-table");

    let filteredUsers = users;
    input.addEventListener("input", function () {
        filteredUsers = users.filter(function (user) {
            return user[select.value].includes(input.value);
        });
        renderTable(filteredUsers);
    });
    select.addEventListener("change", function () {
        filteredUsers = users.filter(function (user) {
            return user[select.value].includes(input.value);
        });
        renderTable(filteredUsers);
    });

    function renderTable(users) {
        table.innerHTML = "";
        for (const user of users) {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.innerText = user.name;
            row.appendChild(nameCell);
            const usernameCell = document.createElement("td");
            usernameCell.innerText = user.username;
            row.appendChild(usernameCell);
            const emailCell = document.createElement("td");
            emailCell.innerText = user.email;
            row.appendChild(emailCell);
            table.appendChild(row);
        }
    }

    function createNameList() {
        const names = users.map(function (user) {
            return user.name;
        });
        console.log(names);
    }

    document.querySelector("#name-list-button").addEventListener("click", createNameList);

    renderTable(filteredUsers);
}

displayUsers();

function createAddressArray(users) {
    return users.map(user => {
      let address = user.address;
      return `${address.street}, ${address.suite}, ${address.city} (${address.zipcode})`;
    });
  }
  