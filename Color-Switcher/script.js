const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.querySelector("body");
// console.log(body);

buttons.forEach(function(button){
    // console.log(button);

    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target.id);

        switch(e.target.id){
            case 'black' : 
             body.style.backgroundColor = "black";
             break;
             case 'grey' : 
             body.style.backgroundColor = "grey";
             break;
             case 'green' : 
             body.style.backgroundColor = "green";
             break;
             case 'yellow' : 
             body.style.backgroundColor = "yellow";
             break;
             case 'red' : 
             body.style.backgroundColor = "red";
             break;
        }
    });
    
});