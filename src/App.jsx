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
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animate');
    }
  });
};

// Initialize scroll animation
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);