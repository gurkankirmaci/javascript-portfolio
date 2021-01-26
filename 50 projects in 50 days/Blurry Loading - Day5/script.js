document.querySelector("body").onload =function(){
  var i = 0;

  if (i == 0) {
    var elem = document.getElementById("text");
    var bg = document.getElementById("bg");
    var counter = 1;
    text.style.opacity =4;
    var id = setInterval(frame, 50);
    function frame() {
      if (counter >= 100) {
        clearInterval(id);
        i = 0;
      }
       else 
       {
        counter++;
        text.style.opacity-=0.05;
        bg.style.opacity= +bg.style.opacity+0.01;
        elem.innerHTML ="%" + counter ;
        
      }
    }
  }

}


