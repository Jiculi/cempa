console.log('reviews.js loaded');
const reviewsSlider = document.querySelector('.reviews');
const reviewBtns = document.querySelectorAll('.review-btn');
console.log(reviewBtns);
const reviews = [ ... document.querySelectorAll('.review')];
const indicators = [ ... document.querySelectorAll('.indicator')];

let isMoving;
let currentIndex=1;

function showActiveIndicator(){
  indicators.forEach(indicator => indicator.classList.remove('active'));
  let activeIndicator;
  if (currentIndex === 0 || currentIndex === reviews.length - 2) {
    activeIndicator = indicators.length - 1;
  } else if (currentIndex === 1 || currentIndex === reviews.length - 1) {
      activeIndicator = 0;
  } else {
      activeIndicator = currentIndex - 1;
  } 
  indicators[activeIndicator].classList.add('active');
}




function moveSlider(){
  reviewsSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
  showActiveIndicator();
}

function handleReviewBtnClick(e) {
  if(isMoving) {return};
  isMoving = true;
  e.currentTarget.id === 'next' ? currentIndex++ : currentIndex--;
  moveSlider();
}

function handleIndicatorBtnClick(e) {
  if(isMoving) {return};
  isMoving = true;
  currentIndex = indicators.indexOf(e.target) + 1;
  moveSlider();
}



// Event listeners
reviewBtns.forEach(btn => {
  btn.addEventListener('click', handleReviewBtnClick);
})

indicators.forEach(ind => {
  ind.addEventListener('click', handleIndicatorBtnClick);
})

reviewsSlider.addEventListener('transitionend', () => {
  console.log('fired');
  isMoving = false;
  if (currentIndex === 0) {
    currentIndex = reviews.length - 2;
    reviewsSlider.style.transitionDuration = '1ms';
    return moveSlider();
  }
  if (currentIndex === reviews.length - 1) {
    currentIndex = 1;
    reviewsSlider.style.transitionDuration = '1ms';
    return moveSlider();
  }
  reviewsSlider.style.transitionDuration = '300ms';
})