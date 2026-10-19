
"use strict";

const gift = document.getElementById("gift");
const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");
const hint = document.getElementById("hint");

let opened = false;

function openGift() {
  if (opened) return;

  opened = true;

  // Open the gift and reveal the surprise.
  gift.classList.add("open");
  gift.setAttribute("aria-expanded", "true");

  message.hidden = false;

  hint.textContent = "💖 Your beautiful surprise is here!";

  openBtn.innerHTML = `
    <span class="button-icon">💗</span>
    <span>Made Just for You</span>
    <span class="button-arrow">♥</span>
  `;

  openBtn.setAttribute("aria-label", "Your gift is open");

  launchConfetti();
}

// Support both clicking and keyboard activation.
gift.addEventListener("click", openGift);
openBtn.addEventListener("click", openGift);

function launchConfetti() {
  const symbols = [
    "💖", "💕", "✨", "🌸", "💗",
    "✦", "🎉", "💝", "🌹", "♡"
  ];

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) return;

  const particleCount = 65;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.setAttribute("aria-hidden", "true");

    particle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.fontSize =
      (13 + Math.random() * 19) + "px";

    particle.style.setProperty(
      "--duration",
      (2.8 + Math.random() * 3.5) + "s"
    );

    particle.style.setProperty(
      "--drift",
      (Math.random() * 220 - 110) + "px"
    );

    particle.style.animationDelay =
      Math.random() * 0.9 + "s";

    document.body.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    }, { once: true });
  }
}
