const About = () => {
  const skills = [
    // Frontend Technologies
    { name: "React", level: 90, icon: "devicon-react-original colored" },
    { name: "Next.js", level: 85, icon: "devicon-nextjs-plain colored" },
    { name: "JavaScript", level: 90, icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", level: 80, icon: "devicon-typescript-plain colored" },
    { name: "Tailwind CSS", level: 85, icon: "devicon-tailwindcss-plain colored" },
    
    // Backend Technologies
    { name: "Node.js", level: 85, icon: "devicon-nodejs-plain colored" },
    { name: "Express", level: 80, icon: "devicon-express-original colored" },
    { name: "Python", level: 80, icon: "devicon-python-plain colored" },
    { name: "PHP", level: 75, icon: "devicon-php-plain colored" },
    
    // Databases
    { name: "MongoDB", level: 85, icon: "devicon-mongodb-plain colored" },
    { name: "MySQL", level: 80, icon: "devicon-mysql-plain colored" },
    { name: "PostgreSQL", level: 75, icon: "devicon-postgresql-plain colored" },
    
    // DevOps & Cloud
    { name: "AWS", level: 75, icon: "devicon-amazonwebservices-plain colored" },
    { name: "Docker", level: 80, icon: "devicon-docker-plain colored" },
    { name: "NGINX", level: 75, icon: "devicon-nginx-original colored" },
    
    // Version Control & Tools
    { name: "Git", level: 85, icon: "devicon-git-plain colored" },
    { name: "GitHub", level: 90, icon: "devicon-github-original colored" },
    { name: "VS Code", level: 95, icon: "devicon-vscode-plain colored" },
    
    // Additional Skills
    { name: "RESTful APIs", level: 85, icon: "devicon-code-plain colored" },
    { name: "GraphQL", level: 70, icon: "devicon-graphql-plain colored" },
    { name: "Jest", level: 75, icon: "devicon-jest-plain colored" }
  ];

  return (
    <section className="about-page full-width-section">
      <div className="about-container container">
        <div className="about-image">
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            <img src="/myPhoto.png" alt="Keval Satani" className="profile-image" />
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="intro">
            I'm a passionate Full Stack Developer with expertise in both
            frontend and backend technologies. I specialize in building efficient,
            scalable, and user-friendly web applications using modern JavaScript frameworks.
          </p>

          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card reveal">
                  <i className={skill.icon}></i>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-meter">
                      <div
                        className="skill-level"
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3>Professional Journey</h3>
            <div className="timeline">
              <div className="timeline-item reveal">
                <div className="timeline-date">2025 - Present</div>
                <div className="timeline-content">
                  <h4>Software Engineer at GIPL</h4>
                  <p>
                    Developing scalable web applications using React.js, Node.js, 
                    and MongoDB. Implementing RESTful APIs and optimizing application performance.
                  </p>
                </div>
              </div>

              <div className="timeline-item reveal">
                <div className="timeline-date">2024 - 2025</div>
                <div className="timeline-content">
                  <h4>Full Stack Developer at Niharika Softweb Solutions Pvt. Ltd.</h4>
                  <p>
                    Built full-stack applications using MERN stack. Managed AWS cloud deployment, 
                    CI/CD pipelines, and server maintenance for client projects.
                  </p>
                </div>
              </div>

              <div className="timeline-item reveal">
                <div className="timeline-date">2021 - 2024</div>
                <div className="timeline-content">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <p>
                    Graduated with honors from GLS University, Ahmedabad. 
                    Specialized in web development and database systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;