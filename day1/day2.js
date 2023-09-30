// Task 1
// let userName = prompt("Enter Your Name :");
// alert(`hello , ${userName}`);

// Task2
// let age = prompt('How old are you?', 100); defaut value 100
// alert(`You are ${age} years old!`); // You are 100 years old!

// Task 3
// let isBoss = confirm("Are you the boss?");
// if(isBoss){
//     alert(`hello boss`)
// }
// else(
//     alert("Sorry , you are not boss")
// )

// Task 3

let main = document.querySelector(".main");
let cursr = document.querySelector(".cursor");

main.addEventListener("mousemove", function (details) {
    cursr.style.left = details.x + "px";
    cursr.style.top = details.y + "px";
} )

function handleClick(e) {
    e.preventDefault();    
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar, i) => {
        bar.style.animationPlayState = "running";
    });
    
    const lastBar = bars[bars.length - 1];
    lastBar.addEventListener("animationed", () => {
        setTimeout(() => {
            Window.location = e.target.href;
        }, 500);
    });
}