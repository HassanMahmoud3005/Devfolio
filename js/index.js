let nav = document.getElementById("nav-color")
let close = document.getElementById("btn-close")
const li = document.getElementsByClassName("nav-link")
let menu = document.getElementById("menu")
let bar = document.getElementById("bars")


window.onscroll = function(){

    if(scrollY >= 30){

        nav.style.backgroundColor = "#222"
    }else{
        nav.style.backgroundColor = "transparent"

    }
}