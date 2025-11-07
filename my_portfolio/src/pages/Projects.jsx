import "../styling/Projects.css";


function Projects() {
  const projects = [
    {
      title: "MetaTableAI – LLM-Powered Table Extractor",
      desc: "Built a parser that extracts key parameters from complex PDF tables using LangGraph + OpenRouter APIs.",
      tech: ["Python", "LangGraph", "OpenRouter", "DeepSeek Chat v3"],
    },
    {
      title: "RAG-based Personal AI Chatbot",
      desc: "FastAPI backend + Mistral 7B + FAISS vector search for contextual responses.",
      tech: ["FastAPI", "Docker", "Azure", "Mistral 7B"],
    },
    {
      title: "Todolist Web App",
      desc: "CRUD-based task manager with Flask and PostgreSQL, featuring clean UI and automated tests.",
      tech: ["Flask", "PostgreSQL", "Pytest"],
    },
  ];

  return (
    <div className="projects">
      <h1>🚀 Projects</h1>
      <div className="project-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <div className="tech-list">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
