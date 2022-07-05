function loginCheck() {   
    if (form.email.value == "maryoud2000@gmail.com" && form.password.value == "123") {
        window.location.href = "/Home/Welcome";
    }
    else {
        alert("Error Password or Username")
    }
}