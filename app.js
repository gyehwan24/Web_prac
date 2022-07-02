const title = document.getElementById("title");
const hellos = document.querySelector(".hello");
const title2 = document.querySelector("div h2");
const title3 = document.querySelector("div h3");

console.log(title);
console.log(hellos);
console.log(title2);
console.log(title3);

currentColor = "green";
title2.style.color = "blue";

function handleTitileClick(){
    const clickedClass = "clicked";
    if(title.classList.contains(clickedClass)){
        title.classList.remove(clickedClass);
    }else{
        title.classList.add(clickedClass);
    }
}
function handleTitileClick2(){
    const clickedClass = "clicked";
    if(hellos.classList.contains(clickedClass)){
        hellos.classList.remove(clickedClass);
    }else{
        hellos.classList.add(clickedClass);
    }
}
title.addEventListener("click", handleTitileClick);
hellos.addEventListener("click", handleTitileClick2);
function handleMouseEnter( ){
    title.innerText = "Mouse is here";
}
title.addEventListener("mouseenter", handleMouseEnter);

function handleMouseLeave( ){
    title.innerText = "Mouse is gone";
}
title.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);

function handleWindowCopy(){
    alert("copier");
}
window.addEventListener("copy", handleWindowCopy);

function handleWindowOffLine(){
    alert("off wifi");
}
function handleWindowOnLinke(){
    alert("on wifi");
}
window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWindowOnLinke);





