import "../styling/Resume.css";


function Resume() {
  return (
    <div className="resume">
      <h1>📄 Resume</h1>
      <p>Click below to download my latest resume:</p>
      <a
        href="/assets/resume.pdf"
        download="Abhishek_Sahukar_Resume.pdf"
        className="download-btn"
      >
        📥 Download Resume
      </a>
    </div>
  );
}

export default Resume;
