window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const main = document.getElementById("main-content");

  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
    document.body.style.overflow = "auto";
    main.style.opacity = "1";
  }, 4000);
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const thankYou = document.getElementById("thankYouMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent normal submission

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Hide the form
          form.style.display = "none";

          // Show thank you message
          if (thankYou) {
            thankYou.style.display = "block";
            setTimeout(() => {
              thankYou.style.opacity = "1";
            }, 100);
          }
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        alert("Network error. Please try again.");
      });
    });
  }
});
