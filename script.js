let count = 0;

// const increase = (count) => count + 1;
// const decrease = (count) => count - 1;
// const reset = (count) => (count = 0);

// console.log(increase(-1));
// console.log(decrease(1));
// console.log(reset(1));

const increaseBtn = document.querySelector('#increase-btn');
const decreaseBtn = document.querySelector('#decrease-btn');
const resetBtn = document.querySelector('#reset-btn');

const selectTheme = (theme) => {
  document.querySelector('body').className = theme;
  document.querySelector('main').className = theme;
};

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].classList.add('buttons');
}

increaseBtn.addEventListener('click', () => {
  count++;
  document.querySelector('#count').textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  document.querySelector('#count').textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  document.querySelector('#count').textContent = count;
});

const facebookBtn = document.querySelector('#facebook');
const devmountainBtn = document.querySelector('#devmountain');
const twitterBtn = document.querySelector('#twitter');
const defaultBtn = document.querySelector('#default');

// defaultBtn.addEventListener('click', () => {
//   selectTheme('default');
// });
// facebookBtn.addEventListener('click', () => {
//   selectTheme('facebook');
// });
// devmountainBtn.addEventListener('click', () => {
//   selectTheme('devmountain');
// });
// twitterBtn.addEventListener('click', () => {
//   selectTheme('twitter');
// });

const allBtns = [defaultBtn, facebookBtn, devmountainBtn, twitterBtn];

allBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    selectTheme(['default', 'facebook', 'devmountain', 'twitter'][i]);
  });
});
