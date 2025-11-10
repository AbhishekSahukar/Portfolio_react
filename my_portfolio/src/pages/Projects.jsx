import { useState } from "react";
import projectsData from "../data/projects.json";
import "../styling/Projects.css";

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const projectsToShow = projectsData.slice(0, visibleCount);
  const hasMore = visibleCount < projectsData.length;

  return (
    <div className="projects">
      <h1>🚀 Projects</h1>
      <div className="project-grid">
        {projectsToShow.map((p, index) => {
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
                  <div className="tech-list fade-in">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
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

      <button
        className={`load-more-btn ${!hasMore ? "inactive" : ""}`}
        onClick={hasMore ? showMore : undefined}
        disabled={!hasMore}
      >
        {hasMore ? "Show more projects" : "All projects loaded"}
      </button>
    </div>
  );
}

export default Projects;
