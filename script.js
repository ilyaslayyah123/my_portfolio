const textArray = ["AI Developer"," Python Developer", "Machine Learning", "Flask App Builder", "GenAI Enthusiast"];
let typingElement = document.getElementById("typing");
let i = 0, j = 0, current = "", isDeleting = false;

function typeLoop() {
  current = textArray[i];
  typingElement.textContent = isDeleting ? current.substring(0, j--) : current.substring(0, j++);
  if (!isDeleting && j === current.length + 1) { isDeleting = true; setTimeout(typeLoop, 1000); return; }
  if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % textArray.length; }
  setTimeout(typeLoop, isDeleting ? 60 : 100);
}
document.addEventListener("DOMContentLoaded", function() {
  typeLoop();
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm('service_j1hk1qq', 'template_default', this)
      .then(() => document.getElementById("status-msg").textContent = "Message sent successfully!")
      .catch(() => document.getElementById("status-msg").textContent = "Failed to send message.");
    this.reset();
  });
});
