import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeCompass from "../../assets/journey/homecompass.svg";
import PlaneImage from "../../assets/journey/plane.svg"
const theme = {
   blue: "#0b4f93",
  orange: "#f45124",
  white: "#ffffff",
  light: "#f7f7f7",
};

const HomeHero = () => {
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
    hero: isMobile
      ? {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 0px 0px",
          minHeight: "auto",
          background: theme.white,
          overflow: "visible",
        }
      : {},

    left: isMobile
      ? {
          width: "100%",
          height: "auto",
          display: "block",
          paddingTop: "48px",
          paddingLeft: "44px",
          position: "relative",
          boxSizing: "border-box",
        }
      : {},

    orangeLine: isMobile
      ? {
          display: "none", // Built straight into mobileviewprocesslineimage.svg layout
        }
      : {},

    title: isMobile
      ? {

          fontSize: "42px",
          lineHeight: "1.02",
          letterSpacing: "-1px",
          fontWeight: 800,
          color: theme.blue,
          fontFamily: "'Roboto Condensed', Arial, sans-serif",
          margin: 0,
        }
      : {},

    span: isMobile
      ? {
          paddingLeft: "0px",
          display: "block",
        }
      : {},

    center: isMobile
      ? {
          width: "100%",
          height: "auto",
          paddingBottom: "0px",
          justifyContent: "flex-end",
          marginTop: "-65px",
          paddingRight: "55px",
          position: "relative",
          zIndex: 2,
        }
      : {},

    skyIcon: isMobile
      ? {
          width: "105px",
          height: "55px",
        }
      : {},

    cloud: isMobile
      ? {
          fontSize: "44px",
          top: "94px",
          right: "0px",
        }
      : {},

    plane: isMobile
      ? {
          fontSize: "36px",
          bottom: "4px",
          left: "-70px",
          top:"94px"
        }
      : {},

    trackingBoxWrap: isMobile
      ? { 
        position:"absolute",
        top:"150px",
        left:"30px",
          width: "70%",
          maxWidth: "calc(100% - 32px)",
          margin: "165px auto 0px auto",
          zIndex: 5,
          padding: "0px",
          // marginRight:"40px"
        }
      : {},

    tabs: isMobile
      ? {
          height: "42px",
        }
      : {},

    trackTab: isMobile
      ? {
          width: "105px",
          height: "42px",
          fontSize: "14px",
          borderTopLeftRadius: "10px",
        }
      : {},

    loginTab: isMobile
      ? {
          width: "105px",
          height: "42px",
          fontSize: "14px",
          marginLeft: "-22px",
        }
      : {},

    trackingBox: isMobile
      ? {
          height: "auto",
          padding: "30px 10px 28px 10px",
          borderRadius: "0px 16px 16px 16px",
          flexDirection: "column",
          alignItems: "stretch",
          boxSizing: "border-box",
        }
      : {},

    boxContent: isMobile
      ? {
          padding: "0px",
        }
      : {},

    boxTitle: isMobile
      ? {
          fontSize: "20px",
          lineHeight: "1.1",
          letterSpacing: "-0.5px",
          textAlign: "center",
          margin: "0 0 24px",
        }
      : {},

    input: isMobile
      ? {
          width: "80%",
          height: "40px",
          fontSize: "13px",
          padding: "0 16px",
          textAlign: "center",
          marginBottom: "18px",
          marginLeft:"10px"
        }
      : {},

    trackButton: isMobile
      ? {
          width: "120px",
          height: "42px",
          fontSize: "15px",
        }
      : {},
  };

  return (
    <section style={{ ...styles.hero, ...responsive.hero }}>
      <div style={{ ...styles.left, ...responsive.left }}>
        <motion.div
          style={{ ...styles.orangeLine, ...responsive.orangeLine }}
          initial={{ height: 0 }}
          animate={{ height: 318 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          style={{ ...styles.title, ...responsive.title }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Challenges
          <br />
          <span style={{ ...styles.span, ...responsive.span }}>welcome</span>
        </motion.h1>
      </div>

      <div style={{ ...styles.center, ...responsive.center }}>
        <motion.div
          style={{ ...styles.skyIcon, ...responsive.skyIcon }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div style={{ ...styles.cloud, ...responsive.cloud }}><img
            src={PlaneImage}
            class="img-fluid rounded-top"
            alt=""
          />
          </div>
          
        </motion.div>
      </div>

      <motion.div
        style={{ ...styles.trackingBoxWrap, ...responsive.trackingBoxWrap }}
        initial={{ opacity: 0, x: isMobile ? 0 : 45 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div style={{ ...styles.tabs, ...responsive.tabs }}>
          <button style={{ ...styles.trackTab, ...responsive.trackTab }}>TRACK</button>
          <button style={{ ...styles.loginTab, ...responsive.loginTab }}>LOGIN</button>
        </div>

        <div style={{ ...styles.trackingBox, ...responsive.trackingBox }}>
          <div style={{ ...styles.boxContent, ...responsive.boxContent }}>
            <h2 style={{ ...styles.boxTitle, ...responsive.boxTitle }}>
              TRACK YOUR CARGO
              <br />
              WITH ONE CLICK
            </h2>

            <input
              style={{ ...styles.input, ...responsive.input }}
              placeholder="MBL No/MAWB No/HBL No/HAWB No"
            />

            <div style={isMobile ? styles.btnContainerMobile : {}}>
              <motion.button
                style={{ ...styles.trackButton, ...responsive.trackButton }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                TRACK
              </motion.button>
            </div>
          </div>

          {!isMobile && (
            <div style={styles.compass}>
              <img src={HomeCompass} alt="" style={{ width: "100%", height: "auto" }} />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  span: {
    paddingLeft: "77px",
  },
  hero: {
    width: "100%",
    minHeight: "470px",
    background: "white",
    display: "grid",
    gridTemplateColumns: "42% 20% 38%",
    alignItems: "end",
    position: "relative",
    overflow: "hidden",
    padding: "0 7.3vw 22px 10.4vw",
    boxSizing: "border-box",
  },
  left: {
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
  },
  orangeLine: {
    position: "absolute",
    top: "-50px",
    left: "179px",
    width: "16px",
    height: "272px",
    background: theme.orange,
  },
  title: {
    color: theme.blue,
    fontSize: "96px",
    lineHeight: "0.82",
    letterSpacing: "-4px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
    fontStyle: "normal",
    
  },
  center: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "105px",
  },
  skyIcon: {
    position: "relative",
    width: "180px",
    height: "100px",
    color: theme.blue,
  },
  cloud: {
    position: "absolute",
    top: "-8px",
    right: "0",
    fontSize: "78px",
    lineHeight: 1,
    color: theme.blue,
    transform: "scaleX(1.3)",
  },
  plane: {
    position: "absolute",
    bottom: "10px",
    left: "12px",
    fontSize: "62px",
    color: theme.blue,
    transform: "rotate(-18deg)",
  },
  trackingBoxWrap: {
    alignSelf: "center",
    justifySelf: "end",
    width: "540px",
    maxWidth: "100%",
    marginTop: "48px",
  },
  tabs: {
    height: "54px",
    display: "flex",
    alignItems: "flex-end",
  },
  trackTab: {
    width: "168px",
    height: "54px",
    border: "none",
    background: theme.orange,
    color: theme.white,
    fontSize: "21px",
    fontWeight: 900,
    fontFamily: "system-ui, sans-serif",
    borderTopLeftRadius: "14px",
    clipPath: "polygon(0 0, 76% 0, 100% 100%, 0 100%)",
    cursor: "pointer",
  },
  loginTab: {
    width: "168px",
    height: "54px",
    border: "none",
    background: theme.blue,
    color: theme.white,
    fontSize: "21px",
    fontWeight: 900,
    fontFamily: "system-ui, sans-serif",
    clipPath: "polygon(0 0, 76% 0, 100% 100%, 20% 100%)",
    marginLeft: "-34px",
    cursor: "pointer",
  },
  trackingBox: {
    width: "100%",
    height: "305px",
    background: theme.orange,
    borderRadius: "0 14px 18px 18px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  boxContent: {
    paddingLeft: "30px",
    width: "100%",
    boxSizing: "border-box",
    zIndex: 2,
  },
  boxTitle: {
    margin: "0 0 30px",
    color: theme.white,
    fontSize: "28px",
    lineHeight: "1.18",
    letterSpacing: "-1px",
    fontWeight: 900,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },
  input: {
    width: "calc(100% - 60px)",
    height: "48px",
    borderRadius: "28px",
    border: "1px solid #d9d9d9",
    background: theme.white,
    outline: "none",
    padding: "0 28px",
    boxSizing: "border-box",
    fontSize: "16px",
    fontWeight: 700,
    color: "#333",
    fontFamily: "Arial, sans-serif",
    marginBottom: "18px",
  },
  trackButton: {
    width: "122px",
    height: "50px",
    borderRadius: "28px",
    border: "none",
    background: theme.blue,
    color: theme.white,
    fontSize: "17px",
    fontWeight: 900,
    fontFamily: "Arial, sans-serif",
    cursor: "pointer",
  },
  btnContainerMobile: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  compass: {
    position: "absolute",
    right: "30px",
    top: "22px",
    width: "160px",
    opacity: 0.15,
    pointerEvents: "none",
  },
};

export default HomeHero;