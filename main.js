// alert('hello')
var menu=document.querySelector(".menu");

// var body=document.querySelector("body");

window.addEventListener("scroll",()=>{
if(scrollY!==0)
{
    menu.classList.add("menuScroll")
    // menu.style.transition="background 50ms linear";
}
else{
    menu.classList.remove("menuScroll");
    // menu.style.transition="background 300ms linear";

}
})