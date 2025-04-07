"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CustomContainer } from "../ui";

const galleryImages = [
  "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
  "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
  "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
  "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
  "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
  "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
  "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
  "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
];

export const GalleryPage = () => {
  return (
    <section className="py-16">
      <CustomContainer>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-golden-color mb-3 text-white">
            Gallery
          </h2>
          <p className="text-body-text text-sm md:text-base">
            A collection of our recent work and happy moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 gap-5">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
            </motion.div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};
