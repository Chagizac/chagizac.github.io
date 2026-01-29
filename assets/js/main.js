// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = navToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
  
  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
  
  // Smooth scrolling for anchor links
  initSmoothScrolling();
  
  // Scroll animations
  initScrollAnimations();
  
  // Project card hover effects
  initProjectCardEffects();
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        const navHeight = 60; // nav-height variable
        const offsetTop = targetElement.offsetTop - navHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  const animatedElements = document.querySelectorAll('.project-card, .contact-card, .about-text');
  animatedElements.forEach(el => observer.observe(el));
}

// Project card hover effects
function initProjectCardEffects() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Add visual feedback on hover
      card.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}

// Utility functions
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Enhanced scroll performance
window.addEventListener('scroll', throttle(() => {
  // Add scroll-based animations or effects here
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero-bg');
  
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
}, 16));

// Copy to clipboard functionality
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('클립보드에 복사되었습니다!');
    }).catch(() => {
      fallbackCopyToClipboard(text);
    });
  } else {
    fallbackCopyToClipboard(text);
  }
}

// Fallback copy to clipboard
function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showToast('클립보드에 복사되었습니다!');
  } catch (err) {
    console.error('클립보드 복사 실패:', err);
  }
  
  document.body.removeChild(textArea);
}

// Toast notification
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--primary);
    color: var(--bg-dark);
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 9999;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    font-weight: 600;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 100);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, duration);
}

// Page load animation
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

// Add CSS animation class dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }
  
  .animate-slide-up {
    animation: slide-up 0.8s ease-out forwards;
  }
  
  .page-loaded body {
    transition: opacity 0.3s ease;
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
document.head.appendChild(style);

// Error handling
window.addEventListener('error', (e) => {
  console.error('JavaScript error:', e.error);
});

// Handle visibility change for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, pause animations
    document.body.classList.add('page-hidden');
  } else {
    // Page is visible, resume animations
    document.body.classList.remove('page-hidden');
  }
});

// Touch device detection
function isTouchDevice() {
  return (('ontouchstart' in window) ||
          (navigator.maxTouchPoints > 0) ||
          (navigator.msMaxTouchPoints > 0));
}

// Add touch-specific optimizations
if (isTouchDevice()) {
  document.body.classList.add('touch-device');
  
  // Increase tap target sizes on touch devices
  const style = document.createElement('style');
  style.textContent = `
    .touch-device .project-card,
    .touch-device .contact-card,
    .touch-device .btn {
      min-height: 48px;
    }
    
    .touch-device .project-link {
      padding: 12px 16px;
    }
  `;
  document.head.appendChild(style);
}

// Export functions for external use if needed
window.CHAGIZACPortfolio = {
  copyToClipboard,
  showToast,
  isTouchDevice
};

console.log('CHAGIZAC 포트폴리오 로드 완료!');