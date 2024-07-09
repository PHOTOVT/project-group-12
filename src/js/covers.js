document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
      });
    });
  
    const element = document.querySelector('.marquee');
      observer.observe(element);
  });