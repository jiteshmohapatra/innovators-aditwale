//search form section 
let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}
window.onscroll = () =>{
    searchform.classList.remove('active');
}