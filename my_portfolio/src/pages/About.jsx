import "../styling/About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1>About Me</h1>

        <p className="about-intro">
          I'm <strong>Abhishek Sahukar Srinivas</strong>, an engineer with hands-on
          experience in software design, cloud, and Generative AI. I combine technical
          skill with design thinking to build intelligent, elegant solutions.
          <br />
          Over the years, I've worked across design, backend systems, web development,
          and data-driven applications gaining hands-on experience in Python, FastAPI,
          React, LLM's and GenAI and also cloud technologies.
        </p>

        {/* ===== Skills Section ===== */}
        <div className="about-section">
          <h3>🧠 Skills</h3>
          <ul>
            <li>Python Development,FastAPI, REST APIs</li>
            <li>GenAI and LLM Integration: Langchain, Langgraph, Langfuse, RAG</li>
            <li>Cloud &amp; DevOps: AWS, Docker, Render</li>
            <li>UI/UX: Figma, Canva, Streamlit</li>
          </ul>
        </div>

        {/* ===== Education Section ===== */}
        <div className="about-section">
          <h3>🎓 Education</h3>
          <p>
            MSc Applied Computer Science – SRH Hochschule Heidelberg (ongoing)
          </p>
          <p>
            B.E. in Mechanical Engineering – Visvesvaraya Technological University (2023)
          </p>
        </div>

        {/* ===== Hobbies Section ===== */}
        <div className="about-section">
          <h3>🏋️‍♂️ Hobby</h3>
          <p>Fitness</p>
        </div>
      </div>
    </section>
  );
}

export default About;