import "/src/css/Header.css";
import portrait480 from "/src/assets/portrait-cas-480px.jpg";
import portrait700 from "/src/assets/portrait-cas-700px.jpg";
import portrait1200 from "/src/assets/portrait-cas-1200px.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header-image-container">
        <img
          className="header-image"
          // src={portrait480}
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
        <h1>Cas Linden</h1>
      </div>
      <div className="about-me-section">
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquet auctor eros nec molestie. Maecenas malesuada venenatis libero,
          a auctor tellus tincidunt ut. Curabitur id convallis nulla. Nulla ac
          purus auctor, tincidunt risus eget, gravida mi. Nulla facilisi. Aenean
          id ullamcorper lectus.
        </p>
      </div>
      {/* <LinkBox></LinkBox> */}
    </div>
  );
}

export default Header;

