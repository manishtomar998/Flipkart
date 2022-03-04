let openCart = () => {
    fetch("http://localhost:3000/cart").then(response => {
        response.text().then(res => {
            let result = JSON.parse(res)
            console.log(result);
        })
    })
}