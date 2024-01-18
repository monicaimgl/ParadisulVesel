
//Typed Text
var typed = new Typed(".words", {
    strings:["animatori?", "ursitoare?"],
    typeSpeed: 150,
    loop:true
    
});

//Counter 
let counterValues = document.querySelectorAll(".number");
let interval = 1000;

counterValues.forEach((counterValues) => { //parcurgerea
  let startValue=0; 
  let endValue= parseInt(counterValues.getAttribute("data-val")); //fol.functiei parseInt pentru a-mi returna un nr intreg din stringul data-val
  let duration = 5;
  let counter= setInterval(function(){ //metoda pt call function  
    startValue +=1;
    
    counterValues.textContent = startValue;
    if(startValue == endValue){ 
      clearInterval(counter);
    }
  }, duration);

});





  
