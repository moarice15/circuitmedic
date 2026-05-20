const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* LOADER */

window.addEventListener("load", () => {

    const loader =
    document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 2200);

});

if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker
      .register("sw.js")
      .then(() => {
        console.log("PWA Ready");
      });

  });

}
