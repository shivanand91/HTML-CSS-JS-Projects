const form = document.querySelector("form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height =  parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const resultBtn = document.querySelector("#result");

   if(height === '' || height < 0 || isNaN(height)){
    resultBtn.innerHTML = `Please Enter a Valid Number ${height}`;
    resultBtn.style.color = "red";
}
if(weight === '' || weight < 0 || isNaN(weight)){
    resultBtn.innerHTML = `Please Enter a Valid Number ${weight}`;
}
else {
    const BMI = (weight / ((height*weight)/10000)).toFixed(2);
    resultBtn.innerHTML = `${BMI}`;
    if((BMI > 0) && (BMI < 18.6)){
        
        resultBtn.innerHTML = `Under Weight ${BMI}`;
        resultBtn.style.color = "green";
    }else if((BMI > 18.6) && (BMI < 24.9)){
        
        resultBtn.innerHTML = `Normal Range ${BMI}`;   
        resultBtn.style.color = "green";
    }else{
        
        resultBtn.innerHTML = `Over Weight ${BMI}`;   
        resultBtn.style.color = "green";
    }
    
   }
})