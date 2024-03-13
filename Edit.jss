const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
let yesCounter = 0;
let noCounter = 0;

const cheerSound = new Audio("cheer_sound.mp3");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAY!";
  gif.src = "https://media0.giphy.com/media/wO4cyxpDbtHji/giphy.gif?cid=6c09b9526zygcv5y2nv0qvg33jqlrv1mc4ru4wksc6ckevfi&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
  yesCounter++;
  displayFeedbackMessage("You're the best(prettiest) girl in the 🌎");
  startConfetti();
  playSoundEffect(cheerSound); // Play the sound effect
});

noBtn.addEventListener("click", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

function displayFeedbackMessage(message) {
  const feedbackDiv = document.createElement("div");
  feedbackDiv.classList.add("feedback-message");
  feedbackDiv.textContent = message;
  wrapper.appendChild(feedbackDiv);
  setTimeout(() => {
    feedbackDiv.remove();
  }, 3000);
}

function startConfetti() {
  const confettiWrapper = document.createElement("div");
  confettiWrapper.classList.add("confetti-wrapper");
  wrapper.appendChild(confettiWrapper);

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confettiWrapper.appendChild(confetti);
  }

  setTimeout(() => {
    confettiWrapper.remove();
  }, 5000);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function playSoundEffect(sound) {
  sound.currentTime = 0; // Reset the sound to the beginning
  sound.play();g
}
