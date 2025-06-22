document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  }); 
});


// Sticky Navigation
const navbar = document.querySelector('.header');
const heroSection = document.querySelector('.landing');
const heroHeight = heroSection.offsetHeight;

window.addEventListener('scroll', function() {
	if (window.scrollY > heroHeight * 0.8) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});


// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		const targetId = this.getAttribute('href');
		const targetElement = document.querySelector(targetId);

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: 'smooth'
			});
		}
	});
});


// Highlight navbar link on scroll
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
    
	window.addEventListener('scroll', function() {
	let current = '';

	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;

		if (pageYOffset >= (sectionTop - 300)) {
			current = section.getAttribute('id');
		}
	});

	  navLinks.forEach(link => {
		  link.classList.remove('active');
		  if (link.getAttribute('href').includes(current)) {
				link.classList.add('active');
		  }
	  });
  });
});


//Project Filtering
document.addEventListener('DOMContentLoaded', function() {
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
    
  filterButtons.forEach(button => {
		button.addEventListener('click', function() {
				filterButtons.forEach(btn => btn.classList.remove('active'));
				this.classList.add('active');

				const filterValue = this.getAttribute('data-filter');

				portfolioItems.forEach(item => {
						if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
								item.classList.remove('hidden');
						} else {
								item.classList.add('hidden');
						}
				});
		});
  });
});


// Display current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();