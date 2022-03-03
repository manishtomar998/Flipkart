let registerId = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let number = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("cnfmPassword").value;
    result = passCheck(password, confirmPassword);

    let Id = {
        name: name,
        number: number,
        password: password,
    }
    let data = {
        body: JSON.stringify(Id),
        method: "post",
        headers: {
            "content-type": "application/json"
        }
    }
    let user = fetch("http://localhost:3000/users").then(response => {
        response.text().then(res => {
            let final = JSON.parse(res)
            console.log(final);
        })
    })
   
}
let passCheck = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        alert("Password do not match");
        return false;
    }
    return true;
}