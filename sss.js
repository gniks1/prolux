const slideshow = document.querySelector('.slideshow');
const images = ['image002.jpg', 'image003.jpg', 'image004.jpg', 'image005.jpg'];
let currentIndex = 0;

function loadSlide(index) {
  const img = document.createElement('img');
  img.src = `images/${images[index]}`;
  img.classList.add('slide');
  img.classList.add('active');
  slideshow.appendChild(img);
}

function unloadSlide() {
  const currentSlide = document.querySelector('.slideshow .active');
  currentSlide.classList.remove('active');
  currentSlide.addEventListener('transitionend', () => {
    currentSlide.remove();
  });
}

function changeSlide(index) {
  unloadSlide();
  loadSlide(index);
  updateControls(index);
  currentIndex = index;
}

function updateControls(index) {
  const buttons = document.querySelectorAll('.controls button');
  buttons[currentIndex].classList.remove('active');
  buttons[index].classList.add('active');
}

loadSlide(0);

setInterval(() => {
  const nextIndex = (currentIndex + 1) % images.length;
  changeSlide(nextIndex);
}, 5000);

const prevButton = document.createElement('button');
prevButton.textContent = '<';
prevButton.addEventListener('click', () => {
  const prevIndex = (currentIndex + images.length - 1) % images.length;
  changeSlide(prevIndex);
});

const nextButton = document.createElement('button');
nextButton.textContent = '>';
nextButton.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % images.length;
  changeSlide(nextIndex);
});

const controls = document.createElement('div');
controls.classList.add('controls');
controls.appendChild(prevButton);
controls.appendChild(nextButton);
slideshow.appendChild(controls);
