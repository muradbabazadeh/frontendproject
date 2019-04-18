"use strict";
let nav = document.querySelector("#navbar");
let topHead = document.querySelector("#topheader");


window.onscroll = function () { navFuncton() }
function navFuncton() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        nav.style.position = "fixed";
        nav.style.top = "0px"
        return;
    }
    else {
        nav.style.position = "relative";
        nav.style.top = "0px"
        return;
    }
}

let left = document.getElementById("leftButton");
let right = document.getElementById("rightButton");
let slider = document.querySelector(".sliderRow");
let counter =0;

// counter++;
let width = document.getElementsByClassName("sliderImgDiv")[0].clientWidth;
left.addEventListener("click",function(){
    if(counter<=0){
        return false;
    }
    // counter++;
    counter--;
    slider.style.transform = "translateX("+(-counter*width)+"px)"
    
    
    console.log(counter)


})
right.addEventListener("click",function(){
    // counter++;
    if(counter>=4){
        return false;
    }
    counter++;
    slider.style.transform = "translateX("+(-counter*width)+"px)"
    
    console.log(counter)


})