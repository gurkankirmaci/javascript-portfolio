import data from "./data.js"
import {createTableElements} from "./main.js";


/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

//population-bigger than 500000
document.querySelector("#populationBigger").addEventListener("click", () => {
    
    const pbtn = data.filter( city => city.population>500000);
    createTableElements(pbtn,"allcities")
  
});

//land area - less than 1000
document.querySelector("#landAreaLess").addEventListener("click" , () =>{
    const  lsbtn = data.filter(city =>  city.landArea < 1000 )
    createTableElements(lsbtn,"allcities")
});

//Does any city has population less than 100.000?

document.querySelector("#isPopulationLess").addEventListener("click",() =>{
    const qyuzbin = data.some(city=> city.population < 100000 );
        if(qyuzbin){
           alert("YES")
        }
        else{
            alert("NO")
        }

});

//Does every city has land area bigger than 100?
document.querySelector("#isLandBigger").addEventListener("click" , () => {
    const q100 = data.every(city => city.landArea > 100 );
       if (q100){
         alert("YES")
       }
       else {
         alert("NO")
       }
});



//Choose yazan selecti elimizdeki bulunan tum sehirlerin isimleriyle dolduralim.

document.querySelector("#selectcity").innerHTML=" <option selected>Select City </option>";
data.forEach((city) => {
  document.querySelector("#selectcity").innerHTML += `<option value= '${city.name}'> ${city.name} </option>`
});


//Choose yazan select secim yapildiginda 2. tablo olan, found item tablosunu selectde secilen sehir ile dolduralim.

selectedCity.addEventListener("change", (event) => {
  const selectCities = data.filter(cities => event.target.value === cities.name);
  createTableElements(selectCities, "singlecity");
});
