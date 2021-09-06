function validateForm() {

    let email = document.forms["olasForm"]["email"].value;
    let password = document.forms["olasForm"]["password"].value;

    if(email === "ola_lindgard@hotmail.com" && password === "rasmus") {

        window.open("welcome_member.html");
        return true;
    }
    else {

        alert("Fel e-post eller lösenord!");
        return false;
    }

}