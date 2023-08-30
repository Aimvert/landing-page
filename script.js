import api from "./apikey.js";

function sendEmail(email) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: api.username,
        Password: api.password,
        To: api.sendAddress,
        From: api.username,
        Subject: `Subscriber Email ID: ${email}`,
        Body: `${email}`,
    }).then((message) => console.log(message));
}

const emailForm = document.getElementById("email-form");
emailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const emailAddress = emailInput.value;
    emailInput.value = "";
    sendEmail(emailAddress);
});

const learnMoreBtn = document.querySelector(".learn-more-btn");
learnMoreBtn.addEventListener("click", () => {
    document
        .getElementById("learn-more")
        .scrollIntoView({ behavior: "smooth" });
});
