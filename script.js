const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName = document.getElementById("name").value.trim();

    formMessage.textContent =
        "Thank you, " + customerName +
        "! Your message has been received for this demo.";

    contactForm.reset();
});