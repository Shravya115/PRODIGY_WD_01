document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".nav-links a");

    // Add Active Class on Scroll
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + 100; // Offset to detect section

        document.querySelectorAll("section").forEach(section => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                navbarLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(`.nav-links a[href="#${section.id}"]`).classList.add("active");
            }
        });
    });

    // Smooth Scroll on Click
    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
