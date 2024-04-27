import {fetchDataPost} from "./utils/fetch.js"


document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()

    let obj={

    }

    let img = document.getElementById("img").value

    let title= document.getElementById("title").value

    let price = document.getElementById("price").value

    let ratings = document.getElementById("ratings").value

    obj["src"]=img
    obj["title"]=title
    obj["price"]=price
    obj["ratings"]=ratings


    fetchDataPost("http://localhost:3000/products", obj)



})