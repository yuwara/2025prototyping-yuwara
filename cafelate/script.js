document.addEventListener("DOMContentLoaded", () => {
    const leftButton = document.querySelector(".button.left");
    const rightButton = document.querySelector(".button.center");

    function toggleGlow() {
        leftButton.classList.toggle("glow");
        rightButton.classList.toggle("glow");
    }

    setInterval(toggleGlow, 1000); // 同時に点滅
});
