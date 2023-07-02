const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-33.33%)'; /* Adjust the percentage based on the number of images */
});

nextButton.addEventListener('click', () => {
  carousel.style.transform = 'translateX(33.33%)'; /* Adjust the percentage based on the number of images */
});

carousel.addEventListener('transitionend', () => {
  if (carousel.style.transform === 'translateX(-33.33%)') {
    carousel.appendChild(carousel.firstElementChild);
  } else if (carousel.style.transform === 'translateX(33.33%)') {
    carousel.prepend(carousel.lastElementChild);
  }

  carousel.style.transition = 'none';
  carousel.style.transform = 'translateX(0)';

  setTimeout(() => {
    carousel.style.transition = 'transform 0.3s ease-in-out';
  });
});
