import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavLogo from "../../assets/NavLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/#services", hash: true },
    { name: "RESOURCES", path: "/resources" },
    { name: "CONTACT", path: "/contact" },
  ];

  const getLinkStyle = (itemName, isActive = false) => {
    const isHovered = hoveredItem === itemName;
    const isHomeActive =
      typeof window !== "undefined" &&
      (window.location.pathname === "/" || window.location.hash === "#services");

    if (itemName === "HOME") isActive = isHomeActive;
    if (itemName === "SERVICES") isActive = false;

    return {
      ...styles.link,
      ...(isMobile ? styles.mobile.link : {}),
      color: hoveredItem
        ? isHovered
          ? "#ff5733"
          : "#064985"
        : isActive
        ? "#ff5733"
        : "#064985",
      transform: isHovered ? "translateY(-2px)" : "translateY(0)",
    };
  };

  const renderLink = (item) => {
    if (item.hash) {
      return (
        <HashLink
          key={item.name}
          smooth
          to={item.path}
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setMenuOpen(false)}
          style={getLinkStyle(item.name)}
        >
          {item.name}
        </HashLink>
      );
    }

    return (
      <NavLink
        key={item.name}
        to={item.path}
        onMouseEnter={() => setHoveredItem(item.name)}
        onMouseLeave={() => setHoveredItem(null)}
        onClick={() => setMenuOpen(false)}
        style={({ isActive }) => getLinkStyle(item.name, isActive)}
      >
        {item.name}
      </NavLink>
    );
  };

  return (
    <header style={{ ...styles.header, ...(isMobile ? styles.mobile.header : {}) }}>
      <NavLink to="/" style={styles.logoWrap} onClick={() => setMenuOpen(false)}>
        <img
          src={NavLogo}
          alt="Logo"
          style={{ ...styles.logo, ...(isMobile ? styles.mobile.logo : {}) }}
        />
      </NavLink>

      <nav style={{ ...styles.nav, ...(isMobile ? styles.mobile.nav(menuOpen) : {}) }}>
        {navItems.map(renderLink)}
      </nav>

      <button
        style={{
          ...styles.hamburger,
          ...(isMobile ? styles.mobile.hamburger : {}),
        }}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span style={styles.hamburgerInner}>
          <span
            style={{
              ...styles.line,
              transform: menuOpen ? "rotate(45deg) translate(6px, 6px)" : "none",
            }}
          />
          <span style={{ ...styles.line, opacity: menuOpen ? 0 : 1 }} />
          <span
            style={{
              ...styles.line,
              transform: menuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
            }}
          />
        </span>
      </button>
    </header>
  );
};

const styles = {
  header: {
    width: "100%",
    height: "128px",
    backgroundColor: "#f4f4f4",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 clamp(28px, 7vw, 118px)",
    boxSizing: "border-box",
    position: "sticky",
    top: 0,
    zIndex: 9999,
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    zIndex: 10001,
  },

  logo: {
    width: "178px",
    height: "76px",
    objectFit: "contain",
    display: "block",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "36px",
  },

  link: {
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    textDecoration: "none",
    lineHeight: "24px",
    letterSpacing: "0.2px",
    transition: "color 0.25s ease, transform 0.25s ease",
  },

  hamburger: {
    display: "none",
  },

  hamburgerInner: {
    width: "28px",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  line: {
    width: "100%",
    height: "2px",
    backgroundColor: "#5d5d5d",
    transition: "0.3s ease",
  },

  mobile: {
    header: {
      height: "86px",
      padding: "0 28px 0 36px",
    },

    logo: {
      width: "130px",
      height: "58px",
    },

    nav: (menuOpen) => ({
      position: "absolute",
      top: "86px",
      left: 0,
      width: "100%",
      backgroundColor: "#f4f4f4",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0",
      overflow: "hidden",
      maxHeight: menuOpen ? "360px" : "0px",
      opacity: menuOpen ? 1 : 0,
      padding: menuOpen ? "12px 0 18px" : "0",
      boxShadow: menuOpen ? "0 8px 14px rgba(0,0,0,0.12)" : "none",
      transition: "max-height 0.35s ease, opacity 0.25s ease, padding 0.3s ease",
      zIndex: 10000,
    }),

    link: {
      width: "100%",
      textAlign: "center",
      padding: "13px 0",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 600,
    },

    hamburger: {
      width: "58px",
      height: "46px",
      border: "1px solid #cfcfcf",
      borderRadius: "8px",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 10001,
    },
  },
};

export default Navbar;