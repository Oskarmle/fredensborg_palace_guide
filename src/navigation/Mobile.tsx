import { slide as Menu } from "react-burger-menu";
import "./mobile.css";

export default function MobileNavigation() {
  return (
    <Menu>
      <a href="#Information">Information</a>
      <a href="#Locations">Locations</a>
      <a href="#Special_Agreements">Special Agreements</a>
      <a href="#Handout and Map">Handout and Map</a>
      <a href="#Gallery">Gallery</a>
    </Menu>
  );
}
