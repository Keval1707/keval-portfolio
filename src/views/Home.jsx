import { useEffect, useState } from "react";

const Home = () => {
  const titleTexts = [
    "Full Stack Developer",
    "Software Developer",
    "Web Developer",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const heroText = document.querySelector(".hero-text");
    if (heroText) {
      heroText.classList.add("animate");
    }

    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titleTexts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
  });

  const targetValues = {
    projects: 15,
    clients: 7,
    years: 2,
    satisfaction: 100,
  };

  const duration = 2000; // Animation duration in ms
  const interval = 50; // Update interval in ms

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const animateCounts = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);

      setCounts({
        projects: Math.floor(progress * targetValues.projects),
        clients: Math.floor(progress * targetValues.clients),
        years: Math.floor(progress * targetValues.years),
        satisfaction: Math.floor(progress * targetValues.satisfaction),
      });

      if (now < endTime) {
        setTimeout(animateCounts, interval);
      } else {
        // Ensure final values are set exactly
        setCounts({
          projects: targetValues.projects,
          clients: targetValues.clients,
          years: targetValues.years,
          satisfaction: targetValues.satisfaction,
        });
      }
    };

    // Start animation when component mounts
    const timer = setTimeout(animateCounts, 500); // Small delay before starting

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-page">
      {/* Hero Section */}
      <div className="hero-section full-width-section">
        <div className="hero-content">
          <h1 className="hero-text">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Keval Satani</span>
            <span className="title">
              <span className="title-text" key={titleTexts[currentTitleIndex]}>
                {titleTexts[currentTitleIndex]}
              </span>{" "}
            </span>
          </h1>
          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-snippet">
            <pre>
              {`// My passion for coding
function createSolutions() {
  return {
    cleanCode: true,
    innovative: true,
    userFriendly: true
  };
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Skills Preview Section */}
      <div className="skills-preview">
        <h2>Technologies I Work With</h2>
        <div className="skills-grid">
          {[
            { name: "React", icon: "devicon-react-original" },
            { name: "Next.js", icon: "devicon-nextjs-plain" },
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "PHP", icon: "devicon-php-plain" },
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
            { name: "SQL", icon: "devicon-mysql-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "Git", icon: "devicon-git-plain" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="skill-item"
              data-tooltip={skill.name}
            >
              <i className={`${skill.icon} colored`}></i>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="featured-projects full-width-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-highlight">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "Full-featured online store with payment integration and admin dashboard.",
                technologies: ["React", "Node.js", "MongoDB"],
                image: "/project1.jpg",
              },
              {
                title: "Task Management App",
                description:
                  "Productivity application with drag-and-drop functionality.",
                technologies: ["Angular", "Node.js", "MongoDB", "Material UI"],
                image: "/project2.jpg",
              },
            ].map((project) => (
              <div key={project.title} className="project-highlight-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <a href="/projects" className="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <a href="/projects" className="btn btn-secondary">
              View All Projects
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials full-width-section">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonial-grid">
            {[
              {
                quote:
                  "Keval delivered exceptional work on our project. His attention to detail and problem-solving skills are remarkable.",
                name: "Dr. Vijay Gadhavi",
                position: "CEO, Niharika Softweb Solutions Pvt Ltd",
                image:
                  "https://niharikasofttech.com/wp-content/uploads/2020/03/logo-290x300.png",
              },
              {
                quote:
                  "Working with Keval was a pleasure. He understood our requirements perfectly and delivered ahead of schedule.",
                name: "Shri Sheeshpal Rajput",
                position: "Chairman, Gujarat State Yog Board",
                image:
                  "https://gsyb.in/storage/cms/siteSettings/8QerCqBJrNsHK9quJcmYPqob47QPni0nRu3Vk5pD.png",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="testimonial-card">
                <div className="quote">
                  <i className="fas fa-quote-left"></i>
                  <p>{testimonial.quote}</p>
                </div>
                <div className="author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section full-width-section">
        <div className="container">
          <div className="stats-grid ">
            <div className="stat-item">
              <h3>{counts.projects}+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>{counts.clients}+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>{counts.years}+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>{counts.satisfaction}%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section full-width-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>
            I'm available for freelance work and would love to discuss your
            project ideas.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="/projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
