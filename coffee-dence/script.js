document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");

    function toggleGlow() {
        buttons.forEach(button => button.classList.toggle("glow"));
    }

    setInterval(toggleGlow, 1000); // 全て同時に点滅
});
