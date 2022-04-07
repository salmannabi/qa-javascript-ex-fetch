const readBtn = document.querySelector('#readButton');
const createBtn = document.querySelector('#createButton');
const inputField = document.querySelector('#inputText');
const outputField = document.querySelector('#outputText');
const registerUsr = document.querySelector('#registerUser');

readBtn.onclick = () => read(inputField.value);
createBtn.onclick = () => create(inputField.value);
registerUsr.onclick = () => register(inputField.value);

let read = INTERFACE => {
    axios.get(INTERFACE).then(response => {
        outputField.innerHTML = JSON.stringify(response.data);
    }).catch(err => {
        console.error(err);
    });
}

let create = URL => {
    axios.post(URL, {
        name : "Morpheus",
        job : "Leader"
    }).then(response => {
        outputField.innerHTML = JSON.stringify(response);
    }).catch(err => {
        console.error(err);
    });
}

let register = URL => {
    axios.post(URL, {
        email : "eve_holt@mail.com",
        password : "pistol"
    }).then(res => {
        outputField.innerHTML = JSON.stringify(res);
        console.log("Registration successful!");
    }).catch(err => {
        console.error(err);
    })
}