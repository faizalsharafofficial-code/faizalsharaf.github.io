var typed = new Typed(".text", {
    strings: ["AV Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");


togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

document.addEventListener("DOMContentLoaded", () => {
    // Function to animate a circular progress bar
    function animateCircularProgress(containerClass, startValue, endValue, speed, gradientColor) {
        const circularProgress = document.querySelector(`.${containerClass} .circular`);
        const progressValue = document.querySelector(`.${containerClass} .progress-value`);

        let progressStartValue = startValue;
        const progressEndValue = endValue;

        let animationInterval = null;

        // Function to update the progress bar
        function updateProgressBar() {
            if (progressStartValue <= progressEndValue) {
                progressStartValue++;

                if (progressValue) {
                    progressValue.textContent = `${progressStartValue}%`;
                }

                if (circularProgress) {
                    circularProgress.style.background = `conic-gradient(${gradientColor} ${progressStartValue * 3.6}deg, #fff 0deg)`;
                }
            } else {
                clearInterval(animationInterval);
            }
        }

        // Start the animation
        animationInterval = setInterval(updateProgressBar, speed);
    }

    // Animate the first circular progress bar
    animateCircularProgress("cont:nth-child(1)", 0, 84, 30, "#0ef");

    // Animate the second circular progress bar
    animateCircularProgress("cont:nth-child(2)", 0, 79, 30, "#0ef");

    // Animate the third circular progress bar
    animateCircularProgress("cont:nth-child(3)", 0, 74, 30, "#0ef");

    animateCircularProgress("cont:nth-child(4)", 0, 89, 30, "#0ef");
});





