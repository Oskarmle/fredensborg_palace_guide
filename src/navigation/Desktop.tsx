import "./mobile.css";

export default function DesktopNavigation() {
  const handleInfoClick = () => {
    document
      .getElementById("information")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const handleLocationsClick = () => {
    document
      .getElementById("locations")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const handleAgreementClick = () => {
    document
      .getElementById("special-agreements")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const handleDownloadClick = () => {
    document
      .getElementById("handout-and-map")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const handleGalleryClick = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navBox">
      <ul className="navList">
        <li className="listItem">
          <button about="" className="listButton" onClick={handleInfoClick}>
            Information
          </button>
        </li>
        <li className="listItem">
          <button
            about=""
            className="listButton"
            onClick={handleLocationsClick}
          >
            Locations
          </button>
        </li>
        <li className="listItem">
          <button
            about=""
            className="listButton"
            onClick={handleAgreementClick}
          >
            Special Agreements
          </button>
        </li>
        <li className="listItem">
          <button about="" className="listButton" onClick={handleDownloadClick}>
            Handout and map
          </button>
        </li>
        <li className="listItem">
          <button about="" className="listButton" onClick={handleGalleryClick}>
            Gallery
          </button>
        </li>
      </ul>
    </nav>
  );
}
