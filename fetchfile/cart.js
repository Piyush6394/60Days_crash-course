import { fetchData, fetchDataPut } from "./utils/fetch.js"

let productCart = document.getElementById("productCart")

// username
let userName = document.getElementById("userName")
let name1 = JSON.parse(localStorage.getItem("user")) || {}
let p = document.createElement("p")
p.innerText = name1.name
p.style = `
border: 2px solid white;
border-radius: 5px;
padding: 7px 5px`
if (name1.name) {
    userName.append(p)
}

function displayProducts(data) {
    let userDetails = JSON.parse(localStorage.getItem("user")) || {}
    let userName = userDetails.name

    let userData= data[userName]


    userData.forEach((obj, i) => {
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = obj.src

        let p = document.createElement("p")
        p.innerText = obj.title

        let p1 = document.createElement("p")
        p1.innerText = obj.price

        let p2 = document.createElement("p")
        p2.innerText = `${obj.ratings} Rating`

        let button = document.createElement("button")
        button.innerText = "Remove From Cart"
        button.addEventListener("click", function () {
            removeProduct(i)
        })

        div.append(img, p, p1, p2, button)
        productCart.append(div)

    });
}


//delete from cart
function removeProduct(index) {
    fetchData("http://localhost:3000/allUsersCart", getData)

    function getData(data) {
        let userDetails = JSON.parse(localStorage.getItem("user")) || {}
        let userName = userDetails.name

        let userData= data[userName]
        userData.splice(index, 1)

        let updatecart={...data, [userName]:userData }

        fetchDataPut("http://localhost:3000/allUsersCart", updatecart)
    }
}




fetchData("http://localhost:3000/allUsersCart", displayProducts)