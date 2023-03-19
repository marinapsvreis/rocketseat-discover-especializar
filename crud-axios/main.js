const url = "http://localhost:5500/api";

function getUsers() {
    axios.get(url)
    .then(response => {
        renderApiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error));
}

function getUser(userId) {
    axios.get(`${url}/${userId}`)
    .then(response => {
        userName.textContent = response.data.name;
        userCity.textContent = response.data.city;
        userAvatar.src = response.data.avatar;
    })
    .catch(error => console.error(error));
}

function addUser(newUser){
    axios.post(url, newUser)
    .then(response => response.json())
    .then(data => alertApi.textContent = JSON.stringify(data))
    .catch(error => console.error(error));
}

function updateUser(userId, updatedUser){
    axios.put(`${url}/${userId}`, updatedUser)
    .then(response => alertApi.textContent = JSON.stringify(response.data))
    .catch(error => console.error(error));
}

function deleteUser(userId){
    axios.delete(`${url}/${userId}`)
    .then(response => alertApi.textContent = JSON.stringify(response.data))
    .catch(error => console.error(error));
}

const newUser = {
    name: "Marina Portugal",
    avatar: "https://picsum.photos/200/300",
    city: "Petrópolis"
}

const updatedUser = {
    name: "Ana Braga 2",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

//addUser(newUser);
//updateUser(2, updatedUser);
deleteUser(3);

getUsers();
getUser(2);
