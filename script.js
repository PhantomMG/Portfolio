"use strict";



const NAVCOLOR= document.querySelector(".nav");
const BODY = document.querySelector("body");


function doremi (){
    let y=document.body.offsetHeight;
    if(window.scrollY < 2000 && window.scrollY >= 1000 ){
        NAVCOLOR.style.setProperty("background-color","#6f2232");
    }else if (window.scrollY >= 2000 && window.scrollY <= 3000 ){
        NAVCOLOR.style.setProperty("background-color","#7A9D96");
       

    }
    else {
        NAVCOLOR.style.setProperty("background-color","#1a1a1d");
    }
    
}


setInterval(doremi, 500);




console.log(NAVCOLOR);

window.addEventListener("scroll", doremi);




