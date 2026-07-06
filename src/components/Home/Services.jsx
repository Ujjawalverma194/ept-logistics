import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import ServiceSea from "../../assets/services/Service 1.svg";
import ServiceAir from "../../assets/services/Service 2.svg";
import ServiceCustom from "../../assets/services/Service 1-1.svg";
import ServiceContract from "../../assets/services/Service 1-2.svg";
import ServicePackaging from "../../assets/services/Service 1-3.svg";
import ServiceProject from "../../assets/services/Service 1-4.svg";
import ServicesLine from "../../assets/services/serivces-line.svg";

const theme = {
  blue: "#0b4f93",
  orange: "#f45124",
  white: "#f5f5f5",
  text: "#222222",
};

const services = [
  {
    name: "Sea Freight",
    title: "Charting The Best Course",
    image: ServiceSea,
    imageStyle: { left: "-6%", bottom: "0px", width: "98%" },
    mobileImageStyle: { left: "-8%", bottom: "0px", width: "108%" },
    p1: "Moving cargo across the oceans is more than just a voyage from port to port—it's about ensuring your supply chain flows seamlessly. Whether you're shipping an over-dimensional package, a regular shipment, or a pallet, we will find the best solution to add value to your business commitments.",
    p2: "Our sea freight solutions are tailored to suit your specific needs. We consolidate shipments, offer door-to-door services, and utilize advanced tracking systems to give you real-time updates. Our strong relationships with global carriers enable us to secure competitive rates and ensure timely space allocation—because your success is our mission.",
    points: [
      "FCL/LCL Freight Solutions",
      "Multimodal Transportation (Sea/Air/Road)",
      "Hazardous & Refrigerated Cargo Handling",
      "Door-to-Door Services & Cargo Tracking",
      "Freight Insurance & Custom Warehousing",
    ],
  },
  {
    name: "Air Freight",
    title: "Taking Your Business Higher",
    image: ServiceAir,
    imageStyle: { left: "9%", bottom: "155px", width: "72%" },
    mobileImageStyle: { left: "15%", bottom: "75px", width: "70%" },
    p1: "When time is critical, and you need fast, reliable air freight solutions, we will find a way to make it happen. At EPT, we are dedicated to getting your shipments to their destinations swiftly and safely-no matter the size, weight, or urgency.",
    p2: "Our global network operates 24/7, ensuring that even urgent shipments arrive on time. With customized solutions and multiple transport alternatives, we go beyond conventional approaches to meet your needs, finding the best mix of speed, reliability, and cost-efficiency.",
    points: [
      "No Size or Weight Limits",
      "Tailor-Made Transport Solutions",
      "Cargo Tracking & Door-to-Door Services",
    ],
  },
  {
    name: "Custom Clearance",
    title: "Navigating Compliant Pathways",
    image: ServiceCustom,
    imageStyle: { left: "31%", bottom: "195px", width: "39%" },
    mobileImageStyle: { left: "29%", bottom: "90px", width: "42%" },
    p1: "When it comes to navigating the complex world of cross-border shipments, we will find a way to clear the path for you. With expertise in customs regulations and compliance, we ensure your cargo moves smoothly through even the most intricate global logistics networks.",
    p2: "Our team handles every detail-import/export clearance, declarations, and document preparation-so you can focus on your business. From guidance to hands-on execution, we take the guesswork out of customs, ensuring your goods flow seamlessly across borders.",
    points: [
      "Import/Export Customs Clearance (Air & Sea)",
      "Expert Assistance with Documentation",
      "Compliance Consulting & Bond Management",
      "Smooth Handling of Post-Shipment Formalities",
      "Freight Insurance & Custom Warehousing",
    ],
  },
  {
    name: "Contract Logistics",
    title: "Streamlining Your Supply Chain",
    image: ServiceContract,
    imageStyle: { left: "-18%", bottom: "160px", width: "100%" },
    mobileImageStyle: { left: "-25%", bottom: "90px", width: "115%" },
    p1: "Managing the complexities of supply chains requires expertise, precision, and a commitment to finding a way to get the right products to the right place, at the right time. At EPT, we deliver custom contract logistics solutions designed to optimize your entire supply chain.",
    p2: "From managing inbound materials to inventory storage and distribution, our global network covers every aspect of logistics. We leverage real-time technology to provide visibility and control, ensuring that your operations remain lean, efficient, and responsive to market demands.",
    points: [
      "Inbound Material Management & Warehousing",
      "Inventory & Line Feeding Services",
      "Customized Solutions for Warehousing & Distribution",
      "Real-Time Cloud-Based Inventory Management",
    ],
  },
  {
    name: "Industrial Packaging",
    title: "Protecting What Matters",
    image: ServicePackaging,
    imageStyle: { left: "29%", bottom: "220px", width: "42%" },
    mobileImageStyle: { left: "27%", bottom: "110px", width: "46%" },
    p1: "Shipping fragile, oversized, or sensitive cargo requires extra care, and we will find a way to protect what's important to you. Our custom packaging solutions are designed to safeguard your goods-whether it's heavy machinery, industrial equipment, or highly sensitive materials.",
    p2: "Our experts tailor every aspect of the packaging to the specific needs of your cargo, ensuring it arrives intact, no matter the destination or journey.",
    points: [
      "Custom Crating & Packaging Solutions",
      "Specialized Handling for Fragile & Oversized Items",
      "Secure Palletization for Added Stability",
      "State-of-the-Art Protection for Every Shipment",
    ],
  },
  {
    name: "Project Logistics & Heavy Lifts",
    title: "Lifting Your Biggest Challenges",
    image: ServiceProject,
    imageStyle: { left: "-5%", bottom: "180px", width: "86%" },
    mobileImageStyle: { left: "-12%", bottom: "95px", width: "96%" },
    p1: "When your business involves large-scale projects with complex logistics needs, we will find a way to move the impossible. Whether you're building infrastructure, setting up energy farms, or managing industrial projects, EPT Global has the expertise to deliver critical equipment and cargo, no matter the size or destination.",
    p2: "We handle the heavy lifting-from planning to execution-so you can focus on your core operations. With experience in managing oversized and odd-dimension cargo, our team is equipped to overcome any logistical obstacle.",
    points: [
      "End-to-End Project Logistics Solutions",
      "Critical Route Survey & Load Planning",
      "Heavy Lift & Specialized Vessel Solutions",
      "On-Site Management & Carrier Selection",
    ],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
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

  const item = services[active];

  const responsive = {
    section: isMobile
      ? {
          display: "block",
          minHeight: "auto",
          overflow: "hidden",
        }
      : isTablet
      ? {
          gridTemplateColumns: "45% 55%",
        }
      : {},

    left: isMobile
      ? {
          minHeight: isSmall ? "440px" : "520px",
          overflow: "hidden",
        }
      : isTablet
      ? {
          minHeight: "760px",
        }
      : {},

    leftTitle: isMobile
      ? {
          top: "58px",
          left: "8%",
          fontSize: isSmall ? "46px" : "54px",
          lineHeight: isSmall ? "52px" : "60px",
          letterSpacing: "-2px",
        }
      : isTablet
      ? {
          left: "12%",
          fontSize: "56px",
        }
      : {},

    servicesLine: isMobile
      ? {
          top: isSmall ? "142px" : "150px",
          left: isSmall ? "18px" : "24px",
          width: isSmall ? "335px" : "390px",
          transform: "rotate(90deg)",
          transformOrigin: "top left",
          zIndex: 4,
        }
      : isTablet
      ? {
          left: "12%",
          width: "560px",
          transform: "none",
        }
      : {
          transform: "none",
        },

    serviceImage: isMobile
      ? {
          top: "auto",
          zIndex: 2,
        }
      : isTablet
      ? {
          top: "470px",
        }
      : {},

    right: isMobile
      ? {
          minHeight: "auto",
          marginRight: "0px",
          padding: isSmall ? "58px 22px 70px" : "70px 34px 80px",
        }
      : isTablet
      ? {
          minHeight: "900px",
          marginRight: "0px",
        }
      : {},

    content: isMobile
      ? {
          position: "relative",
          top: "auto",
          left: "auto",
          width: "100%",
          maxWidth: "100%",
        }
      : isTablet
      ? {
          left: "10%",
          width: "520px",
          maxWidth: "82%",
        }
      : {},

    orangeHeading: isMobile
      ? {
          fontSize: isSmall ? "32px" : "36px",
          lineHeight: isSmall ? "38px" : "42px",
        }
      : {},

    blueHeading: isMobile
      ? {
          fontSize: isSmall ? "34px" : "40px",
          lineHeight: isSmall ? "39px" : "46px",
          marginBottom: "28px",
          letterSpacing: "-1.4px",
        }
      : {},

    para: isMobile
      ? {
          fontSize: isSmall ? "17px" : "18px",
          lineHeight: "1.55",
          marginBottom: "20px",
        }
      : {},

    point: isMobile
      ? {
          fontSize: isSmall ? "16px" : "18px",
          lineHeight: "1.35",
        }
      : {},

    dots: isMobile
      ? {
          justifyContent: "center",
          marginTop: "30px",
        }
      : {},

    button: isMobile
      ? {
          width: "155px",
          height: "48px",
          fontSize: "15px",
        }
      : {},
  };

  const activeImageStyle = isMobile
    ? item.mobileImageStyle || item.imageStyle
    : item.imageStyle;

  return (
    <section id="services" style={{ ...styles.section, ...responsive.section }}>
      <div style={{ ...styles.left, ...responsive.left }}>
        <h2 style={{ ...styles.leftTitle, ...responsive.leftTitle }}>
          Services
        </h2>

        <img
          src={ServicesLine}
          alt=""
          style={{ ...styles.servicesLine, ...responsive.servicesLine }}
        />

        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={item.image}
            alt={item.name}
            style={{
              ...styles.serviceImage,
              ...responsive.serviceImage,
              ...activeImageStyle,
            }}
            initial={{ opacity: 0, x: -55 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>

      <div style={{ ...styles.right, ...responsive.right }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            style={{ ...styles.content, ...responsive.content }}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h3 style={{ ...styles.orangeHeading, ...responsive.orangeHeading }}>
              {item.name}
            </h3>

            <h2 style={{ ...styles.blueHeading, ...responsive.blueHeading }}>
              {item.title}
            </h2>

            <p style={{ ...styles.para, ...responsive.para }}>{item.p1}</p>
            <p style={{ ...styles.para, ...responsive.para }}>{item.p2}</p>

            <div style={styles.points}>
              {item.points.map((point) => (
                <p key={point} style={{ ...styles.point, ...responsive.point }}>
                  {point}
                </p>
              ))}
            </div>

            <Link to="/contact" style={styles.link}>
              <motion.button
                style={{ ...styles.button, ...responsive.button }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Enquire now
              </motion.button>
            </Link>

            <div style={{ ...styles.dots, ...responsive.dots }}>
              {services.map((service, index) => (
                <button
                  key={service.name}
                  onClick={() => setActive(index)}
                  style={{
                    ...styles.dot,
                    background: active === index ? theme.blue : theme.orange,
                    transform: active === index ? "scale(1.12)" : "scale(1)",
                  }}
                  aria-label={`Show ${service.name}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    minHeight: "880px",
    display: "grid",
    gridTemplateColumns: "40% 60%",
    background: theme.white,
    overflow: "visible",
  },

  left: {
    minHeight: "880px",
    background: theme.blue,
    position: "relative",
    overflow: "visible",
  },

  leftTitle: {
    position: "absolute",
    top: "88px",
    left: "21.5%",
    margin: 0,
    color: theme.white,
    fontSize: "64px",
    lineHeight: "77px",
    letterSpacing: "-3px",
    fontWeight: 500,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
    zIndex: 5,
  },

  servicesLine: {
    position: "absolute",
    top: "38px",
    left: "21.5%",
    width: "650px",
    height: "auto",
    zIndex: 4,
    pointerEvents: "none",
    userSelect: "none",
    transition: "all 0.35s ease",
  },

  serviceImage: {
    position: "absolute",
    height: "auto",
    zIndex: 3,
    pointerEvents: "none",
    userSelect: "none",
    top: "520px",
  },

  right: {
    minHeight: "1080px",
    background: theme.white,
    position: "relative",
    marginRight: "100px",
  },

  content: {
    position: "absolute",
    top: "238px",
    left: "16.2%",
    width: "660px",
    maxWidth: "72%",
    fontFamily: "Roboto, Condensed",
  },

  orangeHeading: {
    margin: "0 0 6px",
    color: theme.orange,
    fontSize: "40px",
    lineHeight: "48px",
    letterSpacing: "-1.4px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  blueHeading: {
    margin: "0 0 42px",
    color: theme.blue,
    fontSize: "45px",
    lineHeight: "54px",
    letterSpacing: "-2px",
    fontWeight: 700,
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
  },

  para: {
    margin: "0 0 25px",
    color: theme.text,
    fontSize: "20px",
    lineHeight: "1.46",
    fontWeight: 400,
    fontFamily: "system-ui",
  },

  points: {
    marginTop: "34px",
    marginBottom: "30px",
  },

  point: {
    margin: "0 0 7px",
    color: theme.orange,
    fontSize: "20px",
    lineHeight: "1.1",
    fontWeight: 500,
    fontFamily: "Arial, sans-serif",
  },

  link: {
    textDecoration: "none",
    display: "inline-block",
  },

  button: {
    width: "168px",
    height: "54px",
    border: "none",
    borderRadius: "28px",
    background: theme.blue,
    color: theme.white,
    fontSize: "17px",
    fontWeight: 900,
    fontFamily: "system-ui",
    cursor: "pointer",
  },

  dots: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "34px",
  },

  dot: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    border: "none",
    padding: 0,
    cursor: "pointer",
    transition: "transform 0.25s ease, background 0.25s ease",
  },
};

export default ServicesSection;