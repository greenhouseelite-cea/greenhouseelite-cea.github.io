/* =========================================================
   GREENHOUSE ELITE
   Bilingual Language System
   English / فارسی
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       Current Year
    ----------------------------------------------------- */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* -----------------------------------------------------
       Language Elements
    ----------------------------------------------------- */

    const languageButton = document.getElementById("languageToggle");

    const translatableElements =
        document.querySelectorAll("[data-en][data-fa]");


    /* -----------------------------------------------------
       Apply Language
    ----------------------------------------------------- */

    function applyLanguage(language) {

        const isPersian = language === "fa";


        /* Change document direction */

        document.documentElement.lang =
            isPersian ? "fa" : "en";

        document.documentElement.dir =
            isPersian ? "rtl" : "ltr";


        /* Change all translated elements */

        translatableElements.forEach(function (element) {

            const text =
                isPersian
                    ? element.getAttribute("data-fa")
                    : element.getAttribute("data-en");

            if (text !== null) {
                element.textContent = text;
            }

        });


        /* Change language button */

        if (languageButton) {

            languageButton.textContent =
                isPersian ? "English" : "فارسی";

            languageButton.setAttribute(
                "aria-label",
                isPersian
                    ? "Switch to English"
                    : "تغییر به زبان انگلیسی"
            );

        }


        /* Change browser tab title */

        document.title =
            isPersian
                ? "GREENHOUSE ELITE | مهندسی گلخانه و CEA"
                : "GREENHOUSE ELITE | Greenhouse Engineering & CEA";


        /* Save selected language */

        localStorage.setItem(
            "greenhouseEliteLanguage",
            language
        );

    }


    /* -----------------------------------------------------
       Language Button
    ----------------------------------------------------- */

    if (languageButton) {

        languageButton.addEventListener(
            "click",
            function () {

                const currentLanguage =
                    document.documentElement.lang;

                const newLanguage =
                    currentLanguage === "fa"
                        ? "en"
                        : "fa";

                applyLanguage(newLanguage);

            }
        );

    }


    /* -----------------------------------------------------
       Load Saved Language
    ----------------------------------------------------- */

    const savedLanguage =
        localStorage.getItem(
            "greenhouseEliteLanguage"
        );


    if (savedLanguage === "fa") {

        applyLanguage("fa");

    } else {

        applyLanguage("en");

    }


    /* -----------------------------------------------------
       Smooth Navigation
    ----------------------------------------------------- */

    document
        .querySelectorAll('nav a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    const target =
                        document.querySelector(targetId);

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });

});


/* =========================================================
   Engineering Tools
   ========================================================= */

function comingSoon(toolName) {

    const language =
        document.documentElement.lang;


    if (language === "fa") {

        alert(
            "ابزار «" +
            toolName +
            "» در حال توسعه است.\n\n" +
            "ابزارهای محاسباتی مهندسی GREENHOUSE ELITE به‌زودی در دسترس خواهند بود."
        );

    } else {

        alert(
            toolName +
            " is currently under development.\n\n" +
            "GREENHOUSE ELITE engineering tools will be available soon."
        );

    }

}
