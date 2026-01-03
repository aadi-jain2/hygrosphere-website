// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Model component interaction
const modelComponents = document.querySelectorAll('.model-component');
const techComponents = {
    'condensation': document.getElementById('condensation-detail'),
    'storage': document.getElementById('storage-detail'),
    'filtration': document.getElementById('other-detail')
};

// Highlight tech details when clicking on model components
modelComponents.forEach(component => {
    component.addEventListener('click', function() {
        const componentType = this.getAttribute('data-component');
        const targetSection = techComponents[componentType];
        
        if (targetSection) {
            // Remove highlight from all sections
            Object.values(techComponents).forEach(comp => {
                if (comp) {
                    comp.style.border = 'none';
                    comp.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
                }
            });
            
            // Highlight the selected section
            targetSection.style.border = '3px solid var(--primary-blue)';
            targetSection.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.3)';
            
            // Scroll to the technology section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Table responsive handling
const comparisonTable = document.querySelector('.comparison-table');
if (comparisonTable) {
    // Add horizontal scroll indicator on mobile
    if (window.innerWidth <= 768) {
        comparisonTable.parentElement.style.position = 'relative';
    }
}

// Add active state to navigation links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Handle image loading errors with placeholder
function handleImageError(img, name) {
    img.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.textContent = name;
    placeholder.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, #e0f2fe 0%, #bfdbfe 100%);color:#2563eb;font-weight:600;font-size:1.2rem;border-radius:50%;';
    img.parentElement.appendChild(placeholder);
    
    // Try alternative extensions
    const baseName = name.toLowerCase();
    const extensions = ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG'];
    let currentExt = 0;
    
    function tryNextExtension() {
        if (currentExt < extensions.length) {
            const newSrc = `images/${baseName}.${extensions[currentExt]}`;
            const testImg = new Image();
            testImg.onload = function() {
                img.src = newSrc;
                img.style.display = 'block';
                placeholder.remove();
            };
            testImg.onerror = function() {
                currentExt++;
                tryNextExtension();
            };
            testImg.src = newSrc;
        }
    }
    
    tryNextExtension();
}

