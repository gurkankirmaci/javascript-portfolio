const openButton  = document.getElementById("open");
const closeButton = document.getElementById("close");
const rotateContent = document.getElementById("container");


openButton.addEventListener('click',event => {
   rotateContent.classList.add("afterContainer");

});
   
closeButton.addEventListener('click',event => {
   rotateContent.classList.remove("afterContainer");
});