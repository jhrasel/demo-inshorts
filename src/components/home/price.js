"use client";

import { motion } from "framer-motion";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import { CustomContainer } from "../ui";

/* -------------------------------------------------------------------- */
/* 1 ▪ The only place you edit when something changes ------------------ */
const packagesData = [
  {
    title: "Application VAPT Services",
    price: 4000,
    tag: "Starting From",
    features: [
      "Web App Security Testing",
      "API Security Testing",
      "Mobile App Security Testing",
      "Network Security Testing",
      "Source Code Review",
      "Business Logic Flaw Testing",
      "Remediation Support & Re-testing",
      "Executive & Technical Reporting",
    ],
  },
  {
    title: "Network Security Services",
    price: 5000,
    tag: "Starting From",
    features: [
      "Network Penetration Testing (Internal/External)",
      "Network Design / Architecture Review",
      "Wireless Network Security Testing",
      "Firewall Configuration Review & Optimisation",
      "Secure VPN & Remote Access",
      "Security Policy Review & Recommendations",
    ],
  },
  {
    title: "Enterprise Network Services Portfolio",
    price: 4000,
    tag: "Starting From",
    features: [
      "Network Design and Architecture",
      "Routing, Switching & Traffic Flow Optimisation",
      "Firewall and Perimeter Security",
      "Network Segmentation & Access Control",
      "Load Balancing Services",
      "Proxy and Web Filtering",
      "DNS / DHCP Services",
      "Network Monitoring & Performance Management",
    ],
  },
  {
    title: "Security Operations & SIEM Integration",
    price: 10000,
    tag: "Starting From",
    features: [
      "Design & Deployment of SIEM Solutions",
      "Log Source Identification & Normalisation",
      "Custom Correlation Rule Creation",
      "Alert Tuning & Incident Prioritisation",
      "SOC Dashboard & Visualisation",
      "External Threat-Feed Integration",
      "MITRE ATT&CK Rule Mapping",
      "Security Automation with SOAR",
      "Log Retention, Archiving & Compliance",
    ],
  },
  {
    title: "Digital Forensics & Incident Response",
    price: 8000,
    tag: "Starting From",
    features: [
      "Digital Evidence Acquisition & Preservation",
      "Endpoint & Server Forensic Analysis",
      "Email & Communication Forensics",
      "Log Correlation & Timeline Reconstruction",
      "Data-Breach Impact Assessment",
      "Threat-Actor Attribution & TTP Mapping",
      "Incident Containment & Recovery Guidance",
      "Executive Reporting & Regulatory Support",
    ],
  },
  {
    title: "Malware Analysis & Intelligence",
    price: 5000,
    tag: "Starting From",
    features: [
      "Static Malware Analysis",
      "Dynamic Malware Analysis",
      "IOC Identification & Extraction",
      "Malware Family Classification & Attribution",
      "Custom YARA / Snort / Sigma Rules",
      "Complete Malware Removal",
      "System Recovery",
    ],
  },
  {
    title: "Secure Web Development & Hardening",
    price: 3000,
    tag: "Starting From",
    features: [
      "Custom Website Design (UI/UX-Focused)",
      "Full-Stack Web Development",
      "CMS-Based Development",
      "E-Commerce Platform Integration",
      "API Integration & Secure Data Handling",
      "CMS Security Hardening & Patch Management",
      "Performance Optimisation",
      "Ongoing Maintenance & Security Monitoring",
    ],
  },
  {
    title: "Security Advisory & Compliance Consulting",
    price: 10000,
    tag: "Starting From",
    features: [
      "Security Posture Assessment & Risk Profiling",
      "Cybersecurity Strategy & Roadmap Development",
      "Compliance Readiness (ISMS, PCI DSS, NIST)",
      "BCP / DR Planning",
      "Data-Privacy Assessment & Governance",
      "Third-Party Vendor Security Review",
      "Policies, Procedures & Standards",
      "Awareness & Training Programmes",
    ],
  },
];

/* -------------------------------------------------------------------- */
/* 2 ▪ Animation variants --------------------------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const listItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

/* -------------------------------------------------------------------- */
/* 3 ▪ Component ------------------------------------------------------- */
export const Price = () => (
  <section className="bg-[#040837] py-10 tab:py-16">
    <CustomContainer>
      {/* Section Heading ------------------------------------------------ */}
      <motion.div
        className="laptop:w-[60%] m-auto text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
      >
        <h2 className="text-white text-3xl laptop:text-4xl font-bold mb-3">
          Our Price
        </h2>
        <p className="text-white/80">
          Choose the service tier that matches your current need – pay only for
          what you use.
        </p>
      </motion.div>

      {/* Price Cards ---------------------------------------------------- */}
      <motion.div
        className="grid gap-6 tab:grid-cols-2 laptop:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {packagesData.map((pack, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-md flex flex-col"
            variants={cardVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            {/* Title with yellow gradient color */}
            <h3 className=" text-2xl tab:text-[27px] font-bold -m-6 p-6 mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-white text-center rounded-t-md shadow">
              {pack.title}
            </h3>

            {/* Tag and price display */}
            <div className="flex items-center justify-between text-base tab:text-lg font-semibold mb-2">
              <span className="text-gray-600">{pack.tag}</span>
              <div className="w-8 tab:w-12 h-0.5 bg-primary-blue" />
            </div>

            {/* Price */}
            <h3 className="text-4xl tab:text-5xl text-primary-red font-bold flex items-end justify-center gap-1 mb-4">
              <FaBangladeshiTakaSign />
              {pack.price}
              <span className="text-base"> /Project</span>
            </h3>

            {/* Features */}
            <motion.ul
              className="flex flex-col gap-3 text-sm tab:text-base mb-6 grow"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {pack.features.map((feat, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl mt-0.5" />
                  {feat}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA button */}
            <motion.button
              className="bg-primary-blue text-white py-3 rounded-md cursor-pointer hover:bg-primary-red"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </CustomContainer>
  </section>
);
