import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Projects from '../views/Projects';
import Contact from '../views/Contest';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';

const AppRouter = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRouter;