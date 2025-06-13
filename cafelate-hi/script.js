document.addEventListener("DOMContentLoaded", () => {
    const leftButton = document.querySelector(".button.left");
    const rightButton = document.querySelector(".button.center");

    function toggleGlow() {
        leftButton.classList.toggle("glow"); // 左下の青い光
        rightButton.classList.toggle("glow"); // 右下の赤い光
    }

    setInterval(toggleGlow, 1000); // 同時に点滅
});
