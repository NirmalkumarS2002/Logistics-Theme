let sidebtn1 = document.querySelector(".sidebtn1");
let sidebtn2 = document.querySelector(".sidebtn2");
let image = ["./src/hero-bg1.webp","./src/loginbg.webp"];
let herosection = document.querySelector(".hero-section");

let index = 0;
sidebtn1.addEventListener("click", () => {
    index++;
    if (index > image.length - 1) {
        index = 0;
    }
    herosection.style.backgroundImage = `url(${image[index]})`;
});

sidebtn2.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = image.length - 1;
    }
    herosection.style.backgroundImage = `url(${image[index]})`;
});

setInterval(() => {
    index++;
    if (index >= image.length) {
        index = 0;
    }
    herosection.style.backgroundImage = ` linear-gradient(125deg,rgba(0, 0, 0, 0.658),rgba(2, 0, 0, 0.342)),url(${image[index]})`;
}, 2000);