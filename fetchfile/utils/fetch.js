

async function fetchData(url, func) {

    try {
        let res = await fetch(`${url}`)
        let data = await res.json()
        console.log(data)
        func(data)
    } catch (err) {
        (console.log(err))
    }

}

async function fetchDataPost(url, obj) {
    try {
        let res = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if (res.ok) {
            let data = await res.json()
            console.log(data)
        } else {
            throw new Error("Failed to Fetch")
        }

    } catch (err) {
        console.log(err)
    }
}

async function fetchDataPut(url, obj) {
    try {
        let res = await fetch(`${url}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        const updatedData = await res.json();

        console.log('Updated Cart:', updatedData);

    }catch(err){
        console.log(err)
    }
}


export { fetchData, fetchDataPost, fetchDataPut }