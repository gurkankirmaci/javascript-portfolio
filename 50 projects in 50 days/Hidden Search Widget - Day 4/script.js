const bar =document.getElementById("container");
const btn =document.getElementById("btn1");
const icerik = document.getElementById("searchBar");


btn.addEventListener('click',event =>{
    icerik.classList.toggle("clickAfter");
});

