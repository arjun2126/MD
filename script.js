const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAY!";
  gif.src = "https://media0.giphy.com/media/wO4cyxpDbtHji/giphy.gif?cid=6c09b9526zygcv5y2nv0qvg33jqlrv1mc4ru4wksc6ckevfi&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
  
  // Hide the buttons after the user clicks on "Yes"
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
