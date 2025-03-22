"use client";

import { CustomContainer, CustomImage } from "@/components/ui";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { MobileMenu } from "./mobileMenu";

const menuList = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Gallery",
    url: "/gallery",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

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

export default function Menu() {
  const route = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);

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
    <>
      <motion.nav
        className="py-3 border-b border-gray-50 sticky top-0 left-0 w-full z-50 bg-[#1f2235]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <CustomContainer className="flex items-center justify-between">
          {/* logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CustomImage
              src="/images/logo-white.png"
              alt="logo"
              width={250}
              height={250}
              className="h-7 laptop:h-9 w-auto"
            />
          </motion.div>

          {/* menu */}
          <motion.div variants={containerVariants} className="hidden tab:flex">
            <ul className="flex items-center gap-4">
              {menuList.map((menu) => (
                <motion.li
                  key={menu.name}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredItem(menu.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={menu.url}
                    className={
                      route === menu.url ? "text-primary-red" : "text-white"
                    }
                  >
                    {menu.name}
                    {hoveredItem === menu.name && (
                      <motion.div
                        layoutId="underline"
                        className="h-[2px] bg-primary-red"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* social */}
          <motion.div
            className="hidden tab:flex items-center gap-4"
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

          {/* mobile menu */}
          <div className="tab:hidden">
            <MobileMenu menuList={menuList} socialList={socialList} />
          </div>
        </CustomContainer>
      </motion.nav>
    </>
  );
}
