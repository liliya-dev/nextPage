/* eslint-disable no-undef */

// // const controller = new ScrollMagic.Controller();
// const tween = new TimelineLite();
// const flightPath = {
//   curviness: 1.25,
//   autoRotate: true,
//   values: [
//     {
//       x: 600, y: -20,
//     },
//     {
//       x: 100, y: -200,
//     },
//     {
//       x: -100, y: -300,
//     },

//   ],
// };

// tween.addTo(
//   TweenLite.to('.fly', {
//     duration: 1,
//     Bezier: flightPath,
//   }),
// );

// console.log(tween);
// new ScrollMagic.Scene({
//   duration: 100, // the scene should last for a scroll distance of 100px
//   offset: 50, // start this scene after scrolling for 50px
// })
//   .setPin('#header') // pins the element for the the scene's duration
//   .addTo(controller);

gsap.registerPlugin(MotionPathPlugin);

for (let i = 1; i < 7; i = i + 2) {
  const tween = gsap.timeline();

  tween.to(`.header-img${i}`, {
    repeat: -1,
    yoyo: true,
    // animationDirection: 'power1.alternate',
    duration: 7,
    delay: 1,
    ease: 'power1.ease-in-out',
    motionPath: {
      path: [{
        x: -20, y: -10,
      }],
      curviness: 2,
      // autoRotate: true,
    },
  });
}

for (let i = 0; i < 7; i = i + 2) {
  const tween = gsap.timeline();

  tween.to(`.header-img${i}`, {
    repeat: -1,
    yoyo: true,
    // animationDirection: 'power1.alternate',
    duration: 7,
    delay: 1,
    ease: 'power1.ease-in-out',
    motionPath: {
      path: [{
        x: 30, y: 20,
      }],
      curviness: 2,
      // autoRotate: true,
    },
  });
}

const headerCenter = document.querySelector('.header__center');
const loadingNumbers = document.querySelector('.header__loading');

headerCenter.addEventListener('click', function() {
  hidePictures();
  changeNumbers();
});

function hidePictures() {
  const images = document.querySelectorAll(`.header-img`);

  for (const img of images) {
    img.style.display = 'none';
  }
}

function changeNumbers() {
  loadingNumbers.style.display = 'block';

  let number = 1;

  const timerNumber = setInterval(() => {
    number++;

    if (number === 100) {
      clearInterval(timerNumber);
    }
    loadingNumbers.textContent = number;
  }, 20);
}
