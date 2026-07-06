import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import UpperLine from "../../assets/AboutHero/upper-line.svg";
import BottomLine from "../../assets/AboutHero/bottam-line.svg";

import TusharImg from "../../assets/AboutHero/tushar-ranapara.jpg";
import DarshanImg from "../../assets/AboutHero/darshan-mashroo.jpg";
import BradImg from "../../assets/AboutHero/brad.jpg";
import AlexImg from "../../assets/AboutHero/alex.jpg";
import AnandImg from "../../assets/AboutHero/anand-jain.jpg";
import AkshayImg from "../../assets/AboutHero/akshay-bhatt.jpg";

import FacebookIcon from "../../assets/Reach/reach-footer-facebook.svg";
import InstaIcon from "../../assets/Reach/reach-footer-insta.svg";
import WhatsappIcon from "../../assets/Reach/reach-footer-whatsapp.svg";
import YoutubeIcon from "../../assets/Reach/reach-footer-youtube.svg";

const theme = {
  blue: "#0a4e8f",
  orange: "#ff5733",
  dark: "#212529",
  grey: "#797979",
  white: "#ffffff",
};

const leaders = [
  {
    name: "Mr. Tushar Ranpara",
    role: "Founder, EPT Group",
    image: TusharImg,
    text: "With a vision to redefine global logistics, Tushar established EPT Group in 2007. Based in Mumbai, he has been instrumental in building the company's global presence, cultivating robust relationships, and driving innovation across the supply chain ecosystem. Under his leadership, EPT has grown into a trusted name in logistics worldwide, known for its customer-centric approach and groundbreaking solutions.",
  },
  {
    name: "Dr. Darshan Mashroo",
    role: "Director & COO, EPT India",
    image: DarshanImg,
    text: "Dr. Mashroo is the driving force behind EPT India's operations. A renowned customs broker and expert in freight management across sea, air, and land, he brings unparalleled knowledge to the team. Based in Ahmedabad, Dr. Mashroo is also a respected academician and advisor, partnering with institutions to share his industry expertise and mentor future leaders in logistics.",
  },
  {
    name: "Mr. Bradley Ward",
    role: "President & CEO, EPT USA",
    image: BradImg,
    text: "Bradley leads EPT Group's North American business, steering growth and innovation across the region. Based in Charleston, Bradley is a certified customs broker and a seasoned expert in transportation, ocean freight, and warehousing project management. His deep industry knowledge and commitment to operational excellence ensure seamless logistics solutions for clients across diverse industries.",
  },
  {
    name: "Mr. Alex Chen",
    role: "General Manager, EPT Shanghai",
    image: AlexImg,
    text: "Alex spearheads EPT Group's operations in Shanghai, leveraging his rich experience in freight forwarding, customs clearance, and warehousing. A specialist in import and export procedures, Alex's multilingual abilities and industry acumen make him an invaluable asset in navigating the complexities of the global supply chain.",
  },
  {
    name: "Mr. Anand Jain",
    role: "General Manager - Operations",
    image: AnandImg,
    text: "Anand Jain brings over three decades of experience in regulatory compliance and cross-border commerce to his role as head of EPT India's Customs Brokerage division. A seasoned industry expert, Anand ensures smooth operations and adherence to complex customs requirements, enhancing EPT's service reliability and efficiency.",
  },
  {
    name: "Mr. Akshay Bhatt",
    role: "Head - IT & Process Improvement, EPT Group",
    image: AkshayImg,
    text: "With 18 years of experience in logistics management, Akshay leads EPT Group's technological and process innovations. His expertise spans commercial operations, accounts, MIS, and analytics, enabling him to streamline processes and implement cutting-edge IT solutions that drive operational excellence across the business.",
  },
];

