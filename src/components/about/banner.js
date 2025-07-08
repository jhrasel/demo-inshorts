"use client";

import { CustomImage } from "../ui";

export default function AboutBanner() {
  return (
    <section className="relative">
      <CustomImage
        src={
          "https://theme7x.com/react/itodo/assets/images/main-slider/slider1/slide1.jpg"
        }
        height="300"
        width="1920"
        alt="banner"
        className="w-full h-80 object-cover"
      />

      {/* content */}
      <div className="absolute top-0 left-0 h-full w-full bg-black/70 text-center flex flex-col justify-center items-center px-5 tab:px-0">
        <h2 className="text-4xl text-white font-bold">
          Welcome to InfoShieldPro
        </h2>
        <p className="max-w-[500px] mt-2 !text-gray-200 text-sm tab:text-base">
          InfoShieldPro is a full-spectrum cybersecurity firm delivering
          advanced threat defense, compliance consulting, and secure digital
          transformation solutions for enterprises worldwide.
        </p>
      </div>
    </section>
  );
}
