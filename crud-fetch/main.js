const url = "http://localhost:5500/api";

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error));
}

function getUser(userId) {
    fetch(`${url}/${userId}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        userCity.textContent = data.city;
        userAvatar.src = data.avatar;

    })
    .catch(error => console.error(error));
}

function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = JSON.stringify(data))
    .catch(error => console.error(error));
}

function updateUser(userId, updatedUser){
    fetch(`${url}/${userId}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = JSON.stringify(data))
    .catch(error => console.error(error));
}

function deleteUser(userId){
    fetch(`${url}/${userId}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = JSON.stringify(data))
    .catch(error => console.error(error));
}

const newUser = {
    name: "Marina Portugal",
    avatar: "https://picsum.photos/200/300",
    city: "Petrópolis"
}

const updatedUser = {
    name: "Ana Braga",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}


getUsers();
getUser(2);

// addUser(newUser);
// updateUser(2, updatedUser);
// deleteUser(2);