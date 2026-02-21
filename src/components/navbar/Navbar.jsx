import React, { useRef } from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_nuwan.svg";
import NavItem from "./NavItem";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Menu Open"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Menu Close"
          className="nav-mob-close"
        />
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
