"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CustomContainer } from "../ui";
import GalleryBanner from "./banner";

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

// Modal Component
const ImageModal = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}) => {
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
            onClick={onClose}
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>

          {/* Image Container */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-xs overflow-x-auto">
            {images.map((img, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-12 h-12 rounded border-2 overflow-hidden ${
                  index === currentIndex ? "border-white" : "border-gray-500"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16">
      <GalleryBanner />

      <CustomContainer>
        <div className="grid grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 gap-5 pt-16">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => openModal(index)}
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Click indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-white/20 rounded-full p-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CustomContainer>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={galleryImages}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </section>
  );
};
