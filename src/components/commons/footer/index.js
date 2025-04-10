"use client";

import { CustomContainer, CustomImage } from "@/components/ui";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const socialList = [
  {
    icon: <FaWhatsapp />,
    url: "/",
  },
  {
    icon: <FaFacebookF />,
    url: "/",
  },
  {
    icon: <FaInstagram />,
    url: "/",
  },
  {
    icon: <FaLinkedinIn />,
    url: "/",
  },
];

export default function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-black/70 py-10 text-white">
      <CustomContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-2">
            <Link href={"/"}>
              <CustomImage
                src="/images/logo-white.png"
                alt="logo"
                width={250}
                height={250}
                className="h-7 laptop:h-9 w-auto"
              />
            </Link>
            <p className="text-gray-200 text-sm pt-5">
              Empowering your data with modern security.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h3 className="text-md font-semibold">Quick Links</h3>
            <ul className="text-gray-200 text-sm space-y-1">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="space-y-2">
            <h3 className="text-md font-semibold">Connect with Us</h3>
            <motion.div
              className="flex items-center justify-center tab:justify-start gap-4"
              variants={socialVariants}
            >
              {socialList.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    color: "#ff4d4d",
                  }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  <Link
                    href={social.url}
                    className="text-white hover:text-primary-red transition-colors text-xl"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-xs text-gray-500 mt-2">
              Email: info@example.com
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Info-Shield-Pro. All rights
            reserved.
          </p>
        </div>
      </CustomContainer>
    </footer>
  );
}
