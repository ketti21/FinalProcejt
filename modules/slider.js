
  // Example of how your slider.js could look

  let currentIndex = 0;

  function moveSlide(direction) {
      const slides = document.querySelectorAll('.slider img');
      const totalSlides = slides.length;
      currentIndex += direction;
  
      if (currentIndex < 0) {
          currentIndex = totalSlides - 1; // Go to last slide
      } else if (currentIndex >= totalSlides) {
          currentIndex = 0; // Go to first slide
      }
  
      updateSliderPosition();
  }
  
  function updateSliderPosition() {
      const slider = document.querySelector('.slider');
      const slides = document.querySelectorAll('.slider img');
      const slideWidth = slides[0].clientWidth; // Get width of one slide
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  
  // Initialize the slider with a given selector (e.g., 'slider')
  export function initSlider(sliderSelector) {
      const slider = document.querySelector(`#${sliderSelector}`);
      const prevButton = slider.querySelector('.prev');
      const nextButton = slider.querySelector('.next');
  
      // Attach event listeners for buttons to move the slide
      prevButton.addEventListener('click', () => moveSlide(-1));
      nextButton.addEventListener('click', () => moveSlide(1));
  
      // Adjust the slider for the current window size
      window.addEventListener('resize', updateSliderPosition);
  }

