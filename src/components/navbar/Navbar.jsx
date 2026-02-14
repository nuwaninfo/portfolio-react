import React from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_nuwan.svg";
import NavItem from "./NavItem";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-menu">
        <NavItem
          label="Home"
          active={menu === "home"}
          onClick={() => setMenu("home")}
        />

        <NavItem
          label="About Me"
          active={menu === "about"}
          onClick={() => setMenu("about")}
        />

        <NavItem
          label="Services"
          active={menu === "services"}
          onClick={() => setMenu("services")}
        />

        <NavItem
          label="Portfolio"
          active={menu === "portfolio"}
          onClick={() => setMenu("portfolio")}
        />

        <NavItem
          label="Contact"
          active={menu === "contact"}
          onClick={() => setMenu("contact")}
        />
      </ul>

      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
