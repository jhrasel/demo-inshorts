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
              Welcome to InfoShieldPro
            </motion.h4>

            <motion.h2
              className="text-white text-3xl laptop:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your Strategic Partner in Cyber Resilience
            </motion.h2>

            <motion.p
              className="py-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We specialize in proactive defense, breach prevention, and digital
              risk mitigation — empowering businesses to operate securely in
              today’s evolving threat landscape.
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
                  High-Quality Cybersecurity Services
                </h4>
                <p>
                  At InfoShield Pro, we deliver top-tier cybersecurity services
                  tailored to meet your business needs, ensuring reliability and
                  excellence every step of the way.
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
                  Effective Protection for Your Business
                </h4>
                <p>
                  Our expert team provides strong and effective protection
                  against cyber threats, keeping your data safe and your
                  operations secure.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};
