const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let scaleFactor = 1;

yesBtn.addEventListener("click", () => {
  gif.src = "https://media0.giphy.com/media/wO4cyxpDbtHji/giphy.gif?cid=6c09b9526zygcv5y2nv0qvg33jqlrv1mc4ru4wksc6ckevfi&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
  question.innerHTML = "You're the best(prettiest) girl in the 🌎<br>Melanie, they say laughter is the best medicine, but your smile, infused with melatonin, is the ultimate remedy to brighten my worst day.";
  yesBtn.style.transform = "scale(1.2)";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  function generateConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = Math.random() * 2 + 3 + "s";
  confetti.style.opacity = Math.random();
  confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";
  document.body.appendChild(confetti);
  confetti.addEventListener("animationend", () => {
    confetti.remove();
  });
}
setInterval(generateConfetti, 100);
});

noBtn.addEventListener("click", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  
  scaleFactor -= 0.3;
  noBtn.style.transform = `scale(${scaleFactor})`;
  if (scaleFactor < 0.3) {
    scaleFactor = 0.3; 
  }
});
