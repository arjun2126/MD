const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()


let scaleFactor = 1;

yesBtn.addEventListener("click", () => {
  question.innerHTML = "You're the best(prettiest) girl in the 🌎";
  gif.src = "https://media0.giphy.com/media/wO4cyxpDbtHji/giphy.gif?cid=6c09b9526zygcv5y2nv0qvg33jqlrv1mc4ru4wksc6ckevfi&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
  
  yesBtn.style.transform = "scale(1.2)";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  jsConfetti.addConfetti()
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
});
