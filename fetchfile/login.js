import { fetchData } from "./utils/fetch.js";


let obj = {}

let form = document.querySelector("form")
form.addEventListener("submit", function (event) {
    event.preventDefault()

    let email = document.getElementById("email").value

    let pass = document.getElementById("pass").value

    obj.email = email
    obj.password = pass

    fetchData("http://localhost:3000/users", checkPresent)
    

})
console.log(obj)



function checkPresent(data) {
    

    let flag=false
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === obj.email && data[i].password === obj.password) {
            alert("LigIn Successful");
            flag=true
            let data1=data[i]
            localStorage.setItem("user", JSON.stringify(data1))
            window.location.href = "index.html"
            
            break;
        }
    }
    if (!flag) {
        alert("Wrong Credentials");
    }

}





