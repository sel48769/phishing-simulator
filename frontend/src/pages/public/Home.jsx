import './Landing.css';
import logo from '../../assets/logo.webp';     // Add your logo image here
import banner from '../../assets/banner.webp'; // Add your banner image here

export default function Home() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo-section">
          <img src={logo} alt="Phishing Simulator Logo" className="logo" />
          <span className="title">PHISHING SIMULATOR</span>
        </div>
        <div className="nav-buttons">
          <button>CONTACT</button>
          <button>ABOUT</button>
          <button>LOG IN</button>
        </div>
      </nav>

      <div className="banner-section">
        <img src={banner} alt="Cyber Banner" className="banner-img" />
        <div className="overlay-text">
          Empower your team with real-world phishing simulations and in-depth analytics.
          Turn vulnerabilities into cybersecurity strength.
        </div>
      </div>

      <div className="features-section">
        <div className="feature-box">
          <h2>TRAIN</h2>
          <p className="hover-text">
            Phishing awareness starts with education. The Phishing Simulator provides
            integrated training modules that educate users on phishing tactics, social
            engineering techniques, and cybersecurity best practices.
          </p>
        </div>
        <div className="feature-box">
          <h2>PROTECT</h2>
          <p className="hover-text">
            Build a human firewall. By continuously training and testing users, Phishing
            Simulator helps organizations strengthen their overall security posture.
          </p>
        </div>
        <div className="feature-box">
          <h2>TEST</h2>
          <p className="hover-text">
            Simulate real-world phishing attacks. With Phishing Simulator, administrators
            can create and send realistic phishing emails to employees or users, tracking
            their responses.
          </p>
        </div>
      </div>
    </div>
  );
}
