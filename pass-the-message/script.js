input = document.getElementById("input");
butt = document.getElementById("button");

function checkValue () {
    if(input.value === ''){
        document.getElementById("text").innerHTML = "Error101";
        setTimeout(reset, 2000);
        // setInterval(reset, 2000);
    }
    else{
        document.getElementById("text").innerHTML = input.value;
        input.value = "";
    }
}

function reset () {
    document.getElementById("text").innerHTML = "Last Message Delivered";
}

butt.addEventListener("click", checkValue);