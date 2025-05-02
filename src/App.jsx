import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './controllers/AppRouter';
import './Style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.reveal, .skill-card, .project-card, .info-card, .timeline-item');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animate');
    }
  });
};

let isScrolling;
window.addEventListener('scroll', () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(animateOnScroll, 66); // Runs at ~15fps
}, false);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .skill-card, .project-card, .info-card, .timeline-item').forEach(el => {
  observer.observe(el);
});

// Initialize scroll animation
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);