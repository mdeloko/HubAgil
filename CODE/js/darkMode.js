localStorage.setItem('darkMode',false);
const checkbox = document.getElementById('dark-mode-toggle');

console.log(localStorage.getItem('darkMode'));
if(checkbox.checked == true){
    localStorage.setItem('darkMode',true);
}else{
    localStorage.setItem('darkMode',false);
}