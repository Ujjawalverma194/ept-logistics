import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ReachMap from "../../assets/Reach/reach-background-map.svg";
import ReachLine from "../../assets/Reach/reach-process-line.svg";
import FooterLogos from "../../assets/Reach/reach-footer-logos.svg";
import FacebookIcon from "../../assets/Reach/reach-footer-facebook.svg";
import InstaIcon from "../../assets/Reach/reach-footer-insta.svg";
import WhatsappIcon from "../../assets/Reach/reach-footer-whatsapp.svg";
import YoutubeIcon from "../../assets/Reach/reach-footer-youtube.svg";
import BlueLocation from "../../assets/Reach/blue-location.svg";
import RedLocation from "../../assets/Reach/red-location.png";

const theme = {
  blue: "#0b4f93",
  orange: "#f45124",
  bg: "#f5f5f5",
  grey: "#777777",
};

const locations = [
  { label: "USA", city: "Charleston", x: "26.5%", y: "45.5%" },
  { label: "UAE", city: "Dubai", x: "64.5%", y: "51.5%" },
  { label: "INDIA", city: "Mumbai (HQ)", x: "70.2%", y: "53.6%", active: true },
  { label: "INDIA", city: "Delhi", x: "69.1%", y: "49.7%" },
  { label: "INDIA", city: "Chennai", x: "70.9%", y: "58.4%" },
  { label: "INDIA", city: "Bangalore", x: "69.8%", y: "56.8%" },
  { label: "INDIA", city: "Hyderabad", x: "69.4%", y: "54.8%" },
  { label: "INDIA", city: "Kolkata", x: "72.8%", y: "50.8%" },
  { label: "INDIA", city: "Ahmedabad", x: "68.2%", y: "51.8%" },
  { label: "CHINA", city: "Shanghai", x: "82.1%", y: "47.8%" },
];

const offices = [
  {
    country: "INDIA",
    city: "Mumbai (HQ)",
    address: [
      "EPT Global Logistics Pvt. Ltd.",
      "102, Shivai Plaza,",
      "Marol Co-operative Ind. Estate,",
      "Marol, Andheri (E)",
      "Mumbai - 400059",
    ],
    phone: "+91-22-40155809",
    email: "info@eptgl.com",
  },
  {
    country: "USA",
    city: "Charleston",
    address: [
      "EPT Global Logistics USA LLC",
      "126 Seven Farms Dr. Suite 260,",
      "Charleston, SC 29492",
    ],
    phone: "+1-843-872-5166",
    email: "usa@eptgl.com",
  },
  {
    country: "CHINA",
    city: "Shanghai",
    address: [
      "EPT Global Logistics (Shanghai)",
      "Limited RM. No. 4, Wubao Road,",
      "Shanghai",
    ],
    phone: "+86-135-8569-6478",
    email: "china@eptgl.com",
  },
  {
    country: "UAE",
    city: "Dubai",
    address: [
      "EPT Global Logistics Cargo LLC",
      "PO Box# 30779, Warehouse # 15",
      "Dubai Investment Park 2",
      "Dubai",
    ],
    phone: "+9714-342-6699",
    email: "dubai@eptgl.com",
  },
];

