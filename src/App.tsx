import Section_1 from "./components/sections/Section_1";
import DesktopNavigation from "./navigation/Desktop";

import "./App.css";
import Location from "./components/locations/Location";

function App() {
  return (
    <div className="app">
      <div className="background">
        <DesktopNavigation />
        <div className="headline_container">
          <h1 className="headline">STORYTELLING PRIVATE GUIDED TOUR</h1>
        </div>
      </div>
      <Section_1 />
      <Location />
    </div>
  );
}

export default App;
