let quote = [
    {
        title: "You only live once, but if you do it right, once is enough",
        Authur: "Mae West"
    },
    {
        title: "Never let the fear of striking out stop you from playing the game",
        Authur: "Babe Ruth"
    },
    {
        title: "Money and success don't change people, it only amplifies what is already there",
        Authur: "will smith"
    },
    {
        title: "The enemies cannot destroy the king who has at his service the respect and friendship of the wise men who can find fault, disagree, and correct him.",
        Authur: "Thiruvalluvar"
    },
]

butt = document.getElementById("button");

function randNum(min = 0, max = quote.length) {
    return Math.floor(Math.random() * max) + min;
}

function changeQuote() {
    let x = randNum();
    document.getElementById("title").innerHTML = quote[x].title;
    document.getElementById("authur").innerHTML = quote[x].Authur;
}

butt.addEventListener("click", changeQuote);