const ReachUsSection = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTablet = windowWidth <= 1024;
  const isMobile = windowWidth <= 768;
  const isSmall = windowWidth <= 480;
  const isTiny = windowWidth <= 360;

  const responsive = {
  section: isMobile
    ? {
        minHeight: "auto",
        padding: "95px 0 18px",
      }
    : isTablet
    ? {
        minHeight: "1120px",
      }
    : {},

  heading: isMobile
    ? {
        position: "relative",
        top: "auto",
        left: "21px",
        fontSize: "27px",
        lineHeight: "32px",
        letterSpacing: "-1.4px",
        marginBottom: "0",
      }
    : isTablet
    ? {
        left: "7%",
        fontSize: "54px",
      }
    : {},

  line: isMobile
    ? {
        display: "block",
        position: "absolute",
        top: "116px",
        left: "141px",
        width: "103px",
        height: "auto",
      }
    : isTablet
    ? {
        top: "164px",
        left: "31%",
        width: "58%",
      }
    : {},

  pinTop: isMobile
    ? {
        display: "block",
        position: "absolute",
        top: "100px",
        right: "20px",
        width: "43px",
        height: "59px",
      }
    : isTablet
    ? {
        top: "130px",
        right: "7%",
        width: "58px",
        height: "auto",
      }
    : {},

  mapWrap: isMobile
    ? {
        position: "relative",
        top: "auto",
        left: "21px",
        width: "278px",
        height: "154px",
        marginTop: "28px",
        overflow: "hidden",
      }
    : isTablet
    ? {
        top: "250px",
        left: "3%",
        width: "94%",
      }
    : {},

  map: isMobile
    ? {
        width: "278px",
        maxWidth: "none",
      }
    : {},

  mapPin: isMobile
    ? {
        width: "8px",
        height: "12px",
      }
    : {},

  pinImage: isMobile
    ? {
        width: "8px",
        height: "12px",
      }
    : {},

  tooltip: isMobile
    ? {
        display: "none",
      }
    : {},

  offices: isMobile
    ? {
        position: "relative",
        top: "auto",
        left: "21px",
        width: "278px",
        gridTemplateColumns: "1fr",
        gap: "47px",
        marginTop: "27px",
      }
    : isTablet
    ? {
        top: "705px",
        left: "7%",
        width: "86%",
        gridTemplateColumns: "repeat(2, 1fr)",
        rowGap: "54px",
      }
    : {},

  country: isMobile
    ? {
        fontSize: "25px",
        lineHeight: "30px",
        letterSpacing: "-1px",
        marginBottom: "6px",
      }
    : {},

  city: isMobile
    ? {
        fontSize: "20px",
        lineHeight: "25px",
        marginBottom: "7px",
      }
    : {},

  address: isMobile
    ? {
        fontSize: "17px",
        lineHeight: "1.42",
      }
    : {},

  contact: isMobile
    ? {
        marginTop: "26px",
        fontSize: "14px",
        lineHeight: "1.48",
        whiteSpace: "normal",
      }
    : {},

  footer: isMobile
    ? {
        position: "relative",
        left: "21px",
        bottom: "auto",
        width: "278px",
        marginTop: "18px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }
    : isTablet
    ? {
        left: "7%",
        width: "86%",
      }
    : {},

  logos: isMobile
    ? {
        width: "278px",
        maxWidth: "278px",
        marginBottom: "22px",
      }
    : {},

  socials: isMobile
    ? {
        justifyContent: "center",
        gap: "11px",
        order: 2,
        marginBottom: "17px",
      }
    : {},

  copyright: isMobile
    ? {
        order: 3,
        textAlign: "center",
        fontSize: "18px",
        lineHeight: "25px",
        whiteSpace: "normal",
        width: "260px",
      }
    : {},

  socialLink: isMobile
    ? {
        width: "32px",
        height: "32px",
      }
    : {},

  socialIcon: isMobile
    ? {
        width: "32px",
        height: "32px",
      }
    : {},
};
  return (
    <section style={{ ...styles.section, ...responsive.section }}>
      <motion.h2
        style={{ ...styles.heading, ...responsive.heading }}
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        Reach Us
      </motion.h2>

      <motion.img
        src={ReachLine}
        alt=""
        style={{ ...styles.line, ...responsive.line }}
        initial={{ opacity: 0, x: -44 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      />

      <motion.img
        src={BlueLocation}
        alt=""
        style={{ ...styles.pinTop, ...responsive.pinTop }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <motion.div
        style={{ ...styles.mapWrap, ...responsive.mapWrap }}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img
          src={ReachMap}
          alt="World map"
          style={{ ...styles.map, ...responsive.map }}
        />

        {locations.map((location, index) => (
          <button
            key={`${location.city}-${index}`}
            type="button"
            style={{
              ...styles.mapPin,
              ...responsive.mapPin,
              left: location.x,
              top: location.y,
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(index)}
            onBlur={() => setHovered(null)}
            aria-label={`${location.city}, ${location.label}`}
          >
            <img
              src={RedLocation}
              alt=""
              style={{ ...styles.pinImage, ...responsive.pinImage }}
            />

            <AnimatePresence>
              {(hovered === index || location.active) && !isMobile && (
                <motion.div
                  style={{ ...styles.tooltip, ...responsive.tooltip }}
                  initial={{ opacity: 0, x: -8, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                >
                  <span style={styles.tooltipArrow} />
                  <span style={styles.tooltipCity}>{location.city}</span>
                  <span style={styles.tooltipCountry}> - {location.label}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </motion.div>

      <div style={{ ...styles.offices, ...responsive.offices }}>
        {offices.map((office) => (
          <div key={`${office.country}-${office.city}`} style={styles.officeCard}>
            <h3 style={{ ...styles.country, ...responsive.country }}>
              {office.country}
            </h3>

            <h4 style={{ ...styles.city, ...responsive.city }}>
              {office.city}
            </h4>

            <div style={{ ...styles.address, ...responsive.address }}>
              {office.address.map((line) => (
                <p key={line} style={styles.addressLine}>
                  {line}
                </p>
              ))}
            </div>

            <p style={{ ...styles.contact, ...responsive.contact }}>
              {office.phone}
              <br />
              {office.email}
            </p>
          </div>
        ))}
      </div>

      <footer style={{ ...styles.footer, ...responsive.footer }}>
        <img
          src={FooterLogos}
          alt=""
          style={{ ...styles.logos, ...responsive.logos }}
        />

        <p style={{ ...styles.copyright, ...responsive.copyright }}>
          Copyright © 2025 All rights reserved | Disclaimer
        </p>

        <div style={{ ...styles.socials, ...responsive.socials }}>
          <a
            href="https://www.facebook.com"
            style={{ ...styles.socialLink, ...responsive.socialLink }}
            aria-label="Facebook"
          >
            <img
              src={FacebookIcon}
              alt=""
              style={{ ...styles.socialIcon, ...responsive.socialIcon }}
            />
          </a>

          <a
            href="https://www.instagram.com"
            style={{ ...styles.socialLink, ...responsive.socialLink }}
            aria-label="Instagram"
          >
            <img
              src={InstaIcon}
              alt=""
              style={{ ...styles.socialIcon, ...responsive.socialIcon }}
            />
          </a>

          <a
            href="https://wa.me"
            style={{ ...styles.socialLink, ...responsive.socialLink }}
            aria-label="Whatsapp"
          >
            <img
              src={WhatsappIcon}
              alt=""
              style={{ ...styles.socialIcon, ...responsive.socialIcon }}
            />
          </a>

          <a
            href="https://www.youtube.com"
            style={{ ...styles.socialLink, ...responsive.socialLink }}
            aria-label="Youtube"
          >
            <img
              src={YoutubeIcon}
              alt=""
              style={{ ...styles.socialIcon, ...responsive.socialIcon }}
            />
          </a>
        </div>
      </footer>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    minHeight: "1420px",
    background: theme.bg,
    position: "relative",
    overflowX: "hidden",
    overflowY: "visible",
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  heading: {
    position: "absolute",
    top: "150px",
    left: "7.3%",
    margin: 0,
    color: theme.blue,
    fontSize: "62px",
    lineHeight: "74px",
    letterSpacing: "-2.8px",
    fontWeight: 700,
    zIndex: 5,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  line: {
    position: "absolute",
    top: "184px",
    left: "26.2%",
    width: "58.8%",
    height: "auto",
    zIndex: 4,
    pointerEvents: "none",
    userSelect: "none",
  },

  pinTop: {
    position: "absolute",
    top: "132px",
    right: "8.2%",
    width: "78px",
    height: "108px",
    objectFit: "contain",
    zIndex: 5,
    pointerEvents: "none",
    userSelect: "none",
  },

  mapWrap: {
    position: "absolute",
    top: "286px",
    left: "7.3%",
    width: "85.5%",
    height: "432px",
    zIndex: 2,
    overflow: "visible",
  },

  map: {
    display: "block",
    width: "100%",
    height: "auto",
    opacity: 1,
    pointerEvents: "none",
    userSelect: "none",
  },

  mapPin: {
    position: "absolute",
    width: "22px",
    height: "31px",
    border: "none",
    background: "transparent",
    padding: 0,
    transform: "translate(-50%, -100%)",
    cursor: "pointer",
    zIndex: 40,
  },

  pinImage: {
    display: "block",
    width: "22px",
    height: "31px",
    objectFit: "contain",
    pointerEvents: "none",
    userSelect: "none",
  },

  tooltip: {
    position: "absolute",
    left: "32px",
    top: "-8px",
    display: "inline-flex",
    alignItems: "center",
    background: "#ffffff",
    padding: "9px 15px 10px",
    borderRadius: "4px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.16)",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    zIndex: 9999,
  },

  tooltipArrow: {
    position: "absolute",
    left: "-6px",
    top: "50%",
    width: "13px",
    height: "13px",
    background: "#ffffff",
    transform: "translateY(-50%) rotate(45deg)",
    boxShadow: "-3px 3px 7px rgba(0, 0, 0, 0.06)",
  },

  tooltipCity: {
    color: theme.orange,
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
    position: "relative",
    zIndex: 2,
  },

  tooltipCountry: {
    color: theme.blue,
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
    position: "relative",
    zIndex: 2,
  },

  offices: {
    position: "absolute",
    top: "1000px",
    left: "7.3%",
    width: "85.5%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    columnGap: "54px",
    zIndex: 4,
  },

  officeCard: {
    minWidth: 0,
  },

  country: {
    margin: "0 0 8px",
    color: theme.blue,
    fontSize: "28px",
    lineHeight: "34px",
    letterSpacing: "-1.1px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  city: {
    margin: "0 0 12px",
    color: theme.orange,
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: 500,
    fontFamily: "system-ui",
  },

  address: {
    color: theme.grey,
    fontSize: "18px",
    lineHeight: "1.38",
    fontFamily: "system-ui",
    fontWeight: 400,
  },

  addressLine: {
    margin: "0 0 2px",
    fontFamily: "system-ui",
  },

  contact: {
    margin: "32px 0 0",
    color: theme.grey,
    fontSize: "17px",
    lineHeight: "1.4",
    fontFamily: "system-ui",
    fontWeight: 400,
    whiteSpace: "nowrap",
  },

  footer: {
    position: "absolute",
    left: "7.3%",
    bottom: "34px",
    width: "85.5%",
    display: "grid",
    gridTemplateColumns: "39% 1fr auto",
    alignItems: "center",
    columnGap: "28px",
    zIndex: 5,
  },

  logos: {
    display: "block",
    width: "585px",
    maxWidth: "100%",
    height: "auto",
  },

  copyright: {
    margin: 0,
    color: theme.blue,
    fontSize: "17px",
    lineHeight: "24px",
    fontFamily: "system-ui",
    textAlign: "center",
    whiteSpace: "nowrap",
  },

  socials: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "34px",
    height: "34px",
  },

  socialIcon: {
    width: "34px",
    height: "34px",
    display: "block",
  },
};

export default ReachUsSection;