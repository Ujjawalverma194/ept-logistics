import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import UpperLine from "../../assets/Resources/upper-liner.svg";
import IndiaFlag from "../../assets/Resources/india.png";
import UsaFlag from "../../assets/Resources/usa.png";
import BottomLine from "../../assets/Resources/bottam-liner.svg";

import FacebookIcon from "../../assets/Reach/reach-footer-facebook.svg";
import InstaIcon from "../../assets/Reach/reach-footer-insta.svg";
import WhatsappIcon from "../../assets/Reach/reach-footer-whatsapp.svg";
import YoutubeIcon from "../../assets/Reach/reach-footer-youtube.svg";

const theme = {
  blue: "#0a4e8f",
  orange: "#ff5733",
  grey: "#797979",
  lightGrey: "#dddddd",
  black: "#212529",
  white: "#ffffff",
};

const ResourcesSection = () => {
  const [openKey, setOpenKey] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const sx = (base, responsive) =>
    isMobile ? { ...base, ...responsive } : base;

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const indiaAccordions = [
    { title: "E-KYC", body: "ekyc" },
    { title: "Information", body: "information" },
    { title: "Export", body: "export" },
    { title: "Import", body: "import" },
    {
      title: "Shipping Line Import Destuffing Bond Formats",
      body: "shipping",
    },
  ];

  const usaAccordions = [{ title: "EPT USA", body: "usa" }];

  const renderBody = (type) => {
    if (type === "ekyc") {
      return (
        <>
          <h3 style={sx(styles.bodyHeading, styles.mobile.bodyHeading)}>
            E-KYC
          </h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Fill KYC</li>
          </ul>

          <h3 style={sx(styles.bodyHeading, styles.mobile.bodyHeading)}>
            CHA Authority Letter
          </h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Format CHA Authority Letter</li>
          </ul>
        </>
      );
    }

    if (type === "information") {
      return (
        <ul style={styles.ul}>
          <li style={styles.li}>Incoterms 2020</li>
          <li style={styles.li}>FFFAI Standard Trading Conditions</li>
          <li style={styles.li}>Sea Container Specifications</li>
          <li style={styles.li}>Aircargo Container Specifications</li>
        </ul>
      );
    }

    if (type === "export") {
      return (
        <ul style={styles.ul}>
          <li style={styles.li}>Documents for First time Export</li>
          <li style={styles.li}>List of documents required for Export</li>
          <li style={styles.li}>Export Invoice (Format)</li>
          <li style={styles.li}>Packing List (Format)</li>
          <li style={styles.li}>Shipper&apos;s Letter of Instructions</li>
          <li style={styles.li}>
            Request letter for GR Waiver (Free Trade Sample)
          </li>
          <li style={styles.li}>
            Request letter for GR Waiver (Repair & Return)
          </li>
          <li style={styles.li}>AD Code & DBK Registration</li>
          <li style={styles.li}>Export Value Declaration</li>
          <li style={styles.li}>Drawback declaration</li>
        </ul>
      );
    }

    if (type === "import") {
      return (
        <ul style={styles.ul}>
          <li style={styles.li}>List of Documents required for Import</li>
          <li style={styles.li}>Advance Authorisation Bond</li>
          <li style={styles.li}>Bank Guarantee Format</li>
          <li style={styles.li}>Triple Duty Bond</li>
          <li style={styles.li}>
            High Seas Sale Bond with Sell & Purchase letter
          </li>
        </ul>
      );
    }

    if (type === "shipping") {
      const rows = [
        ["CMA CGM", "Factory LOI, E-DO-LOI, Checklist for Import DO"],
        ["COSCO", "Bond Format"],
        ["Emirates", "DO Check List, Bond"],
        ["Hapag", "Bond Format"],
        ["KMTC", "Bond Format"],
        ["MSC", "Annual Bond"],
        ["One Line", "Bond Format"],
        ["OOCL", "Bond Format, CHA Authority Letter"],
        ["Sea Bridge", "Bond Format"],
        [
          "Star Shipping (ZIM)",
          "CHA Authority Letter, Bank Verification Letter, Bond Format",
        ],
        ["YML", "Bond Format"],
      ];

      return (
        <div style={sx(styles.tableWrap, styles.mobile.tableWrap)}>
          <table style={sx(styles.table, styles.mobile.table)}>
            <tbody>
              <tr>
                <th style={sx(styles.th, styles.mobile.th)}>Shipping Line</th>
                <th style={sx(styles.th, styles.mobile.th)}>
                  Click below to Download Format
                </th>
              </tr>

              {rows.map(([a, b]) => (
                <tr key={a}>
                  <td style={sx(styles.td, styles.mobile.td)}>{a}</td>
                  <td style={sx(styles.td, styles.mobile.td)}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (type === "usa") {
      return (
        <>
          <h3 style={sx(styles.bodyHeading, styles.mobile.bodyHeading)}>
            Imports Documents
          </h3>
          <ul style={styles.ul}>
            <li style={styles.li}>Import Power Of Attorney Foreign</li>
            <li style={styles.li}>Import Power Of Attorney Letter to Customs</li>
            <li style={styles.li}>
              Import Customs Power of Attorney (Back) Corporate Certificate
            </li>
          </ul>
        </>
      );
    }

    return null;
  };

  const renderAccordion = (item, key) => {
    const open = openKey === key;

    return (
      <div key={key} style={sx(styles.accordionItem, styles.mobile.accordionItem)}>
        <button
          type="button"
          style={sx(styles.accordionHead, styles.mobile.accordionHead)}
          onClick={() => toggle(key)}
        >
          <span style={sx(styles.accordionTitle, styles.mobile.accordionTitle)}>
            {item.title}
          </span>

          <motion.span
            style={sx(styles.plus, styles.mobile.plus)}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {open ? "−" : "+"}
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              style={{ overflow: "hidden" }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.42, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.24, ease: "easeInOut" },
              }}
            >
              <div style={sx(styles.accordionBody, styles.mobile.accordionBody)}>
                {renderBody(item.body)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section style={sx(styles.section, styles.mobile.section)}>
      <motion.div
        style={sx(styles.hero, styles.mobile.hero)}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <h1 style={sx(styles.title, styles.mobile.title)}>Resources</h1>
        <img
          src={UpperLine}
          alt=""
          style={sx(styles.upperLine, styles.mobile.upperLine)}
        />
      </motion.div>

      <div style={sx(styles.content, styles.mobile.content)}>
        <p style={sx(styles.text, styles.mobile.text)}>
          We understand the power of timely information.
        </p>

        <p style={sx(styles.text, styles.mobile.text)}>
          Here is your gateway to all information that you may want to reference
          for International Trade and Logistics (Click the links below to
          Download)
        </p>

        <img
          src={IndiaFlag}
          alt="India"
          style={sx(styles.flag, styles.mobile.flag)}
        />

        <div style={sx(styles.accordion, styles.mobile.accordion)}>
          {indiaAccordions.map((item, i) =>
            renderAccordion(item, `india-${i}`)
          )}
        </div>

        <img
          src={UsaFlag}
          alt="USA"
          style={sx(styles.flagUsa, styles.mobile.flagUsa)}
        />

        <div style={sx(styles.USAaccordion, styles.mobile.USAaccordion)}>
          {usaAccordions.map((item, i) => renderAccordion(item, `usa-${i}`))}
        </div>
      </div>

      <img
        src={BottomLine}
        alt=""
        style={sx(styles.bottomLine, styles.mobile.bottomLine)}
      />

      <footer style={sx(styles.footer, styles.mobile.footer)}>
        <p style={sx(styles.copyright, styles.mobile.copyright)}>
          Copyright © 2025 All rights reserved | Disclaimer
        </p>

        <div style={sx(styles.socials, styles.mobile.socials)}>
          {[FacebookIcon, InstaIcon, WhatsappIcon, YoutubeIcon].map((icon) => (
            <img
              key={icon}
              src={icon}
              alt=""
              style={sx(styles.socialIcon, styles.mobile.socialIcon)}
            />
          ))}
        </div>
      </footer>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    background: theme.white,
    position: "relative",
    overflow: "hidden",
    padding: "18px 7.3% 135px",
    boxSizing: "border-box",
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  hero: {
    position: "relative",
    height: "210px",
    marginBottom: "18px",
  },

  title: {
    position: "relative",
    zIndex: 2,
    margin: 0,
    paddingTop: "86px",
    color: theme.blue,
    fontSize: "75px",
    lineHeight: "70px",
    letterSpacing: "-3.5px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  upperLine: {
    position: "absolute",
    left: "160px",
    top: "84px",
    width: "88%",
    height: "auto",
    pointerEvents: "none",
    userSelect: "none",
  },

  content: {
    position: "relative",
    zIndex: 2,
  },

  text: {
    margin: "0 0 28px",
    color: theme.grey,
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: 400,
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  flag: {
    width: "44px",
    height: "auto",
    display: "block",
    margin: "32px 0 32px",
  },

  flagUsa: {
    width: "44px",
    height: "auto",
    display: "block",
    margin: "34px 0 32px",
  },

  accordion: {
    width: "100%",
  },

  USAaccordion: {
    width: "100%",
    marginBottom: "130px",
  },

  accordionItem: {
    marginBottom: "26px",
    overflow: "hidden",
  },

  accordionHead: {
    width: "100%",
    minHeight: "66px",
    border: 0,
    outline: "none",
    background: theme.lightGrey,
    color: theme.blue,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    cursor: "pointer",
    textAlign: "left",
  },

  accordionTitle: {
    color: theme.blue,
    fontSize: "28px",
    lineHeight: "34px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  plus: {
    color: theme.blue,
    fontSize: "30px",
    lineHeight: "30px",
    fontWeight: 700,
    fontFamily: "system-ui",
    flexShrink: 0,
  },

  accordionBody: {
    padding: "20px 24px 34px",
    color: theme.grey,
    fontSize: "18px",
    lineHeight: "27px",
    fontWeight: 400,
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  bodyHeading: {
    margin: "0 0 8px",
    color: theme.black,
    fontSize: "24px",
    lineHeight: "29px",
    fontWeight: 500,
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  ul: {
    margin: "0 0 22px 18px",
    padding: 0,
  },

  li: {
    marginBottom: "2px",
  },

  tableWrap: {
    width: "100%",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    color: theme.grey,
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: 400,
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  th: {
    border: "1px solid #d6d6d6",
    color: theme.black,
    fontWeight: 700,
    textAlign: "left",
    padding: "14px",
    background: "#f7f7f7",
  },

  td: {
    border: "1px solid #d6d6d6",
    padding: "13px 14px",
    verticalAlign: "top",
  },

  bottomLine: {
    position: "absolute",
    left: "7.3%",
    bottom: "42px",
    width: "49%",
    height: "auto",
    pointerEvents: "none",
    userSelect: "none",
  },

  footer: {
    position: "absolute",
    right: "7.3%",
    bottom: "36px",
    display: "flex",
    alignItems: "center",
    gap: "22px",
    zIndex: 5,
  },

  copyright: {
    margin: 0,
    color: theme.blue,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  socials: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  socialIcon: {
    width: "34px",
    height: "34px",
    display: "block",
  },

  mobile: {
    section: {
      padding: "74px 22px 30px",
      overflow: "hidden",
    },

    hero: {
      height: "25px",
      marginBottom: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    },

    title: {
      paddingTop: 0,
      textAlign: "left",
      fontSize: "48px",
      lineHeight: "48px",
      letterSpacing: "-2px",
      marginBottom: "26px",
      marginLeft:"0"
    },

    upperLine: {
      display: "none",
    },

    content: {
      width: "100%",
      maxWidth: "300px",
      margin: "0 auto",
    },

    text: {
      fontSize: "20px",
      lineHeight: "30px",
      textAlign: "left",
      margin: "0 0 28px",
    },

    flag: {
      width: "43px",
      margin: "28px 0 31px",
    },

    flagUsa: {
      width: "43px",
      margin: "24px 0 31px",
    },

    accordion: {
      width: "100%",
    },

    USAaccordion: {
      width: "100%",
      marginBottom: "38px",
    },

    accordionItem: {
      marginBottom: "26px",
    },

    accordionHead: {
      minHeight: "62px",
      padding: "0 22px",
      alignItems: "center",
    },

    accordionTitle: {
      fontSize: "24px",
      lineHeight: "27px",
      letterSpacing: "-0.4px",
      maxWidth: "220px",
    },

    plus: {
      fontSize: "28px",
      lineHeight: "28px",
    },

    accordionBody: {
      padding: "18px 22px 35px",
      fontSize: "20px",
      lineHeight: "30px",
      textAlign: "left",
    },

    bodyHeading: {
      fontSize: "24px",
      lineHeight: "29px",
      marginBottom: "8px",
    },

    tableWrap: {
      width: "100%",
      overflowX: "auto",
    },

    table: {
      minWidth: "258px",
      fontSize: "18px",
      lineHeight: "27px",
    },

    th: {
      padding: "18px 12px",
      fontSize: "18px",
      lineHeight: "27px",
    },

    td: {
      padding: "16px 12px",
      fontSize: "18px",
      lineHeight: "27px",
    },

    bottomLine: {
      display: "none",
    },

    footer: {
      position: "relative",
      left: "auto",
      right: "auto",
      bottom: "auto",
      width: "300px",
      margin: "24px auto 0",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px",
      textAlign: "center",
    },

    copyright: {
      fontSize: "16px",
      lineHeight: "24px",
      textAlign: "center",
    },

    socials: {
      justifyContent: "center",
      gap: "10px",
    },

    socialIcon: {
      width: "34px",
      height: "34px",
    },
  },
};

export default ResourcesSection;