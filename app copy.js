import { fetchMovies } from './modules/api.js';
import { initSlider } from './modules/slider.js';
import { validateForm } from './modules/formValidation.js';
import { createMovieItem } from './modules/movie-item.js'; 



// Initialize API data
async function loadMovies() {
  const movies = await fetchMovies();
  console.log(movies);
}
loadMovies();

// Initialize Slider (ensure this is correct)
initSlider('slider');

// Form Validation
validateForm(validaeForm); // Ensure 'validaeForm' is defined correctly


    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const movieList = document.getElementById('movieList');
    const genreFilter = document.getElementById('genreFilter');
    const searchInput = document.getElementById('searchInput');
    const accordion = document.getElementById('accordion');
    const contactForm = document.getElementById('contactForm');
    const cookieNotification = document.getElementById('cookieNotification');
    const acceptCookies = document.getElementById('acceptCookies');
    const scrollTop = document.getElementById('scrollTop');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Event listener for the Accept button
    acceptCookiesButton.addEventListener('click', () => {
    cookieNotification.style.display = 'none'; // Hide the notification
    localStorage.setItem('cookiesAccepted', 'true'); // Store acceptance in localStorage
    });

    // Function to show the cookie notification if not already accepted
    function showCookieNotification() {
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieNotification.style.display = 'block'; // Show the notification
    }
    }

    // Call the function to show the notification on page load
    showCookieNotification(); 

    acceptCookiesButton.addEventListener('click', () => {
        cookieNotification.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true'); // Store cookie acceptance in localStorage
    });

    // Function to show the cookie notification if it hasn't been accepted yet
    function showCookieNotification() {
        if (!localStorage.getItem('cookiesAccepted')) {
            cookieNotification.style.display = 'block';
        }
    }

// Call the function to show the notification when the page loads
showCookieNotification();
    

    // Sample movie data (replace with API data later)
    const movies = [
        {
            title: "Movie Title 1",
            genre: "Action",
            poster: "https://via.placeholder.com/300x400/FF5733/fff?text=Movie+1",
        },
        {
            title: "Another Movie",
            genre: "Comedy",
            poster: "https://via.placeholder.com/300x400/33C1FF/fff?text=Movie+2",
        },
        // ... more movie data
    ];

    // API key, etc. (if using an API)
    const apiKey = 'YOUR_API_KEY';


    // Burger Menu
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Burger animation
        burger.children[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
        burger.children[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        burger.children[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : '';
    });

    // Display Movies
    function displayMovies(moviesToDisplay) {
        movieList.innerHTML = ''; // Clear previous results

        moviesToDisplay.forEach(movie => {
            const movieItem = createMovieItem(movie);
            movieList.appendChild(movieItem);
        });
    }

    // Filter and Search
    function filterAndSearchMovies() {
        const selectedGenre = genreFilter.value;
        const searchTerm = searchInput.value.toLowerCase();

        const filteredMovies = movies.filter(movie => {
            const genreMatch = selectedGenre === 'all' || movie.genre.toLowerCase() === selectedGenre;
            const searchMatch = movie.title.toLowerCase().includes(searchTerm);
            return genreMatch && searchMatch;
        });

        displayMovies(filteredMovies);
    }

    genreFilter.addEventListener('change', filterAndSearchMovies);
    searchInput.addEventListener('input', filterAndSearchMovies);

    // FAQ Accordion
    accordion.addEventListener('click', (e) => {
        if (e.target.classList.contains('accordion-title')) {
            const content = e.target.nextElementSibling;
            content.classList.toggle('open');
        }
    });

    // Contact Form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log('Form submitted!');
    });

    // Cookie Notification
    acceptCookies.addEventListener('click', () => {
        cookieNotification.style.display = 'none';
        // Store cookie acceptance (e.g., using localStorage)
    });

    // Scroll to Top
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior:   
    'smooth' });
    });

    // Show/Hide Password
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type',   
    type);
        togglePassword.textContent = type === 'password' ? 'Show'   
    : 'Hide';
    });

    // Initial display
    displayMovies(movies);

    function displayMovies(moviesToDisplay) {
        movieList.innerHTML = ''; // Clear previous results
      
        moviesToDisplay.forEach(movie => {
          const movieItem = createMovieItem(movie);
          movieList.appendChild(movieItem);
        });
      }
      
      // Function to filter movies based on search term
      function searchMovies() {
        const searchTerm = searchInput.value.toLowerCase();
      
        const filteredMovies = movies.filter(movie => {
          return movie.title.toLowerCase().includes(searchTerm);
        });
      
        displayMovies(filteredMovies); 
      }
      
      // Event listener for search input
      searchInput.addEventListener('input', searchMovies); 
      
      // Initial display of movies (when the page loads)
      displayMovies(movies); 
      
      // ... rest of your code ...
