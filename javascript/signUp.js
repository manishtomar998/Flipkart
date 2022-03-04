let registerId = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let number = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("cnfmPassword").value;
    if (passCheck(password, confirmPassword)) {
        let userData = {
            name: name,
            number: number,
            password: password,
        }
        let data = {
            body: JSON.stringify(userData),
            method: "post",
            headers: {
                "content-type": "application/json"
            }
        }
        fetch("http://localhost:3000/users", data);
        location.replace("../Pages/login.html");
    }
}
let passCheck = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        alert("Password do not match");
        return false;
    }
    return true;
}