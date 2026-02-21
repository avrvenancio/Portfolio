import React, { useState } from 'react';

interface HomeProps {
  title: string;
  subtitle: string;
}

const featuredProjects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    imageUrl: 'https://example.com/image1.jpg'
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    imageUrl: 'https://example.com/image2.jpg'
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
    imageUrl: 'https://example.com/image3.jpg'
  }
];

const Home: React.FC<HomeProps> = ({ title, subtitle }) => {
  const [projects, setProjects] = useState(featuredProjects);

  return (
    <div>
      <section className="hero">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </section>
      <section className="featured-work">
        <h3>Featured Work</h3>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <img src={project.imageUrl} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="capabilities">
        <h3>Capabilities</h3>
        <p>List your capabilities here...</p>
      </section>
    </div>
  );
};

export default Home;