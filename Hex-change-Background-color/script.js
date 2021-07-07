let hexNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let butt = document.getElementById('button')

function random(min = 0, max = hexNum.length){
    return Math.floor(Math.random() * max) + min;
}

function getHex() {

    hex = '#';
    for(let i = 0; i < 6; i++) {
        r = random()
        hex = hex + hexNum[r];
    }
    return hex;
}

function changeHex() {
    document.getElementById("box").style.backgroundColor = getHex();
    console.log(getHex());
}

butt.addEventListener("click", changeHex)