class Animal {
    constructor(name){
       this.name = name; 
}

putInTheDocument() {
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
    petTR.className = "row";
  
    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
    
  
    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
  
    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
    
    petActionTDButton.onclick = this.showAction.bind(this);
    petTR.onclick = this.showImage.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR);
    
  }

  showAction(e) {
    e.stopPropagation();
    document.getElementById(this.actionSoundName).play();
    
    }

  showImage() {
    document.querySelector("img").src = this.image;
    }


}

class Cat extends Animal{
    constructor(name){
    super(name);
    this.legs= 4;
    this.actionText="Meoow";
    this.actionSoundName="meow";
    //image
    this.image = "https://img-s1.onedio.com/id-55257c07af6b6a0336c2d89f/rev-0/w-900/h-675/f-jpg/s-84ef4b826e9d4ee1cbf4487603bad9a8f969b53c.jpg";
      
    } 

}

class Monkey extends Animal{
   constructor(name){
   super(name);
   this.legs= 2;
   this.actionText="Scream";
   this.actionSoundName="scream";
   //image
   this.image = "https://khosann.com/wp-content/uploads/2019/05/Cinliler-maymuna-insan-beyni-geni-yerlestirdi.jpg";
   
    } 
    
} 

const Mila = new Cat("Mila");
Mila.putInTheDocument();

const Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();

