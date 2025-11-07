import profile from "/assets/profile.jpg";
import "../styling/Home.css";

function Home() {
  return (
    <div className="home-viewport">
      <div className="hero">
        <img src={profile} alt="Profile" />
        <h1>👋 Hello, I’m</h1>
        <h2>Abhishek Sahukar Srinivas</h2>
        <p>
          A highly motivated and ambitious individual with knowledge and
          experience in software design, development, and cloud. Proven ability
          to lead by example, consistently hit targets, and organize time efficiently.
        </p>
        <p>🌍 Based in Bengaluru, India</p>
      </div>
    </div>
  );
}

export default Home;
