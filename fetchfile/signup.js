import { fetchData, fetchDataPost } from "./utils/fetch.js"

let obj = {}

let form = document.getElementById("form")
form.addEventListener("submit", function (event) {
    event.preventDefault()

    let name = document.getElementById("name").value

    let email = document.getElementById("email").value

    let pass = document.getElementById("pass").value

    obj.name = name
    obj.email = email
    obj.password = pass

    fetchData("http://localhost:3000/users", checkEmailsPresent)



})

function checkEmailsPresent(data) {

    let flag = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === obj.email) {
            alert("Email is already present");
            flag = true;
            break; // Exit the loop
        }
    }

    if (!flag) {
        fetchDataPost("http://localhost:3000/users", obj)
        window.location.href = "login.html"

    }

}