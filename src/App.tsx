import Section_1 from "./components/sections/Section_1";
import DesktopNavigation from "./navigation/Desktop";
import Section_2 from "./components/sections/Section_2";
import Location from "./components/locations/Location";

import "./App.css";
import Footer from "./components/footer/Footer";

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
      <Section_2 />
      <Footer />
    </div>
  );
}

export default App;
