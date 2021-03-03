const navbar = document.querySelector("nav");
const list = document.querySelector('li');
const button=document.querySelector("button");
window.addEventListener("scroll", () => {
    if(window.scrollY > 67) {
        navbar.classList.add('active1');
        list.classList.add('li-colors');
    }

    else {
        navbar.classList.remove('active1');
    }
})

button.addEventListener("click",() =>{
    var x = document.getElementById("topnav")
    if (x.className === "topn") {
      x.className += " responsive";
    } else {
      x.className = "topn";
    }
});
