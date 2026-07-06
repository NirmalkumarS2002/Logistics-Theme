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

//form validation

const form = document.querySelector("#quoteForm");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const route = document.querySelector("#route");
const details = document.querySelector("#details");

const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Prevent numbers in name field
name.addEventListener("input", () => {
    name.value = name.value.replace(/[^A-Za-z\s]/g, "");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (name.value.trim() === "") {
        alert("Please enter your full name.");
        name.focus();
        return;
    }

    if (!nameRegex.test(name.value.trim())) {
        alert("Name should contain only letters.");
        name.focus();
        return;
    }

    if (email.value.trim() === "") {
        alert("Please enter your email address.");
        email.focus();
        return;
    }

    if (!emailRegex.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
    }

    if (route.value.trim() === "") {
        alert("Please enter the origin and destination.");
        route.focus();
        return;
    }

    if (route.value.trim().length < 5) {
        alert("Please enter a valid route.");
        route.focus();
        return;
    }

    if (details.value.trim() === "") {
        alert("Please enter shipment details.");
        details.focus();
        return;
    }

    if (details.value.trim().length < 10) {
        alert("Shipment details must contain at least 10 characters.");
        details.focus();
        return;
    }

    alert("Request Submitted Successfully!");

    form.reset();
});