"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { CustomContainer } from "../ui";
import ContactBanner from "./banner";

export const ContactUs = () => {
  return (
    <section className="pb-16">
      <ContactBanner />

      <CustomContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
          {/* Left Side - Map with Info Below */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FiMapPin className="text-2xl text-blue-400" />
                <div>
                  <h4 className="font-bold text-lg text-white">Address</h4>
                  <p className="text-body-text">Dhanmondi, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiMail className="text-2xl text-blue-400" />
                <div>
                  <h4 className="font-bold text-lg text-white">Email</h4>
                  <p className="text-body-text">info@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiPhone className="text-2xl text-blue-400" />
                <div>
                  <h4 className="font-bold text-lg text-white">Phone</h4>
                  <p className="text-body-text">+880 1234 567890</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-72 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9064729994896!2d90.37568831498!3d23.750894484589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4e9c8b8c89%3A0x7e0c8b8c8b8c8b8c!2sDhanmondi%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1625097600000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* right Side - Info */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-5 tab:p-6 rounded-xl shadow-lg space-y-3"
          >
            {/* Field 1: Your Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-semibold text-gray-700"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              />
            </div>

            {/* Field 2: Your Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-semibold text-gray-700"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              />
            </div>

            {/* Field 3: Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block mb-1 font-semibold text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              />
            </div>

            {/* Field 4: Service Area (Dropdown) */}
            <div>
              <label
                htmlFor="serviceArea"
                className="block mb-1 font-semibold text-gray-700"
              >
                Service Area
              </label>
              <select
                id="serviceArea"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              >
                <option value="">Select a service area</option>
                <option value="vapt">Application VAPT Services</option>
                <option value="networkSecurity">
                  Network Security Services
                </option>
                <option value="enterpriseNetwork">
                  Enterprise Network Services Portfolio
                </option>
                <option value="siemIntegration">
                  Security Operations & SIEM Integration
                </option>
                <option value="digitalForensics">
                  Digital Forensics & Incident Response
                </option>
                <option value="securityAdvisory">
                  Security Advisory & Compliance Consulting
                </option>
                <option value="malwareAnalysis">
                  Malware Analysis & Intelligence
                </option>
                <option value="secureWebDev">
                  Secure Web Development & Application Hardening
                </option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Field 5: Your Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-semibold text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              ></textarea>
            </div>

            {/* Field 6: Send Message Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-primary-blue text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </CustomContainer>
    </section>
  );
};
