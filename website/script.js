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
