const checkbox = document.getElementById('dark-mode-toggle');
const body = document.querySelector("body");
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");

if(localStorage.getItem('darkMode')=='true'){
    checkbox.checked = true;
    setDark();
}
function setDark(){
    if(checkbox.checked){
        localStorage.setItem('darkMode','true');
        body.classList.add("dark");
        header.classList.add("dark");
        menu.classList.add("dark");
    }else{
        localStorage.setItem('darkMode','false');
        body.classList.remove("dark");
        header.classList.remove("dark");
        menu.classList.remove("dark");
    }
}

checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        localStorage.setItem('darkMode','true');
        body.classList.add("dark");
        header.classList.add("dark");
        menu.classList.add("dark");
    }else{
        localStorage.setItem('darkMode','false');
        body.classList.remove("dark");
        header.classList.remove("dark");
        menu.classList.remove("dark");
    }
});