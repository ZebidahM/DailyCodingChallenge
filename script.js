/* script.js Real Estate Website Javascript

This script manages interactivity for the website,
specifically handling the contact form submission.
*/

// Wait for the DOM to fully load before executing scripts
document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
});