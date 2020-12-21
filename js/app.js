const toss = () => {
    let coin = ['Heads', 'Tails'];
    let answer = document.getElementById("answer");
    let img = document.querySelector("img");
    let x = parseInt(Math.random() * 2);
    if (coin[x] == "Heads") {
        img.setAttribute("src", "./img/head.jpg");

        answer.innerHTML = "Heads";
    } else {
        img.setAttribute("src", "./img/tails.jpg");
        answer.innerHTML = "Tails";
    }

}

const reset = () => {
    let img = document.querySelector("img");
    let answer = document.getElementById("answer");
    answer.innerHTML = "";
    img.removeAttribute("src");
}