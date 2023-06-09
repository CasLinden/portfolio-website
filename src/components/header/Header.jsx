import "/src/css/Header.css";
import stockDude from "/src/assets/stock-dude.webp";

function Header() {
  return (
    <div className="header">
      <div className="header-image-container">
        <img className="header-image" src={stockDude} alt="picture of a man working on a laptop" />
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
    </div>
  );
}

export default Header;
