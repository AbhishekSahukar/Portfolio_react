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
I’m an Engineer with a passion for building modern, efficient, and user-focused applications.  
I enjoy turning ideas into functional products through clean design, structured logic, and attention to detail.  
Currently, I’m working on projects that combine automation, intelligent systems, and thoughtful design to solve real-world problems.
        </p>
        <p>🌍 Based in Bengaluru, India</p>
      </div>
    </div>
  );
}

export default Home;