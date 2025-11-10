import "../styling/Contact.css";

function Contact() {
  return (
    <section className="contact-page">
    <div className="contact-container">
      <h2>📩 Contact Me</h2>
      <p className="contact-intro">
        If you’d like to get in touch, feel free to reach out via any of the channels below.<br />
        I’d love to connect and collaborate!
      </p>

      <div className="contact-list">
        <div className="contact-item">
          <span className="icon">📧</span>
          <a href="mailto:Sahukarabhi.10@gmail.com">Sahukarabhi.10@gmail.com</a>
        </div>

        <div className="contact-item">
          <span className="icon">📞</span>
          <a href="tel:+917259248986">+91 7259248986</a>
        </div>

        <div className="contact-item">
          <span className="icon">💼</span>
          <a
            href="https://linkedin.com/in/abhishek-ss01"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/abhishek-ss01
          </a>
        </div>

        <div className="contact-item">
          <span className="icon">🐙</span>
          <a
            href="https://github.com/AbhishekSahukar"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/AbhishekSahukar
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Contact;
