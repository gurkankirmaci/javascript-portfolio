
const myPanel = document.querySelectorAll(".panel");


for (let i =0;i<myPanel.length;i++){
    myPanel[i].addEventListener("click",function(){
        removePanel();
        myPanel[i].classList.toggle("active");
    });
}

function removePanel(){
  for(let j=0; j<myPanel.length;j++){
    myPanel[j].classList.remove("active");
  }
}   
