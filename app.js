const emailEl = document.getElementById("email");
const exclamationEl = document.querySelector(".email_error");
const validationEl = document.querySelector(".validation_message");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const buttonEl = document.querySelector(".submit_button");
const formEl = document.getElementById("form_box");


buttonEl.addEventListener("click", (e) => {
    e.preventDefault()
    if (emailEl.value.match(pattern)){
        emailEl.classList.add("valid")
        emailEl.classList.remove("invalid")
        validationEl.innerHTML = "Your email address in Valid."
        validationEl.style.color = "#3450B5"
        exclamationEl.classList.remove("open")
        formEl.submit()
    }
    else{
        emailEl.classList.remove("valid")
        emailEl.classList.add("invalid")
        validationEl.innerHTML = "Please enter valid email address."
        validationEl.style.color = "#B43436"
        exclamationEl.classList.add("open")
    }
})

// function validation(){
//     if (emailEl.value.match(pattern)){
//         emailEl.classList.add("valid")
//         emailEl.classList.remove("invalid")
//         validationEl.innerHTML = "Your email address in Valid."
//         validationEl.style.color = "#0000ff"
//         exclamationEl.classList.remove("open")


//     }
//     else{
//         emailEl.classList.remove("valid")
//         emailEl.classList.add("invalid")
//         validationEl.innerHTML = "Please enter valid email address."
//         validationEl.style.color = "#ff0000"
//         exclamationEl.classList.add("open")
//     }
// }

// validation();