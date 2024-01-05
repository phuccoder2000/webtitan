function onSubmitContactForm (e) {
    let isFormValid = true
    let form = document.forms["contactForm"]

    if (!form["contactName"].value.trim()) {
        form["contactName"].classList.add("err")
        isFormValid = false
    }
    if (!form["contactSubject"].value.trim()) {
        form["contactSubject"].classList.add("err")
        isFormValid = false
    }
    if (!form["contactDescription"].value.trim()) {
        form["contactDescription"].classList.add("err")
        isFormValid = false
    }

    let checkingEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})/
    if (!checkingEmail.test(form["contactEmail"].value.trim())) {
        form["contactEmail"].classList.add("err")
        isFormValid = false
    }

    if (isFormValid) {
        // Send request to API
        // Thông báo submit thành công
    } else {
        // Show warning message
    }

    return isFormValid
}
export default Frorm;
