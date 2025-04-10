"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CustomContainer, CustomImage } from "../ui";

const teamData = [
  {
    name: "Jafrul Hasan Rasel",
    designation: "Frontend Developer",
    image:
      "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jane Doe",
    designation: "UI/UX Designer",
    image:
      "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "John Smith",
    designation: "Backend Developer",
    image:
      "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
    socials: {
      twitter: "#",
    },
  },
];

export const Team = () => {
  return (
    <section className="">
      <CustomContainer>
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Our Amazing Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              className="bg-blue-200 rounded-2xl shadow-md overflow-hidden text-center p-5 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-blue">
                <CustomImage
                  src={member.image}
                  alt={member.name}
                  width="128"
                  height="128"
                  className="w-32 h-32 rounded-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-golden-color">
                {member.name}
              </h3>
              <p className="text-sm !text-black">{member.designation}</p>

              <div className="mt-4 flex justify-center gap-4">
                {member.socials?.facebook && (
                  <motion.a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaFacebookF />
                  </motion.a>
                )}
                {member.socials?.twitter && (
                  <motion.a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-600"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaTwitter />
                  </motion.a>
                )}
                {member.socials?.linkedin && (
                  <motion.a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaLinkedinIn />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};
