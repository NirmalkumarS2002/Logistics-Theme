const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;


// Prevent numbers & special characters in Name
name.addEventListener("input", () => {
    name.value = name.value.replace(/[^A-Za-z\s]/g, "");
});


// Prevent letters in Phone Number
phone.addEventListener("input", () => {
    phone.value = phone.value.replace(/\D/g, "");
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

    if (phone.value.trim() === "") {
        alert("Please enter your phone number.");
        phone.focus();
        return;
    }

    if (!phoneRegex.test(phone.value.trim())) {
        alert("Phone number must contain exactly 10 digits.");
        phone.focus();
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

    if (subject.value.trim() === "") {
        alert("Please enter the subject.");
        subject.focus();
        return;
    }

    if (subject.value.trim().length < 3) {
        alert("Subject must be at least 3 characters.");
        subject.focus();
        return;
    }

    if (message.value.trim() === "") {
        alert("Please enter your message.");
        message.focus();
        return;
    }

    if (message.value.trim().length < 10) {
        alert("Message must contain at least 10 characters.");
        message.focus();
        return;
    }

    alert("Message sent successfully!");

    form.reset();

});