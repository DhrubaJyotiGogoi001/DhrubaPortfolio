 // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 5px 20px var(--shadow)";
            } else {
                header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.05)";
            }
        });

        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');

        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });

        // Skill bar animation
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }

        // Animate skill bars when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-category').forEach(category => {
            observer.observe(category);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // Dark Mode Toggle
        const modeToggle = document.getElementById('mode-toggle');
        const modeIcon = modeToggle.querySelector('i');
        
        // Check for saved theme preference or respect OS setting
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
            document.body.classList.add('dark-mode');
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        }
        
        modeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                modeIcon.classList.remove('fa-moon');
                modeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                modeIcon.classList.remove('fa-sun');
                modeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
        //smooth scrolling for music section
        document.querySelectorAll('a[href="#music"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });