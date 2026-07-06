import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import VisionIcon from "../../assets/AboutHero/vision.svg";
import VisionLine from "../../assets/AboutHero/our-vision-line.svg";

const theme = {
  blue: "#0a4e8f",
  orange: "#ff5733",
  grey: "#797979",
  white: "#ffffff",
};

const values = [
  {
    title: "Simple",
    text: "We streamline logistics to make the complex easy ensuring clarity and efficiency in everything we do.",
  },
  {
    title: "Responsive",
    text: "We are attuned to the needs of our clients, providing swift, tailored solutions that ensure seamless and timely execution.",
  },
  {
    title: "Dynamic",
    text: "We thrive on adaptability, embracing change with agility and innovation to stay ahead in the ever-evolving logistics landscape.",
  },
  {
    title: "Responsible",
    text: "We approach every task with integrity and accountability, standing by our commitments to deliver reliable, ethical and responsible solutions.",
  },
];

const AboutHeroSection = () => {
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

  const responsive = {
    section: isMobile
      ? {
          minHeight: "auto",
          padding: "86px 0 44px",
        }
      : isTablet
      ? {
          minHeight: "720px",
        }
      : {},

    visionText: isMobile
      ? {
          position: "relative",
          top: "auto",
          left: "auto",
          width: "278px",
          margin: "0 auto",
        }
      : isTablet
      ? {
          top: "185px",
          left: "36%",
          width: "440px",
        }
      : {},

    title: isMobile
      ? {
          fontSize: "40px",
          lineHeight: "42px",
          letterSpacing: "-1.8px",
        }
      : isTablet
      ? {
          fontSize: "62px",
          lineHeight: "58px",
        }
      : {},

    desc: isMobile
      ? {
          fontSize: "24px",
          lineHeight: "28px",
          maxWidth: "278px",
        }
      : isTablet
      ? {
          maxWidth: "430px",
        }
      : {},

    icon: isMobile
      ? {
          position: "relative",
          top: "auto",
          right: "auto",
          width: "126px",
          margin: "58px auto 0",
        }
      : isTablet
      ? {
          top: "185px",
          right: "8%",
          width: "160px",
        }
      : {},

    line: isMobile
      ? {
          display: "none",
        }
      : isTablet
      ? {
          top: "390px",
          left: "7.5%",
          width: "72%",
        }
      : {},

    valuesWrap: isMobile
      ? {
          position: "relative",
          top: "auto",
          left: "auto",
          width: "278px",
          margin: "46px auto 0",
        }
      : isTablet
      ? {
          top: "500px",
          left: "7.5%",
          width: "85%",
        }
      : {},

    grid: isMobile
      ? {
          gridTemplateColumns: "1fr",
          rowGap: "46px",
        }
      : isTablet
      ? {
          columnGap: "70px",
        }
      : {},

    valueHeading: isMobile
      ? {
          fontSize: "27px",
          lineHeight: "34px",
          marginBottom: "18px",
        }
      : {},

    valueTitle: isMobile
      ? {
          fontSize: "24px",
          lineHeight: "30px",
          marginBottom: "10px",
        }
      : {},

    valueText: isMobile
      ? {
          fontSize: "24px",
          lineHeight: "36px",
        }
      : {},
  };

  return (
    <section style={{ ...styles.section, ...responsive.section }}>
      <motion.div
        style={{ ...styles.visionText, ...responsive.visionText }}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h1 style={{ ...styles.title, ...responsive.title }}>Our Vision</h1>

        <p style={{ ...styles.desc, ...responsive.desc }}>
          Deliver seamless logistics solutions worldwide, where every challenge
          is met with determination, and we find a way to ensure excellence
          every time.
        </p>
      </motion.div>

      <motion.img
        src={VisionIcon}
        alt=""
        style={{ ...styles.icon, ...responsive.icon }}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />

      <motion.img
        src={VisionLine}
        alt=""
        style={{ ...styles.line, ...responsive.line }}
        initial={{ opacity: 0, x: -48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      />

      <motion.div
        style={{ ...styles.valuesWrap, ...responsive.valuesWrap }}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <h2 style={{ ...styles.valueHeading, ...responsive.valueHeading }}>
          Our Value
        </h2>

        <div style={{ ...styles.grid, ...responsive.grid }}>
          {values.map((item) => (
            <div key={item.title} style={styles.valueCard}>
              <h3 style={{ ...styles.valueTitle, ...responsive.valueTitle }}>
                {item.title}
              </h3>

              <p style={{ ...styles.valueText, ...responsive.valueText }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    minHeight: "1060px",
    background: theme.white,
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  visionText: {
    position: "absolute",
    top: "235px",
    left: "40.8%",
    width: "570px",
    zIndex: 3,
  },

  title: {
    margin: 0,
    color: theme.blue,
    fontSize: "80px",
    lineHeight: "70px",
    letterSpacing: "-4px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  desc: {
    margin: "12px 0 0",
    color: theme.orange,
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 600,
    maxWidth: "560px",
    fontFamily: "system-ui",
  },

  icon: {
    position: "absolute",
    top: "218px",
    right: "7.2%",
    width: "188px",
    height: "auto",
    display: "block",
    zIndex: 2,
  },

  line: {
    position: "absolute",
    left: "7.5%",
    top: "418px",
    width: "72.5%",
    height: "auto",
    display: "block",
    pointerEvents: "none",
    userSelect: "none",
    zIndex: 1,
  },

  valuesWrap: {
    position: "absolute",
    top: "535px",
    left: "7.5%",
    width: "85%",
    zIndex: 3,
  },

  valueHeading: {
    margin: "0 0 28px",
    color: theme.orange,
    fontSize: "40px",
    lineHeight: "48px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "110px",
    rowGap: "66px",
  },

  valueCard: {
    minWidth: 0,
  },

  valueTitle: {
    margin: "0 0 12px",
    color: theme.blue,
    fontSize: "32px",
    lineHeight: "38px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  valueText: {
    margin: 0,
    color: theme.grey,
    fontSize: "24px",
    lineHeight: "36px",
    fontWeight: 400,
    fontFamily: "system-ui",
  },
};

export default AboutHeroSection;