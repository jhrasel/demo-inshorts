"use client";

import { useRef, useState } from "react";
// Import Swiper React components
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { CustomContainer } from "../ui";

const bannerLists = [
  {
    id: crypto.randomUUID(),
    image:
      "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
    titleOne: "We are Dedicated",
    titleTwo: "inspired and passionate about innovation.",
    description:
      "Fusce lacinia elit odio, id pulvinar erat placerat vitae. Sed quis aliquet neque. Aenean placerat condimentum lorem non suscipit. Cras tellus tellus, fringilla eu sapien.",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide2.jpg",
    titleOne: "We are Dedicated",
    titleTwo: "inspired and passionate about innovation.",
    description:
      "Fusce lacinia elit odio, id pulvinar erat placerat vitae. Sed quis aliquet neque. Aenean placerat condimentum lorem non suscipit. Cras tellus tellus, fringilla eu sapien.",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg",
    titleOne: "We are Dedicated",
    titleTwo: "inspired and passionate about innovation.",
    description:
      "Fusce lacinia elit odio, id pulvinar erat placerat vitae. Sed quis aliquet neque. Aenean placerat condimentum lorem non suscipit. Cras tellus tellus, fringilla eu sapien.",
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const handleSlideChange = (swiper) => {
    setIsAnimating(false);
    // Small delay to ensure animations reset before playing again
    setTimeout(() => {
      setActiveIndex(swiper.activeIndex);
      setIsAnimating(true);
    }, 50);
  };

  return (
    <section className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {bannerLists.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[500px] tab:h-[calc(100vh-62px)] overflow-hidden">
              <AnimatePresence>
                {activeIndex === index && isAnimating && (
                  <motion.img
                    src={item.image}
                    alt="banner"
                    className="w-full h-full object-cover absolute top-0 left-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6 }}
                  />
                )}
              </AnimatePresence>

              {/* Static image as fallback */}
              <img
                src={item.image}
                alt="banner"
                className="w-full h-full object-cover"
                style={{
                  opacity: activeIndex === index && isAnimating ? 0 : 1,
                }}
              />

              {/* content */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center text-white">
                <CustomContainer>
                  <AnimatePresence>
                    {activeIndex === index && isAnimating && (
                      <motion.div
                        className="flex flex-col gap-2 laptop:w-[700px]"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        key={`content-${item.id}`}
                      >
                        <motion.h1
                          className="text-xl font-bold capitalize"
                          variants={slideUp}
                        >
                          {item.titleOne}
                        </motion.h1>
                        <motion.h2
                          className="text-3xl tab:text-4xl font-bold capitalize"
                          variants={slideUp}
                        >
                          {item.titleTwo}
                        </motion.h2>
                        <motion.p className="text-gray-300" variants={slideUp}>
                          {item.description}
                        </motion.p>
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 1,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          <motion.button
                            className="bg-primary-blue text-white px-6 py-3 mt-4 rounded-md cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Learn More
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CustomContainer>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <div className="hidden">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
          </div>
          <span
            ref={progressContent}
            className="absolute bottom-5 right-5 z-10 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center"
          ></span>
        </div>
      </Swiper>
    </section>
  );
};
