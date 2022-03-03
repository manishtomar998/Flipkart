let addProducts = () => {
    fetch("http://localhost:3000/products").then(response => {
        response.text().then(res => {
            readItems(JSON.parse(res))
        })
    })
}
let readItems = (res) => {
    for (let index = 0; index < res.length; index++) {
        let productDiv = document.createElement("div");
        let itemImg = document.createElement("img");
        let itemName = document.createElement("p");
        let itemPrice = document.createElement("p");
        let itemDes = document.createElement("p");
        itemImg.src = res[index].image;
        itemImg.height = "200";
        itemImg.width = "200";
        itemImg.alt = "photo";
        itemName.innerText = res[index].item;
        itemPrice.innerText = res[index].price;
        itemDes.innerText = res[index].Description;
        productDiv.appendChild(itemImg);
        productDiv.appendChild(itemName);
        productDiv.appendChild(itemPrice);
        productDiv.appendChild(itemDes);
        document.getElementById("home").appendChild(productDiv);
    }
}