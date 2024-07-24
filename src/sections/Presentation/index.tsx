"use client";

// native imports
import React from "react";
import { motion } from "framer-motion";
import "../../app/globals.css";
// components
import { CtaButton } from "../../../components/CtaButton";

// animation
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";
import Image from "next/image";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// swiper modules
import { Pagination, Autoplay } from "swiper/modules";

// data
import { PRESENTATION_DATA } from "@/data";

const IMAGES_TO_SLIDE = [
  "/images/bg.jpg",
  "/images/bg.jpg",
  "/images/bg.jpg",
  "/images/bg.jpg",
];

const SwiperComponent: React.FC = () => {
  return (
    <Swiper
      className="h-[calc(100vh-85px)] max-w-screen md:h-[calc(100vh-65.6px)] custom-swiper"
      pagination={{
        clickable: true,
        enabled: true,
        dynamicBullets: true,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      parallax={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      // fix pagination on mobile
    >
      {IMAGES_TO_SLIDE.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="h-screen w-screen relative">
            <Image
              src={image}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Presentation: React.FC = () => {
  return (
    <section
      id="apresentacao"
      className="relative flex flex-col md:flex-row  items-center h-screen max-w-screen -mb-10 md:mb-12"
    >
      <div className="relative w-screen h-[280px] md:w-[400px] md:h-full">
        <Image
          layout="fill"
          alt="Isa Front Image"
          className="object-cover hidden bg-top opacity-25"
          src="/images/isa-front-image.jpg"
        />
        <Image
          layout="fill"
          alt="Isa Front Image"
          className="object-cover object-top bg-top "
          src="/images/bg.jpg"
        />
      </div>
      <div className=" ml-12 mt-5 max-w-[80%] md:w-full bottom-18 md:bottom-36 md:left-[27%]">
        <div className="flex relative flex-col items-left text-quaternary gap-1 md:gap-3">
          <motion.h1
            {...FADE_IN_BASIC_ANIMATION}
            className="text-lg text-center md:text-left md:text-3xl"
          >
            {PRESENTATION_DATA.degree}
          </motion.h1>
          <motion.h2
            {...FADE_IN_BASIC_ANIMATION}
            className="text-lg md:text-2xl font-bold text-center md:text-left "
          >
            {PRESENTATION_DATA.specialty}
          </motion.h2>
        </div>
        <motion.p
          {...FADE_IN_BASIC_ANIMATION}
          className="text-sm text-quaternary  text-center md:text-left relative md:max-w-[50%]  py-3 md:py-5"
        >
          {PRESENTATION_DATA.description}
        </motion.p>
        <motion.p
          {...FADE_IN_BASIC_ANIMATION}
          className="text-sm text-quaternary relative md:max-w-[45%] text-center md:text-left pb-3 md:pb-5 font-semibold"
        >
          {PRESENTATION_DATA.preCta}
        </motion.p>
        <motion.div
          {...FADE_IN_BASIC_ANIMATION}
          className="flex text-left mx-auto md:mx-0 w-fit justify-center md:justify-left"
        >
          <CtaButton title="Entre em contato pelo <b>Whatsapp</b>!" />
        </motion.div>
      </div>
      <div></div>
    </section>
  );
};

export default Presentation;

{
  /* <div className="absolute inset-0 flex flex-col gap-5 pt-16 md:pt-40 justify-left container mx-auto z-10">
        <div className="relative h-[380px] w-[200px]">
          <Image
            layout="fill"
            alt="Isa Front Image"
            className="object-cover"
            src="/images/isa-front-image.jpg"
          />
        </div>
        <div className="flex relative flex-col items-left text-white gap-3">
          <motion.h1
            {...FADE_IN_BASIC_ANIMATION}
            className="text-3xl text-left"
          >
            {PRESENTATION_DATA.degree}
          </motion.h1>
          <motion.h2
            {...FADE_IN_BASIC_ANIMATION}
            className="text-2xl font-bold text-left"
          >
            {PRESENTATION_DATA.specialty}
          </motion.h2>
        </div>
        <motion.p
          {...FADE_IN_BASIC_ANIMATION}
          className="text-lg text-white relative md:max-w-[50%] text-left"
        >
          {PRESENTATION_DATA.description}
        </motion.p>
        <motion.p
          {...FADE_IN_BASIC_ANIMATION}
          className="text-lg text-white relative md:max-w-[45%] text-left font-semibold"
        >
          {PRESENTATION_DATA.preCta}
        </motion.p>
        <motion.div {...FADE_IN_BASIC_ANIMATION} className="flex justify-left">
          <CtaButton title="Entre em contato pelo <b>Whatsapp</b>!" />
        </motion.div>
      </div> */
}
