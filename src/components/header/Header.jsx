import "/src/css/Header.css";
import { useState } from "react";
import AnimatedGreeting from "./AnimatedGreeting";
import portrait480 from "/src/assets/portrait-cas-480px.jpg";
import portrait700 from "/src/assets/portrait-cas-700px.jpg";
import portrait1200 from "/src/assets/portrait-cas-1200px.jpg";

function Header() {
const [headerImageLoaded, setHeaderImageLoaded] = useState(false)

  return (
    <div className="header">
      <div className="header-image-container">
        <img
          className="header-image"
          onLoad={() => setHeaderImageLoaded(true)}
          src={portrait480}
          srcSet={`
          ${portrait480} 480w,
          ${portrait700} 700w,
          ${portrait1200} 1200w
          `}
          sizes="(max-width: 480px) 480px,
          (max-width: 700px) 700px,
          1200px"
          alt="portrait picture of cas in the park"
        />
      </div>
        <div className="hi-im-cas">
          <AnimatedGreeting startAnimation={headerImageLoaded}></AnimatedGreeting>
        </div>
          <div className="about-me-section">
            {/* <h2>About me</h2> */}
            <div className="about-me-text-card">
              <p>
               I&apos;m always learning something new. These days it&apos;s web development. The snapshots below tell a story about my learning journey. Have a look at what I&apos;ve been building!
              </p>
            </div>
          </div>
      {/* <LinkBox></LinkBox> */}
    </div>
  );
}

export default Header;
