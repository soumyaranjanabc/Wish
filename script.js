const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const card = document.getElementById("card");
const final = document.getElementById("final");
const musicOverlay = document.getElementById("musicOverlay");
const music = document.getElementById("bgMusic");
const finalBtn = document.getElementById("finalBtn");

/* Start music (required tap) */
musicOverlay.addEventListener("click", () => {
  music.play();
  musicOverlay.style.display = "none";
});

/* NO button escape (touch-friendly) */
noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* YES click */
yesBtn.addEventListener("click", () => {
  vibrate();
  heartBurst();
  questionBox.classList.add("hidden");
  card.classList.remove("hidden");
});

/* Final screen */
finalBtn.addEventListener("click", () => {
  vibrate();
  card.classList.add("hidden");
  final.classList.remove("hidden");
});

/* Heart explosion */
function heartBurst() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}

/* Mobile vibration */
function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate([120, 60, 120]);
  }
}
