const navToggle = document.querySelector('.nav-label');
const wrapper = document.querySelector('.wrapper');
const recentPosts = document.querySelector('.recent-posts');
const recentProjects = document.querySelector('.recent-projects');
const links = document.querySelector('.nav-links');
const darkLightBtn = document.getElementById('dark-light-btn');
const body = document.querySelector('body');
const lightModeImg = document.querySelector('.dk-lt-img');
const githubLogo = document.getElementById("github-logo");
const linkedinLogo = document.getElementById('linkedin-logo');
const goodreadsLogo = document.getElementById('goodreads-logo');
const xLogo = document.getElementById('x-logo');
wrapper.style.opacity = 1;

navToggle.addEventListener('click', () => {
  document.querySelector('.nav-label').classList.toggle('label-changed');
  toggleLinks(links);
  if (wrapper.style.opacity == 1) {
    wrapper.style.opacity = 0.7;
    wrapper.style.filter = 'blur(1px)';
  } else {
    wrapper.style.opacity = 1;
    wrapper.style.filter = 'blur(0)';
  }
});
// navToggle.addEventListener("click", () => {
//     if (recentPosts.classList.contains("slide-off-screen")) {
//         recentPosts.classList.remove("slide-off-screen");
//         recentPosts.classList.add("slide-on-screen");
//     } else {
//         recentPosts.classList.remove("slide-on-screen");
//         recentPosts.classList.add("slide-off-screen");
//     }
// })

function toggleSlide(className) {
  if (className.classList.contains('slide-off-screen')) {
    className.classList.remove('slide-off-screen');
    className.classList.add('slide-on-screen');
  } else {
    className.classList.remove('slide-on-screen');
    className.classList.add('slide-off-screen');
  }
}

function toggleLinks(className) {
  if (className.classList.contains('slide-links-in')) {
    className.classList.remove('slide-links-in');
    className.classList.add('slide-links-out');
  } else {
    className.classList.remove('slide-links-out');
    className.classList.add('slide-links-in');
  }
}

const changeAttribute = function(variable, img) {
  variable.setAttribute('src', img);
}

// Function to apply the correct theme based on the user's preference
function applyThemeBasedOnPreference() {
  // Check if the user prefers dark mode
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Get current theme from local storage (if any)
  const currentTheme = localStorage.getItem("theme");

  // If there's no saved theme in localStorage, use the system preference
  if (currentTheme === "light" || (!prefersDarkScheme && !currentTheme)) {
      // Apply light mode
      document.body.classList.add("light-mode");
      changeAttribute(lightModeImg, "images/dark-mode.png");
      changeAttribute(githubLogo, "images/b-github-logo.png");
      changeAttribute(linkedinLogo, "images/b-linkedin-logo.png");
      changeAttribute(goodreadsLogo, "images/b-goodreads-logo.png");
      changeAttribute(xLogo, "images/b-x-logo.png");
  } else {
      // Apply dark mode
      document.body.classList.remove("light-mode");
      changeAttribute(lightModeImg, "images/light-mode.png");
      changeAttribute(githubLogo, "images/w-github-logo.png");
      changeAttribute(linkedinLogo, "images/w-linkedin-logo.png");
      changeAttribute(goodreadsLogo, "images/w-goodreads-logo.png");
      changeAttribute(xLogo, "images/w-x-logo.png");
  }
}


// Call the function when the page loads
applyThemeBasedOnPreference();

// Event listener for the toggle button
darkLightBtn.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
      // User is switching to dark mode
      body.classList.remove('light-mode');
      localStorage.setItem("theme", "dark");
      changeAttribute(lightModeImg, "images/light-mode.png");
      changeAttribute(githubLogo, "images/w-github-logo.png");
      changeAttribute(linkedinLogo, "images/w-linkedin-logo.png");
      changeAttribute(goodreadsLogo, "images/w-goodreads-logo.png");
      changeAttribute(xLogo, "images/w-x-logo.png");
  } else {
      // User is switching to light mode
      body.classList.add('light-mode');
      localStorage.setItem("theme", "light");
      changeAttribute(lightModeImg, "images/dark-mode.png");
      changeAttribute(githubLogo, "images/b-github-logo.png");
      changeAttribute(linkedinLogo, "images/b-linkedin-logo.png");
      changeAttribute(goodreadsLogo, "images/b-goodreads-logo.png");
      changeAttribute(xLogo, "images/b-x-logo.png");
  }
});

// Select all the post cards
const postCards = document.querySelectorAll('.post-card');
const projectCards = document.querySelectorAll('.project-card');

// Check if the device supports touch
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  // Loop through each post card and add an event listener for touch events
  postCards.forEach((card) => {
    card.addEventListener('click', function () {
      this.classList.toggle('flipped');
    });
  });

  // Loop through each project card and add an event listener for touch events
  projectCards.forEach((card) => {
    card.addEventListener('click', function () {
      this.classList.toggle('flipped');
    });
  });
}

// Prevent hover effect on touch devices
document.querySelectorAll('.post-card-link, .project-card-link').forEach(card => {
  card.addEventListener('click', function(e) {
    const postCard = this.querySelector('.post-card');
    const projectCard = this.querySelector('.project-card');
    
    // Flip the post card on click if it exists
    if (postCard && !postCard.classList.contains('flipped')) {
      e.preventDefault();
      postCard.classList.add('flipped');
    }

    // Flip the project card on click if it exists
    if (projectCard && !projectCard.classList.contains('flipped')) {
      e.preventDefault();
      projectCard.classList.add('flipped');
    }
  });
});

