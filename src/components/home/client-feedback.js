"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import { CustomContainer, CustomImage } from "../ui";

const ClientFeedbackList = [
  {
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
    name: "John Doe",
    designation: "CEO, Company Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },

  {
    img: "https://swiperjs.com/demos/images/nature-2.jpg",
    name: "John Doe",
    designation: "CEO, Company Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },

  {
    img: "https://swiperjs.com/demos/images/nature-3.jpg",
    name: "John Doe",
    designation: "CEO, Company Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },

  {
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
    name: "John Doe",
    designation: "CEO, Company Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

export const ClientFeedback = () => {
  return (
    <div className="">
      <CustomContainer>
        <div className="laptop:w-[70%] mx-auto text-center mb-10 flex flex-col gap-2">
          <h4 className="text-blue-400 text-xl font-bold">Testimonial</h4>
          <h2 className="text-white text-3xl laptop:text-4xl font-bold">
            Client Feedbacks
          </h2>
          <p className="text-sm laptop:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            molestiae maxime soluta id officia, amet nisi nesciunt a. Illo
            reprehenderit sint omnis ab facilis perferendis totam nisi porro
            accusamus culpa.
          </p>
        </div>

        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {ClientFeedbackList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center bg-blue-100 p-5 rounded-2xl">
                <CustomImage
                  src={item.img}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="w-32 h-auto m-auto rounded-2xl"
                />

                <div className="mt-6 flex flex-col gap-1">
                  <h3 className="font-bold text-2xl">{item.name}</h3>
                  <h4 className="text-primary-blue font-semibold text-lg">
                    {item.designation}
                  </h4>
                  <p className="text-sm laptop:text-base">{item.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CustomContainer>
    </div>
  );
};
