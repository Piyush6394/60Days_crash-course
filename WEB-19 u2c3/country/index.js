let display = document.getElementById("display")

let fetchData = []

function dispalyCard(data) {
    display.innerHTML = ""

    data.forEach((obj) => {
        let div = document.createElement("div")

        let h3 = document.createElement("h3")
        h3.innerText = `Country : ${obj.country}`

        let p = document.createElement("p")
        p.innerText = `Rank : ${obj.Rank}`

        let p1 = document.createElement("p")
        p1.innerText = `Population : ${obj.population}`

        div.append(h3, p, p1)

        display.append(div)
    });

}



//fetch
fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
    .then((res) => res.json())
    .then((data) => {
        fetchData = data

        dispalyCard(fetchData.data)
        //console.log(fetchData.data)
    })
    .catch((err) => console.log(err))
//fetch



function sorting() {
    let optionvalue = document.getElementById("population").value
    let data = fetchData.data
    console.log(data)
    console.log(optionvalue, typeof optionvalue)


    if (optionvalue == "decreasing") {
        console.log(data)

        data.sort((a, b) => {
            return a.Rank - b.Rank
        })
        dispalyCard(data)
    } else {
        console.log(data)

        data.sort((a, b) => {
            return b.Rank - a.Rank
        })
        dispalyCard(data)
    }
}
