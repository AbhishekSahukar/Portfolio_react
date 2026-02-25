import { useState } from "react";
import projectsData from "../data/projects.json";
import "../styling/Projects.css";

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="projects">
      <h1>🚀 Deployed AI Projects</h1>

      <div className="project-grid">
        {projectsData.map((p, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={p.title}
              className={`project-card ${isExpanded ? "expanded" : ""}`}
            >
              <div className="project-content">
                <h2>{p.title}</h2>

                <div className="description-container">
                  <p className="description">
                    {isExpanded ? p.fullDesc : p.shortDesc}
                  </p>
                </div>

                {isExpanded && (
                  <>
                    <div className="tech-list fade-in">
                      {p.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>

                    <div className="live-btn-wrapper fade-in">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-btn"
                      >
                        🚀 View Live Deployment
                      </a>
                    </div>
                  </>
                )}
              </div>

              <div className="see-more-wrapper">
                <button
                  className="see-more-btn"
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? "See less" : "See more"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
