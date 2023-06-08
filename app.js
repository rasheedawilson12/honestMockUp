const scrollers = [];

let texter = document.querySelector(".scrollText");
let count = 0;
const carouselUp = () => {
  count++;
  texter.innerHTML = scrollers[count];
};

const carouselDown = () => {
  count--;
  texter.innerHTML = scrollers[count];
};
