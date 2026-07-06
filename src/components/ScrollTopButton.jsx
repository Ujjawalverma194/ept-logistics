import React, { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollTop}
      style={styles.button}
    >
      ↑
    </button>
  );
};

const styles = {
  button: {
    position: "fixed",
    right: "28px",
    bottom: "28px",

    width: "58px",
    height: "58px",

    borderRadius: "50%",
    border: "1.5px solid #f45124",

    background: "#fff",
    color: "#0b4f93",

    fontSize: "34px",
    cursor: "pointer",

    boxShadow: "0 4px 14px rgba(0,0,0,.12)",

    zIndex: 9999,

    transition: ".3s",
  },
};

export default ScrollTopButton;