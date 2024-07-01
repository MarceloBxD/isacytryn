"use client";

// native imports
import React from "react";
import { motion } from "framer-motion";

// components
import { CtaButton } from "../../../components/CtaButton";

// amimation
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";

// data
import { PRESENTATION_DATA } from "@/data";

// assets
import ArrowDown from "@/assets/ArrowDown";
import Link from "next/link";

const Presentation: React.FC = () => {
  return (
    <section
      className={`flex relative bg-hero-pattern object-cover position-center bg-cover bg-no-repeat h-screen w-screen bg-center bg-fixed  bg-opacity-25`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex container flex-col gap-5 pt-32 md:pt-56 justify-left h-full">
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
          className="text-lg text-white relative text-left font-semibold"
        >
          {PRESENTATION_DATA.description}
        </motion.p>
        <motion.div
          {...FADE_IN_BASIC_ANIMATION}
          className="hidden md:flex justify-left"
        >
          <CtaButton title="Entre em contato comigo!" />
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;
