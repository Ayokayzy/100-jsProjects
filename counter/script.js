buttUp = document.getElementById("add-count")
buttDown = document.getElementById("lower-count")


let value = 0

function countUp() {
    value += 1
    if (value < 0) {
        document.getElementById("count").style.color = "red"
    }
    else {
        document.getElementById("count").style.color = "green"
    }
    document.getElementById("count").innerHTML =  String(Math.abs(value));
}

function countDown() {
    value -= 1
    if (value < 0) {
        document.getElementById("count").style.color = "red"
    }
    else {
        document.getElementById("count").style.color = "green"
    }
    document.getElementById("count").innerHTML = String(Math.abs(value));
}

buttUp.addEventListener("click", countUp)
buttDown.addEventListener("click", countDown)