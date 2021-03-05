
const review = document.querySelectorAll(".review");
const face =document.querySelector(".face");
const button =document.querySelector("#sendbutton");
const panel =document.querySelector('#container');
let selectedRating = 'unhappy' 

face.addEventListener('click',(e)=>{
   if( e.target.parentNode.classList.contains("review")){
        removeActive()
        e.target.parentNode.classList.add("active")
        selectedRating = e.target.nextElementSibling.innerHTML;

   }   
})

function removeActive() {
    for(let i=0;i<review.length;i++){
        review[i].classList.remove("active")
    }
}


button.addEventListener('click', () =>{
    panel.innerHTML=`<div id=containerFeedback> 
                                        <h2><i class="fa fa-heart"></i></h2> 
                                        <h3> Thank You ! </h3> 
                                        <h3> Feedback:${selectedRating} </h3> 
                                        <h3>We'll use your feedback to improve our customer support</h3>
                                         </div>`
})