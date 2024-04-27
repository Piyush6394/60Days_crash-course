import { fetchData, fetchDataPut} from "./utils/fetch.js"
let product = document.getElementById("product")


//username display
let userName= document.getElementById("userName")
let name = JSON.parse(localStorage.getItem("user")) ||{}
let p=document.createElement("p")
p.innerText=name.name
p.style=`
border: 2px solid white;
border-radius: 5px;
padding: 7px 5px`
if(name.name){
    
    userName.append(p)
}else{
    setTimeout(()=>{
        alert("Please Log In")
    },60000)
}

//logout button
let logout= document.getElementById("logout")
let button = document.createElement("button")
button.innerText="Logout"
button.addEventListener("click", function(){
    localStorage.removeItem("user");
    window.location.reload()
})
logout.append(button)





function displayProducts(data) {

    product.innerHTML = ""
    data.forEach((obj) => {
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = obj.src

        let p = document.createElement("p")
        p.innerText = obj.title

        let p1 = document.createElement("p")
        p1.innerText = obj.price

        let p2 = document.createElement("p")
        p2.innerText = obj.ratings + "Rating"

        let button = document.createElement("button")
        button.innerText = "Add to Cart"
        button.addEventListener("click", function(){
            let userDetails = JSON.parse(localStorage.getItem("user"))

            if(userDetails){
                addToCart(obj)
            }
            
        })

        div.append(img, p, p1, p2, button)
        product.append(div)
    })


}

//add to cart
function addToCart(obj){
    fetchData("http://localhost:3000/allUsersCart", userData)

    function userData(data){
        let storedUser = JSON.parse(localStorage.getItem("user")) ||{}

        let userName= storedUser.name
        let nameUserCart = data[userName] || []
        nameUserCart.push(obj)
        let updatecart={...data, [userName]:nameUserCart }
        fetchDataPut("http://localhost:3000/allUsersCart", updatecart)
    }
}


//call fetch for display products
fetchData("http://localhost:3000/products", displayProducts)

