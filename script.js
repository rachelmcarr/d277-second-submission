function verifyEmail() {
    let email1 =  document.getElementById("email")
    let email2 = document.getElementById("emailConf")

    if (email1.value == email2.value) {
        return true;
    }
    else {
        alert("Emails do not match.");
    }

}