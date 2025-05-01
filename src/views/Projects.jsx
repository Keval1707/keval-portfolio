import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with Stripe payments, product catalog, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'fullstack',
      image: '/project1.jpg',
      link: null,
      github: null,
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Kanban-style productivity app with drag-and-drop functionality and real-time updates.',
      technologies: ['React', 'Firebase', 'Material UI', 'React DnD'],
      category: 'frontend',
      image: '/project2.jpg',
      link: null,
      github: null,
      featured: true
    },
    {
      id: 3,
      title: 'RESTful API Service',
      description: 'Secure backend API with JWT authentication, rate limiting, use in Task Management App  .',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=800&auto=format&fit=crop',
      link: null,
      github: null,
      featured: false
    },
    {
      id: 4,
      title: "Keval's Portfolio",
      description: 'Responsive portfolio with animated components and dark/light theme toggle.',
      technologies: ['React', 'Tailwind CSS', 'Vite' ],
      category: 'frontend',
      image: './Portfolio.png',
      link: null,
      github: null,
      featured: true
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with 5-day forecasts and location search.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800&auto=format&fit=crop',
      link: null,
      github: null,
      featured: false
    },
    {
      id: 6,
      title: 'Authentication Microservice',
      description: 'JWT-based auth service with email verification and password reset functionality.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT'],
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
      link: null,
      github: null,
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects-page full-width-section">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Here are some of my recent works. Each project represents a unique challenge and solution.</p>
        
        <div className="project-filters">
          <button 
            className={activeFilter === 'all' ? 'active' : ''}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={activeFilter === 'frontend' ? 'active' : ''}
            onClick={() => setActiveFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={activeFilter === 'backend' ? 'active' : ''}
            onClick={() => setActiveFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={activeFilter === 'fullstack' ? 'active' : ''}
            onClick={() => setActiveFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-hover">
                {project.link && (
                  <a 
                    href={project.link} 
                    className="view-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    className="code-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;