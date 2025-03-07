/* script.js Real Estate Website Javascript

This script manages interactivity for the website,
specifically handling the contact form submission.
*/

// Wait for the DOM to fully load before executing scripts
document.addEventListener("DOMContentLoaded", function() {

    // Get the contact form element
    const contactForm = document.getElementById("contact-form");

    // Add an event listener for form submission
    contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Display an alert message to confirm submission
    alert("Thank you for your message! We will get back to you soon.");

    //Reset the form fields after submission
    this.requestFullscreen();

    });

});