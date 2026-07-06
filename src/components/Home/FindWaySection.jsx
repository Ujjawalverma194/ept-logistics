import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ShipIcon from "../../assets/journey/svgexport-5.svg";
import TruckIcon from "../../assets/journey/svgexport-6.svg";
import CraneIcon from "../../assets/journey/svgexport-7.svg";
import WarehouseIcon from "../../assets/journey/svgexport-8.svg";
import CargoPlane from "../../assets/journey/cargoplane.svg";
import DownArrow from "../../assets/journey/svgexport-9.svg";
import MobileRouteImage from "../../assets/journey/mobileviewprocesslineimage.svg";
import { TextWrap } from "lucide-react";

const theme = {
  blue: "#0b4f93",
  orange: "#f45124",
  white: "#ffffff",
  text: "#252b33",
};

const DESKTOP_ROUTE_IMAGE = "https://www.eptgl.com/asset/images/challenges-walcome.svg";

const FindWaySection = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const responsive = {
    section: isMobile
      ? {
          minHeight: "1640px",
          // marginTop: "-465px", // Visually merges components continuous journey style
          paddingTop: "0px",
          background: "transparent",
         
        }
      : {},

    routeImage: isMobile
      ? {
          left: "20px",
          top: "0px",
          width: "90%",
          maxWidth: "none",
          zIndex: 1,
          
         
        }
      : {},

    ship: isMobile
      ? {
          top: "412px", 
          left: "50%",
          transform: "translateX(-50%)",
          width: "135px",
          
        }
      : {},

    truck: isMobile
      ? {
          top: "712px",
          left: "44%",
          width: "210px",
        }
      : {},

    crane: isMobile
      ? {
          top: "490px",
          left: "33.5%",
          width: "235px",
        }
      : {},

    cargoPlane: isMobile
      ? {
          top: "968px",
          left: "33.5%",
          width: "112px",
        }
      : {},

    downArrow: isMobile
      ? {
          top: "634px",
          left: "16%",
          width: "18px",
        }
      : {},

    warehouse: isMobile
      ? {
          top: "1180px",
          left: "70%",
          width: "74px",
        }
      : {},

    orangeText: isMobile
      ? {
          position: "absolute",
          top: "820px",
          left: "0px",
          width: "100%",
          padding: "0 24px",
          fontSize: "15px",
          lineHeight: "1.32",
          letterSpacing: "-0.1px",
          boxSizing: "border-box",
          textAlign: "center",
          
        }
      : {},

    content: isMobile
      ? {
          position: "absolute",
          top: "1242px",
          left: "0px",
          width: "100%",
          padding: "0 24px",
          boxSizing: "border-box",
        }
      : {},

    heading: isMobile
      ? {
          fontSize: "44px",
          lineHeight: "0.9",
          letterSpacing: "-1.5px",
          margin: "0 0 16px",
        }
      : {},

    description: isMobile
      ? {
          fontSize: "15px",
          lineHeight: "1.52",
          margin: "0 0 24px",
        }
      : {},
  };

  return (
    <section style={{ ...styles.section, ...responsive.section }}>
      <motion.img
        src={isMobile ? MobileRouteImage : DESKTOP_ROUTE_IMAGE}
        alt=""
        style={{ ...styles.routeImage, ...responsive.routeImage }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <motion.img
        src={ShipIcon}
        alt=""
        style={{ ...styles.ship, ...responsive.ship }}
        animate={
          isMobile
            ? {
                y: [0, 14, 0],
              }
            : {
                x: [0, 155, 220, 220, 0],
                opacity: [1, 1, 1, 0, 0],
              }
        }
        transition={{
          duration: isMobile ? 4.0 : 4.2,
          times: isMobile ? undefined : [0, 0.72, 0.86, 0.87, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={TruckIcon}
        alt=""
        style={{ ...styles.truck, ...responsive.truck }}
        animate={
          isMobile
            ? {
                x: [0, -20, 0],
              }
            : {
                x: [0, -80, -150, -150, 0],
                opacity: [1, 1, 1, 0, 0],
              }
        }
        transition={{
          duration: isMobile ? 3.5 : 3.4,
          times: isMobile ? undefined : [0, 0.62, 0.78, 0.79, 1],
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.img
        src={CraneIcon}
        alt=""
        style={{ ...styles.crane, ...responsive.crane }}
        animate={
          isMobile
            ? {
                y: [0, 10, 0],
              }
            : {
                x: [0, 80, 150, 150, 0],
                opacity: [1, 1, 1, 0, 0],
              }
        }
        transition={{
          duration: isMobile ? 3.8 : 3.4,
          times: isMobile ? undefined : [0, 0.62, 0.78, 0.79, 1],
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.img
        src={CargoPlane}
        alt=""
        style={{ ...styles.cargoPlane, ...responsive.cargoPlane }}
        animate={{
          // x: isMobile ? [0, 8, 0] : [0, 18, 36, 18, 0],
          // y: isMobile ? [0, -6, 0] : [0, -10, -20, -10, 0],
          // rotate: isMobile ? [0, -2, 0] : [0, -3, -6, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />

      <motion.img
        src={DownArrow}
        alt=""
        style={{ ...styles.downArrow, ...responsive.downArrow }}
        animate={isMobile ? { y: [0, 10, 0] } : {}}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={WarehouseIcon}
        alt=""
        style={{ ...styles.warehouse, ...responsive.warehouse }}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
      />

      <motion.p
        style={{ ...styles.orangeText, ...responsive.orangeText }}
        initial={{ opacity: 0, x: isMobile ? -10 : -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Whether it's overcoming geographical barriers,
        {!isMobile && <br />}
        navigating cross-border deals, or meeting tight
         {!isMobile && <br />}
        deadlines, we've always been driven by the
         {!isMobile && <br />}
        determination to deliver.
      </motion.p>

      <motion.div
        style={{ ...styles.content, ...responsive.content }}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
      >
        <h2 style={{ ...styles.heading, ...responsive.heading }}>
          We will
          <br />
          find a way
        </h2>

        <p style={{ ...styles.description, ...responsive.description }}>
          We are more than a logistics company—we are your partner in progress.
          We understand that every package, pallet, and project represents
          something bigger: your reputation, your commitment, your passion.
          That's why we promise that no matter the challenge, we will find a way
          to deliver what's important to you.
        </p>

        <motion.button
          style={styles.button}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Know More
        </motion.button>
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    minHeight: "1430px",
    background: theme.white,
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  routeImage: {
    position: "absolute",
    top: "0px",
    left: "22.2%",
    width: "67.5%",
    maxWidth: "1120px",
    height: "auto",
    zIndex: 1,
    pointerEvents: "none",
    userSelect: "none",
  },
  ship: {
    position: "absolute",
    top: "185px",
    left: "20.2%",
    width: "310px",
    height: "auto",
    zIndex: 4,
    pointerEvents: "none",
    userSelect: "none",
  },
  truck: {
    position: "absolute",
    top: "50px",
    left: "68.6%",
    width: "310px",
    height: "auto",
    zIndex: 4,
    pointerEvents: "none",
    userSelect: "none",
  },
  crane: {
    position: "absolute",
    top: "160px",
    left: "48.7%",
    width: "310px",
    height: "auto",
    zIndex: 3,
    pointerEvents: "none",
    userSelect: "none",
  },
  cargoPlane: {
    position: "absolute",
    top: "720px",
    left: "53.4%",
    width: "128px",
    height: "auto",
    zIndex: 4,
    pointerEvents: "none",
    userSelect: "none",
  },
  downArrow: {
    position: "absolute",
    top: "522px",
    right: "7.2%",
    width: "38px",
    height: "auto",
    zIndex: 4,
    pointerEvents: "none",
    userSelect: "none",
  },
  warehouse: {
    position: "absolute",
    top: "875px",
    left: "72.6%",
    width: "150px",
    height: "auto",
    zIndex: 4,
    pointerEvents: "none",
    userSelect: "none",
  },
  orangeText: {
    position: "absolute",
    top: "700px",
    left: "6.55%",
    margin: 0,
    color: theme.orange,
    fontSize: "25px",
    lineHeight: "1.17",
    letterSpacing: "-0.35px",
    fontWeight: 700,
    fontFamily: "Arial, sans-serif",
    zIndex: 3,
  },
  content: {
    position: "absolute",
    top: "964px",
    left: "32.8%",
    width: "520px",
    zIndex: 3,
  },
  heading: {
    margin: "0 0 20px",
    color: theme.blue,
    fontSize: "clamp(58px, 5.2vw, 86px)",
    lineHeight: "0.84",
    letterSpacing: "-4px",
    fontWeight: 900,
    fontFamily: "'Arial Narrow', 'Roboto Condensed', Arial, sans-serif",
  },
  description: {
    margin: "0 0 22px",
    color: theme.text,
    fontSize: "20px",
    lineHeight: "1.43",
    fontWeight: 400,
    fontFamily: "Arial, sans-serif",
  },
  button: {
    width: "145px",
    height: "44px",
    border: "none",
    borderRadius: "25px",
    background: theme.blue,
    color: theme.white,
    fontSize: "16px",
    fontWeight: 900,
    fontFamily: "Arial, sans-serif",
    cursor: "pointer",
  },
};

export default FindWaySection;