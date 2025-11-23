// Array.prototype.extraProperty = "Shivanand"

// const myNewArray = [1, 2, 3, 4, 5]

// for(let i in myNewArray){
//     if(myNewArray.hasOwnProperty(i)){
//         console.log(i);

//     }
//     // console.log(i);
// }

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

let interval

function startChangingBg() {

    function changeBg() {
        document.body.style.backgroundColor = randomColor()
    }
    interval = setInterval(changeBg, 1000)
}
function stopChangingBg() {
    clearInterval(interval)
    interval = null
}

document.querySelector("#start").addEventListener("click", startChangingBg)
document.querySelector("#stop").addEventListener("click", stopChangingBg)