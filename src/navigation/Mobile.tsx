import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import "./mobile.css";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <Menu isOpen={isOpen} onStateChange={handleStateChange}>
      <h2 className="menu-title">Menu</h2>
      <a href="#information" onClick={closeMenu}>
        Information
      </a>
      <a href="#locations" onClick={closeMenu}>
        Locations
      </a>
      <a href="#special-agreements" onClick={closeMenu}>
        Special Agreements
      </a>
      <a href="#handout-and-map" onClick={closeMenu}>
        Handout and Map
      </a>
      <a href="#gallery" onClick={closeMenu}>
        Gallery
      </a>
    </Menu>
  );
}
