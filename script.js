let burger = document.querySelector(".burger");
let xMark = document.querySelector(".fa-xmark");
let Menu = document.querySelector("ul");

burger.addEventListener("click", ()=>{
    Menu.classList.add("show");
    burger.style.display = "none";
    xMark.style.display = "block";
})

xMark.addEventListener("click", ()=>{
    Menu.classList.remove("show");
    xMark.style.display = "none";
    burger.style.display = "block";
})