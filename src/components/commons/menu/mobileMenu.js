import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export const MobileMenu = ({ menuList, socialList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const route = usePathname();

  // Animation variants for the menu
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -100 },
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

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
    <div className="relative">
      <button
        className="flex items-center justify-center w-10 h-10 focus:outline-none text-white"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <MdClose className="text-2xl" />
        ) : (
          <MdMenu className="text-2xl" />
        )}
      </button>

      <motion.nav
        className="absolute top-10 right-0 w-44 bg-white border rounded-md shadow-lg"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col gap-4 p-5">
          {menuList.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.url}
                className={
                  route === menu.url ? "text-primary-red" : "text-black"
                }
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        <motion.div
          className="flex items-center gap-4 px-5 pb-5"
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
                className="text-primary-blue hover:text-primary-red transition-colors text-xl"
              >
                {social.icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>
    </div>
  );
};
