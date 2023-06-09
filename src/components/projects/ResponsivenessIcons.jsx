import smartphone from "/src/assets/smartphone1.svg";
import monitor from "/src/assets/monitor.svg"

function ResponsivenessIcons({hasMobileVersion}) {
  console.log(hasMobileVersion)
  return (
      <div className="responsiveness-icons">
        <div className="monitor-icon-container">
          <img className="monitor-icon" src={monitor} alt="a monitor belonging to a desktop" />
        </div>
        {hasMobileVersion ? (
          <div className="mobile-icon-container">
            <img
              className="mobile-icon"
              src={smartphone}
              alt="a smartphone in a hand"
            />
          </div>
        ) : null}
      </div>
  );
}

export default ResponsivenessIcons;
