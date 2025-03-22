"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CustomContainer, CustomImage } from "../ui";

const dats = [
  {
    id: crypto.randomUUID(),
    image:
      "https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/net.png",
    title: "Network Security",
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/database.png",
    title: "Database Security",
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/asser2x-150x150-1.png",
    title: "Web Security",
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/locker.png",
    title: "Locker Security",
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/data-security.png",
    title: "Data Security",
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/cloud-150x150-1.png",
    title: "Cloud Security",
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

export default function Services() {
  // Define the animation variants here
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Header animation variants
  const headerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section>
      <CustomContainer>
        {/* header with animation */}
        <motion.div
          className="text-center mb-5"
          variants={headerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.h4
            className="text-blue-400 text-base laptop:text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Services
          </motion.h4>
          <motion.h2
            className="text-2xl laptop:text-4xl text-white font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            What We Offer
          </motion.h2>
        </motion.div>

        {/* content */}
        <motion.div
          className="grid tab:grid-cols-2 laptop:grid-cols-3 gap-5"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {dats.map((item) => (
            <motion.div
              key={item.id}
              className="p-5 rounded-md bg-[#011936]"
              variants={itemVariant}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-col gap-3">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CustomImage
                    src={item.image}
                    alt={item.title}
                    height="60"
                    width="60"
                  />
                </motion.div>
                <motion.h4
                  className="text-white text-lg font-bold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {item.title}
                </motion.h4>
                <motion.p
                  className="text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {item.description}
                </motion.p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={""}
                    className="text-blue-400 text-sm inline-block"
                  >
                    Read More...
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CustomContainer>
    </section>
  );
}
