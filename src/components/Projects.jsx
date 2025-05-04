import React, { useState } from 'react';
import Manila from '../assets/images/Manila.jpg';
import Pitik from '../assets/images/Pitik.jpeg';
import Portrait from '../assets/images/Portrait.jpg';
import Urban from '../assets/images/Urban.jpg';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Rizal Monument",
      description: "The Rizal Monument, located in Rizal Park (Luneta) in Manila, Philippines, is a historical landmark dedicated to Dr. José Rizal, the country's national hero. It marks the site where Rizal was executed on December 30, 1896, for his role in advocating for reforms during Spanish colonial rule. The monument features a bronze statue of Rizal holding a book, symbolizing his writings and ideas, and is set atop a granite pedestal with a plaque containing his remains. Guarded by ceremonial soldiers, the monument stands as a powerful symbol of Filipino patriotism and the struggle for independence..",
      image: Manila,
      category: "City Photography",
      galleryLink: "/manila-gallery"
    },
    {
      id: 2,
      title: "Pitik Series",
      description: "A photographer hobbyist is someone who takes photos for fun and enjoyment. They like capturing moments, people, places, or nature using a camera or even a phone. It's not their job, but they enjoy learning new skills, editing pictures, and sharing them with others. Photography is their creative way to tell stories or keep memories.",
      image: Pitik,
      category: "Pitik",
      galleryLink: "/pitik-gallery"
    },
    {
      id: 3,
      title: "Portrait",
      description: "Portraits are photos that focus on capturing a person’s face, expression, and personality. They can show emotion, style, or tell a story about who the person is. Portraits are often taken with good lighting and a simple background to highlight the subject clearly.",
      image: Portrait,
      category: "Portraiture",
      galleryLink: "/portrait-gallery"
    },
    {
      id: 4,
      title: "Urban Exploration",
      description: "Baguio is a well-known urban city in the northern Philippines, often called the Summer Capital of the Philippines because of its cool climate. Located in the mountains of Benguet, it features a mix of modern buildings and natural beauty, with pine trees, parks, and scenic views. The city is known for tourist spots like Burnham Park, Mines View, and Session Road, as well as its lively markets and local crafts. Despite its urban growth, Baguio keeps a cozy and refreshing atmosphere that attracts both locals and tourists.",
      image: Urban,
      category: "Street",
      galleryLink: "/urban-gallery"
    }
  ];

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Photography Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
          >
            <div className="image-wrapper">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
              <span className="category-badge">{project.category}</span>
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              {expandedProject === project.id ? (
                <>
                  <p className="expanded-description">{project.description}</p>
                  <div className="button-group">
                    
                    <button 
                      className="project-button secondary"
                      onClick={() => toggleExpand(project.id)}
                    >
                      Show Less
                    </button>
                  </div>
                </>
              ) : (
                <button 
                  className="project-button" 
                  onClick={() => toggleExpand(project.id)}
                >
                  View Details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;