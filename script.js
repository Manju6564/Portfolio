(function () {
  emailjs.init("OZ7bHGkPaG78s4xf7"); // Replace with your EmailJS user ID
})();

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    emailjs
      .send("service_bg90o6p", "template_0scqmaf", {
        email: email,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your email has been sent!");
          emailInput.value = ""; // Clear the email input field after submission
        },
        function (error) {
          console.log("FAILED...", error);
          alert(
            "There was an error sending your email. Please try again later."
          );
        }
      );
  });
