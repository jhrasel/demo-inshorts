"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaGlobe } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { GoShieldLock } from "react-icons/go";
import { CustomContainer, CustomImage } from "../ui";

// Dummy data
const dummyData = [
  {
    slug: "projects",
    title: "Projects",
    value: "1500",
    description: "Cybersecurity Projects",
    icon: <FaGlobe />,
  },
  {
    slug: "clients",
    title: "Clients",
    value: "300",
    description: "Clients Protection",
    icon: <FaUsersGear />,
  },
  {
    slug: "countries-1",
    title: "Countries",
    value: "25",
    description: "Service Guarantee",
    icon: <GoShieldLock />,
  },
  {
    slug: "countries-2",
    title: "Countries",
    value: "25",
    description: "Operating Worldwide",
    icon: <GoShieldLock />,
  },
];

export const ProjectCount = () => {
  return (
    <section className="relative">
      <CustomImage
        src={
          "https://fse.jegtheme.com/cryptiva/wp-content/uploads/sites/26/2024/12/cybercrime-.jpg"
        }
        height="300"
        width="1920"
        alt="banner"
        className="w-full h-[700px] tab:h-[500px] object-cover"
      />

      <div className="absolute top-0 left-0 h-full w-full bg-black/70 py-10 flex items-center">
        <CustomContainer>
          <div className="grid grid-cols-1 tab:grid-cols-2 laptop:grid-cols-4 gap-5 w-full">
            {dummyData.map((data) => (
              <motion.div
                key={data.slug}
                className="flex tab:flex-col laptop:flex-row items-center justify-center gap-5 py-5 rounded-2xl bg-blue-100/70 w-full px-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="w-16 h-16 bg-primary-blue rounded-xl text-white flex items-center justify-center shadow-md text-3xl">
                  {data.icon}
                </span>

                <div className="w-[80%] laptop:w-auto">
                  <div className="flex items-end gap-1 w-full">
                    <h3 className="text-3xl laptop:text-4xl text-golden-color font-bold">
                      <CountUp
                        start={0}
                        end={parseInt(data.value, 10)}
                        duration={2}
                      />
                    </h3>
                    <h6 className="text-sm text-body-text">{data.title}</h6>
                  </div>

                  <h4 className="mt-2 text-lg tab:text-base tab:text-center laptop:text-left">
                    {data.description}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};
