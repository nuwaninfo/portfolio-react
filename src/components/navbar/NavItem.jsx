// NavItem.jsx
import React from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavItem = ({ label, active, onClick }) => {
  return (
    <li>
      <AnchorLink
        className="anchor-link"
        offset={label !== "Home" ? 50 : 0}
        href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <p onClick={onClick}>{label}</p>
      </AnchorLink>

      {active && <img src={underline} alt="Underline" className="underline" />}
    </li>
  );
};

export default NavItem;
