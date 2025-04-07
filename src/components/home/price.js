"use client";

import { motion } from "framer-motion";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import { CustomContainer } from "../ui";

export const Price = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-[#040837] py-10 tab:py-16">
      <CustomContainer>
        <div className="">
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sed
              distinctio deleniti illum temporibus saepe est eveniet nostrum
              voluptas officiis.
            </p>
          </motion.div>

          {/* price card */}
          <motion.div
            className="grid tab:grid-cols-3 gap-5 laptop:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* item */}
            <motion.div
              className="bg-white p-6 rounded-md flex flex-col gap-3"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              {/* header */}
              <div className="flex items-center justify-between text-base tab:text-xl font-semibold">
                <h4>Free trial</h4>
                <div className="w-10 tab:w-20 h-0.5 bg-primary-blue"></div>
                <h3>Save 25%</h3>
              </div>

              <h3 className="text-4xl tab:text-5xl text-primary-red font-bold flex items-end justify-center gap-1">
                <FaBangladeshiTakaSign />
                5000
                <span className="text-base"> /Month</span>
              </h3>

              <motion.ul
                className="flex flex-col gap-3 text-base my-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>
              </motion.ul>

              <motion.button
                className="bg-primary-blue text-white py-3 rounded-md cursor-pointer hover:bg-primary-red"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* item */}
            <motion.div
              className="bg-white p-6 rounded-md flex flex-col gap-3"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              {/* header */}
              <div className="flex items-center justify-between text-base tab:text-xl font-semibold">
                <h4>Free trial</h4>
                <div className="w-10 tab:w-20 h-0.5 bg-primary-blue"></div>
                <h3>Save 25%</h3>
              </div>

              <h3 className="text-4xl tab:text-5xl text-primary-red font-bold flex items-end justify-center gap-1">
                <FaBangladeshiTakaSign />
                5000
                <span className="text-base"> /Month</span>
              </h3>

              <motion.ul
                className="flex flex-col gap-3 text-base my-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>
              </motion.ul>

              <motion.button
                className="bg-primary-blue text-white py-3 rounded-md cursor-pointer hover:bg-primary-red"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* item */}
            <motion.div
              className="bg-white p-6 rounded-md flex flex-col gap-3"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              {/* header */}
              <div className="flex items-center justify-between text-base tab:text-xl font-semibold">
                <h4>Free trial</h4>
                <div className="w-10 tab:w-20 h-0.5 bg-primary-blue"></div>
                <h3>Save 25%</h3>
              </div>

              <h3 className="text-4xl tab:text-5xl text-primary-red font-bold flex items-end justify-center gap-1">
                <FaBangladeshiTakaSign />
                5000
                <span className="text-base"> /Month</span>
              </h3>

              <motion.ul
                className="flex flex-col gap-3 text-base my-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>

                <motion.li
                  className="flex items-center gap-2"
                  variants={listItemVariants}
                >
                  <IoCheckmarkDone className="text-primary-red text-xl" />
                  Lorem ipsum dolor sit amet.
                </motion.li>
              </motion.ul>

              <motion.button
                className="bg-primary-blue text-white py-3 rounded-md cursor-pointer hover:bg-primary-red"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </CustomContainer>
    </section>
  );
};
