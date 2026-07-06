import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DigitalProcessDesktop from "../../assets/digital/digital-process-line.svg";
import DigitalProcessMobile from "../../assets/digital/digital-process.svg";
import CompassIcon from "../../assets/digital/compass.svg";

const theme = {
  blue: "#0b4f93",
  bg: "#f5f5f5",
  text: "#2d2d2d",
};

const DigitalPowerSection = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTablet = windowWidth <= 1024;
  const isMobile = windowWidth <= 768;
  const isSmall = windowWidth <= 480;

  const responsive = {
    section: isMobile
      ? {
          minHeight: isSmall ? "890px" : "930px",
        }
      : isTablet
      ? {
          minHeight: "880px",
        }
      : {},

    label: isMobile
      ? {
          top: isSmall ? "48px" : "58px",
          left: isSmall ? "22px" : "7%",
          fontSize: isSmall ? "28px" : "38px",
          lineHeight: "1.05",
          letterSpacing: "-1.4px",
        }
      : isTablet
      ? {
          top: "120px",
          left: "7%",
          fontSize: "46px",
        }
      : {},

    line: isMobile
      ? {
          top: isSmall ? "78px" : "96px",
          left: isSmall ? "34px" : "46px",
          width: isSmall ? "222px" : "300px",
        }
      : isTablet
      ? {
          top: "145px",
          left: "5.2%",
          width: "440px",
        }
      : {},

    compass: isMobile
      ? {
          top: isSmall ? "250px" : "300px",
          right: isSmall ? "16px" : "42px",
          width: isSmall ? "145px" : "180px",
        }
      : isTablet
      ? {
          top: "245px",
          right: "8%",
          width: "220px",
        }
      : {},

    content: isMobile
      ? {
          top: isSmall ? "408px" : "485px",
          left: isSmall ? "22px" : "7%",
          width: isSmall ? "276px" : "86%",
        }
      : isTablet
      ? {
          top: "430px",
          left: "28%",
          width: "66%",
        }
      : {},

    heading: isMobile
      ? {
          fontSize: isSmall ? "34px" : "46px",
          lineHeight: isSmall ? "44px" : "58px",
          letterSpacing: "-1.8px",
          marginBottom: isSmall ? "30px" : "38px",
          paddingRight: "0px",
        }
      : isTablet
      ? {
          fontSize: "58px",
          lineHeight: "68px",
        }
      : {},

    span: isMobile
      ? {
          marginLeft: "0px",
        }
      : isTablet
      ? {
          marginLeft: "36px",
        }
      : {},

    paragraphWrap: isMobile
      ? {
          marginLeft: "0px",
          width: "100%",
        }
      : isTablet
      ? {
          marginLeft: "6%",
          width: "86%",
        }
      : {},

    para: isMobile
      ? {
          fontSize: isSmall ? "19px" : "20px",
          lineHeight: "1.55",
          marginBottom: "20px",
        }
      : {},
  };

  return (
    <section style={{ ...styles.section, ...responsive.section }}>
      <motion.h2
        style={{ ...styles.label, ...responsive.label }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        Digital Power
      </motion.h2>

      <motion.img
        src={isMobile ? DigitalProcessMobile : DigitalProcessDesktop}
        alt=""
        style={{ ...styles.line, ...responsive.line }}
        initial={{ opacity: 0, x: -42 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      />

      <motion.img
        src={CompassIcon}
        alt=""
        style={{ ...styles.compass, ...responsive.compass }}
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
      />

      <motion.div
        style={{ ...styles.content, ...responsive.content }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 style={{ ...styles.heading, ...responsive.heading }}>
          Finding a smarter way
          <br />
          <span style={{ ...styles.span, ...responsive.span }}>
            through technology
          </span>
        </h2>

        <div style={{ ...styles.paragraphWrap, ...responsive.paragraphWrap }}>
          <p style={{ ...styles.para, ...responsive.para }}>
            At EPT Global Logistics, we continuously upgrade our technology
            solutions to enhance efficiency, improve transparency, and elevate
            the client experience. Our deep integration with platforms like Zoho
            and other API-driven solutions allows us to streamline operations,
            optimize real-time tracking, and deliver seamless logistics
            solutions.
          </p>

          <p style={{ ...styles.para, ...responsive.para }}>
            This commitment to digital innovation ensures that we stay ahead in
            providing robust and reliable services, making logistics smarter and
            more efficient for our clients.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    minHeight: "1015px",
    background: theme.bg,
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  label: {
    position: "absolute",
    top: "158px",
    left: "7.3%",
    margin: 0,
    color: theme.blue,
    fontSize: "58px",
    lineHeight: "70px",
    letterSpacing: "-2.7px",
    fontWeight: 700,
    zIndex: 5,
  },

  line: {
    position: "absolute",
    top: "190px",
    left: "6%",
    width: "520px",
    height: "auto",
    zIndex: 2,
    pointerEvents: "none",
    userSelect: "none",
  },

  compass: {
    position: "absolute",
    top: "128px",
    right: "5.4%",
    width: "300px",
    height: "auto",
    zIndex: 3,
    pointerEvents: "none",
    userSelect: "none",
  },

  content: {
    position: "absolute",
    top: "432px",
    left: "32.9%",
    width: "58%",
    zIndex: 4,
  },

  heading: {
    margin: "0 0 58px",
    paddingRight: "40px",
    color: theme.blue,
    fontSize: "82px",
    lineHeight: "91px",
    letterSpacing: "-4.8px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  span: {
    marginLeft: "70px",
  },

  paragraphWrap: {
    marginLeft: "18.2%",
    width: "72%",
    fontFamily: "system-ui",
  },

  para: {
    margin: "0 0 22px",
    color: theme.text,
    fontSize: "20px",
    lineHeight: "1.5",
    fontWeight: 400,
  },
};

export default DigitalPowerSection;