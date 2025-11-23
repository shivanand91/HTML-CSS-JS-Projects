const countlabel = document.getElementById('countlabel');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('Increase');
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
} 

reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
} 

decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
} 