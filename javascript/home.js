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
        let addCart = document.createElement("button");
        addCart.onclick = function () {
            addItem.res[index]
        }
        itemImg.src = res[index].image;
        itemImg.height = "200";
        itemImg.width = "200";
        itemImg.alt = "photo";
        itemName.innerText = res[index].item;
        itemPrice.innerText = res[index].price;
        itemDes.innerText = res[index].Description;
        addCart.innerText = "Add to cart";
        productDiv.appendChild(itemImg);
        productDiv.appendChild(itemName);
        productDiv.appendChild(itemPrice);
        productDiv.appendChild(itemDes);
        productDiv.appendChild(addCart);
        document.getElementById("home").appendChild(productDiv);
    }
}
let addItem = (item) => {
    let data = {
        body: JSON.stringify(item),
        method: "post",
        headers: {
            "content-type": "application/json"
        }
    }
    fetch("http://localhost:3000/cart", data)
}