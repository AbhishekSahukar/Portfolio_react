import "../styling/About.css";


function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        I'm <strong>Abhishek Sahukar Srinivas</strong>, an engineer with hands-on experience in
        software design, cloud, and Generative AI. I combine technical skill with design thinking
        to build intelligent, elegant solutions.
      </p>

      <h3>🧠 Specialties</h3>
      <ul>
        <li>Python Development, LangGraph, FastAPI, REST APIs</li>
        <li>LLM Integrations (OpenRouter, DeepSeek, Mistral)</li>
        <li>Cloud & DevOps: Azure, AWS, Docker</li>
        <li>UI/UX: Figma, Canva, Streamlit</li>
      </ul>

      <h3>🎓 Education</h3>
      <p>
        B.E. in Mechanical Engineering – Visvesvaraya Technological University (2023)
      </p>

      <h3>🏋️ Hobbies</h3>
      <p>Fitness, reading philosophy, and experimenting with new AI tools.</p>
    </div>
  );
}

export default About;