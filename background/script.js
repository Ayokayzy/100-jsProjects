switch (prompt("What is the weather like? \nEnter with either: \nRainy \nCloudy or \nSunny")) {
    case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
    case "sunny":
    console.log("Dress lightly.");
    case "cloudy":
    console.log("Go outside.");
    break;
    default:
    prompt("Unknown weather type!");
    break;
}

const colors = ["blue", "red", "green", "grey", "orange"];

function getRandom(min = 0, max = colors.length) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function changeColor() {
    document.getElementById("box").style.background = colors[getRandom()];
}

butt = document.getElementById("button");
butt.addEventListener("click", changeColor);