const AboutTeamSection = () => {
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
          padding: "42px 0 0",
          overflow: "hidden",
        }
      : isTablet
      ? {
          padding: "90px 7% 120px",
        }
      : {},

    intro: isMobile
      ? {
          display: "block",
          width: "100%",
          margin: "0 0 0",
          textAlign: "center",
        }
      : isTablet
      ? {
          gridTemplateColumns: "1fr",
          rowGap: "35px",
          marginBottom: "90px",
        }
      : {},

    titleWrap: isMobile
      ? {
          width: "278px",
          margin: "0 auto",
        }
      : {},

    title: isMobile
      ? {
          fontSize: "44px",
          lineHeight: "55px",
          letterSpacing: "-2px",
          textAlign: "left",
          margin: "0 0 24px",
          padding:0
        }
      : isTablet
      ? {
          fontSize: "68px",
          lineHeight: "62px",
        }
      : {},

    titleSecond: isMobile
      ? {
          paddingLeft: 0,
        }
      : {},

    upperLine: isMobile
      ? {
          display: "none",
        }
      : isTablet
      ? {
          left: "0",
          top: "128px",
          width: "72%",
        }
      : {},

    introText: isMobile
      ? {
          width: "278px",
          maxWidth: "278px",
          margin: "0 auto 24px",
          fontSize: "19px",
          lineHeight: "29px",
          textAlign: "left",
        }
      : isTablet
      ? {
          maxWidth: "680px",
        }
      : {},

    list: isMobile
      ? {
          width: "100%",
          margin: 0,
          gap: 0,
          paddingBottom: 0,
        }
      : isTablet
      ? {
          width: "86%",
          gap: "78px",
        }
      : {},

    card: isMobile
      ? {
          display: "block",
          width: "100%",
          textAlign: "center",
          margin: 0,
        }
      : isTablet
      ? {
          gridTemplateColumns: "330px 1fr",
          gap: "60px",
        }
      : {},

    imageWrap: isMobile
      ? {
          width: "100%",
          height: "360px",
          margin: 0,
        }
      : isTablet
      ? {
          width: "330px",
          height: "330px",
        }
      : {},

    image: isMobile
      ? {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }
      : {},

    content: isMobile
      ? {
          minWidth: 0,
          width: "100%",
          padding: "24px 22px 50px",
          boxSizing: "border-box",
          textAlign: "center",
        }
      : {},

    name: isMobile
      ? {
          fontSize: "30px",
          lineHeight: "36px",
          margin: "0 0 8px",
          letterSpacing: "-1px",
        }
      : {},

    role: isMobile
      ? {
          fontSize: "24px",
          lineHeight: "29px",
          margin: "0 0 16px",
          letterSpacing: "-0.8px",
        }
      : {},

    text: isMobile
      ? {
          width: "278px",
          maxWidth: "278px",
          margin: "0 auto",
          fontSize: "16px",
          lineHeight: "24px",
          textAlign: "left",
        }
      : {},

    bottomLine: isMobile
      ? {
          display: "none",
        }
      : {},

    footer: isMobile
      ? {
          position: "relative",
          right: "auto",
          bottom: "auto",
          width: "278px",
          margin: "0 auto",
          padding: "0 0 28px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }
      : {},
  };

  return (
    <section style={{ ...styles.section, ...responsive.section }}>
      <motion.div
        style={{ ...styles.intro, ...responsive.intro }}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div style={{ ...styles.titleWrap, ...responsive.titleWrap }}>
          <h2 style={{ ...styles.title, ...responsive.title }}>
            People Behind
            <br />
            <span style={{ ...styles.titleSecond, ...responsive.titleSecond }}>
              the Promise
            </span>
          </h2>

          <img
            src={UpperLine}
            alt=""
            style={{ ...styles.upperLine, ...responsive.upperLine }}
          />
        </div>

        <p style={{ ...styles.introText, ...responsive.introText }}>
          Our leadership team embodies the vision, expertise, and dedication that
          drive our success. With decades of collective experience across global
          markets, each member brings a unique blend of industry knowledge and
          strategic insight, ensuring we remain at the forefront of logistics and
          supply chain innovation. Together, they form the foundation of out
          growth, empowering us to navigate challenges and achieve transformative
          results worldwide.
        </p>
      </motion.div>

      <div style={{ ...styles.list, ...responsive.list }}>
        {leaders.map((leader, index) => (
          <motion.article
            key={leader.name}
            style={{ ...styles.card, ...responsive.card }}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{
              duration: 0.58,
              ease: "easeOut",
              delay: isMobile ? 0 : Math.min(index * 0.04, 0.18),
            }}
          >
            <div style={{ ...styles.imageWrap, ...responsive.imageWrap }}>
              <img
                src={leader.image}
                alt={leader.name}
                style={{ ...styles.image, ...responsive.image }}
              />
            </div>

            <div style={{ ...styles.content, ...responsive.content }}>
              <h3 style={{ ...styles.name, ...responsive.name }}>
                {leader.name}
              </h3>

              <h4 style={{ ...styles.role, ...responsive.role }}>
                {leader.role}
              </h4>

              <p style={{ ...styles.text, ...responsive.text }}>
                {leader.text}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <img
        src={BottomLine}
        alt=""
        style={{ ...styles.bottomLine, ...responsive.bottomLine }}
      />

      <footer style={{ ...styles.footer, ...responsive.footer }}>
        <p style={styles.copyright}>
          Copyright © 2025 All rights reserved | Disclaimer
        </p>

        <div style={styles.socials}>
          {[FacebookIcon, InstaIcon, WhatsappIcon, YoutubeIcon].map((icon) => (
            <span key={icon} style={styles.socialLink}>
              <img src={icon} alt="" style={styles.socialIcon} />
            </span>
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
    padding: "150px 7.3% 125px",
    boxSizing: "border-box",
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  intro: {
    display: "grid",
    gridTemplateColumns: "52% 42%",
    columnGap: "6%",
    alignItems: "center",
    marginBottom: "126px",
  },

  titleWrap: {
    position: "relative",
  },

  title: {
    margin: 0,
    color: theme.blue,
    fontSize: "80px",
    lineHeight: "70px",
    letterSpacing: "-4px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
    paddingBottom:"140px"
  },

  titleSecond: {
    display: "inline-block",
    paddingLeft: "150px",
  },

  upperLine: {
    position: "absolute",
    left: "100px",
    top: "38px",
    width: "92%",
    height: "auto",
    pointerEvents: "none",
  },

  introText: {
    margin: 0,
    color: theme.dark,
    fontSize: "19px",
    lineHeight: "29px",
    fontWeight: 400,
    fontFamily: "system-ui",
    maxWidth: "535px",
  },

  list: {
    width: "57.5%",
    margin: "0 auto",
    display: "grid",
    gap: "86px",
    paddingBottom: "150px",
  },

  card: {
    display: "grid",
    gridTemplateColumns: "365px 1fr",
    alignItems: "center",
    gap: "85px",
  },

  imageWrap: {
    width: "365px",
    height: "365px",
    overflow: "hidden",
    background: "#f2f2f2",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    filter: "grayscale(100%)",
  },

  content: {
    minWidth: "600px",
  },

  name: {
    margin: "0 0 8px",
    color: theme.orange,
    fontSize: "30px",
    lineHeight: "36px",
    letterSpacing: "-1px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  role: {
    margin: "0 0 28px",
    color: theme.blue,
    fontSize: "24px",
    lineHeight: "29px",
    letterSpacing: "-0.8px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  text: {
    margin: 0,
    color: theme.grey,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    fontFamily: "system-ui",
  },

  bottomLine: {
    position: "absolute",
    left: "7.3%",
    bottom: 0,
    width: "49%",
    height: "auto",
    pointerEvents: "none",
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
    fontFamily: "system-ui",
    textAlign: "center",
  },

  socials: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },

  socialLink: {
    width: "34px",
    height: "34px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  socialIcon: {
    width: "34px",
    height: "34px",
    display: "block",
  },
};

export default AboutTeamSection;