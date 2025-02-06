document.addEventListener("DOMContentLoaded", function () {
    const proposalButton = document.getElementById("proposalButton");
    const proposalText = document.getElementById("proposalText");

    proposalButton.addEventListener("click", function () {
        this.style.display = "none"; // Hide button
        typeText(proposalText, "Will You Be My Girlfriend? ❤️"); // Start typing effect
        createFloatingHearts(); // Start heart animation
    });
});

// Typing effect for proposal text
function typeText(element, text) {
    element.classList.remove("hidden");
    element.style.opacity = "1"; // Make visible
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 100); // Typing speed
        }
    }
    typing();
}

// Floating hearts animation
function createFloatingHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 150);
    }
}
