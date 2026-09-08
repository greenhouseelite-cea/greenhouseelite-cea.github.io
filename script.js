/* =========================================================
   GREENHOUSE ELITE
   Interactive Functions
   ========================================================= */

// Set current year in footer
document.addEventListener("DOMContentLoaded", function () {

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});


/* =========================
   Coming Soon Message
   ========================= */

function comingSoon(toolName) {

    alert(
        toolName +
        " is currently under development.\n\n" +
        "GREENHOUSE ELITE engineering tools will be available soon."
    );

}


/* =========================
   Navigation
   ========================= */

document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
