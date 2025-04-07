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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12 mt-16"
        >
          <h2 className="text-4xl font-bold text-golden-color mb-2 text-white">
            Contact Us
          </h2>
          <p className="text-body-text text-sm md:text-base">
            We’re here to help and answer any questions you might have.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
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
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-5 tab:p-8 rounded-xl shadow-lg space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            ></textarea>

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
