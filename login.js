const wrapped = document.querySelector(".wrapped");
const signupHeader = document.querySelector(".signup ")
const loginHeader = document.querySelector(".login ")


loginHeader.addEventListener("click", () =>{
    wrapped.classList.add("active");
})

signupHeader.addEventListener("click", () =>{
    wrapped.classList.remove("active");
})


