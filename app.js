const toggleBtn = document.getElementById("toggleBtn")
const mobileMenu = document.getElementById("mobileMenu")



toggleBtn.addEventListener("click",function(){
    mobileMenu.classList.toggle("active")
})