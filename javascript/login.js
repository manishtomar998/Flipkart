let submitForm = (event) => {
    event.preventDefault();
    let loginEmail = document.getElementById("email").value;
    let loginPassword = document.getElementById("password").value;
    fetch("http://localhost:3000/users").then(response => {
        response.text().then(res => {
            user(JSON.parse(res), loginEmail, loginPassword);
        })
    })
}

let user = (res, loginEmail, loginPassword) => {
    let person = res.filter(data => data.email === loginEmail)
    if (person.length == 0) {
        alert("User not found");
    } else if (person[0].password == loginPassword) {
        location.replace("../home.html")
    } else {
        alert("wrong password");
    }

}