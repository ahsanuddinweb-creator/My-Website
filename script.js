// Contact form submission simulation
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('ধন্যবাদ! আপনার মেসেজ পাঠানো হয়েছে।');
  this.reset();
});
// Optional: small animation or interactivity
document.addEventListener("DOMContentLoaded", function() {
  const img = document.querySelector(".profile-pic");
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.08)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});
