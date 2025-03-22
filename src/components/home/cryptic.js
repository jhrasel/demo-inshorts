"use client";

import { motion } from "framer-motion";
import { CustomContainer, CustomImage } from "../ui";

export const Cryptic = () => {
  return (
    <section className="">
      <CustomContainer>
        <div className="grid laptop:grid-cols-2 gap-10 items-center">
          {/* img with fade-in and slight scale animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <CustomImage
              src="https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/female-hacker-wearing.jpg"
              alt="Service"
              width="1000"
              height="600"
              className="w-full laptop:h-[550px]"
            />
          </motion.div>

          {/* content with staggered animations */}
          <div className="flex flex-col gap-3">
            <motion.h4
              className="text-blue-400 text-xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome To Cryptiva
            </motion.h4>

            <motion.h2
              className="text-white text-3xl laptop:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The Perfect Solution For All The Protection Question
            </motion.h2>

            <motion.p
              className="py-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud xercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </motion.p>

            <div className="grid grid-cols-2 gap-5">
              {/* item 1 with hover animation */}
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <CustomImage
                  src="https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/cloud-150x150-1.png"
                  alt="Service"
                  width="60"
                  height="60"
                />

                <h4 className="text-xl font-bold text-white mt-2">
                  High Quality Service
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </motion.div>

              {/* item 2 with hover animation */}
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <CustomImage
                  src="https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/asser2x-150x150-1.png"
                  alt="Service"
                  width="60"
                  height="60"
                />

                <h4 className="text-xl font-bold text-white mt-2">
                  Effective Protection
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do
                  eiusmod tempor incididunt
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};
