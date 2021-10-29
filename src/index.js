/*랜덤 배경 이미지*/
const imgs = [
    "laurent-mandine",
    "eleanor-styles",
    "ben-stern",
    "dan-meyers",
    "finde-zukunft",
    "marvin-meyer",
    "gabrielle-henderson",
    "sarah-takforyan",
    "divani-diva",
    "emma-ou",
    "joanna-kosinska",
    "marie-thibault",
    "daniil-komov",
    "aaron-burden",
    "ben-allan",
    "ffa801",
    "dayne-topkin"
];

//스크롤바 생기는 이슈 해결
function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
setScreenSize();
document.body.style = 'height: --vh;';

const chosenImage = imgs[Math.floor(Math.random() * imgs.length)];
document.body.style = `background-image: url(img/${chosenImage}.jpg)`;
