// native imports
import React from "react";
import { motion } from "framer-motion";

// assets
import { FaCheck } from "react-icons/fa";

// data
import { ABOUT_DATA } from "@/data";

// image
import Image from "next/image";
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";

const About: React.FC = () => {
  return (
    <motion.section id="sobre-mim" className="container">
      <motion.h2
        {...FADE_IN_BASIC_ANIMATION}
        className="text-3xl font-bold text-terciary"
      >
        Sobre
      </motion.h2>
      <div>
        <motion.div
          {...FADE_IN_BASIC_ANIMATION}
          className="text-quaternary w-fit relative text-xl md:text-2xl lg:text-3xl font-bold mt-8"
        >
          Isabela Cytryn
        </motion.div>
      </div>
      <div className="mt-8 flex-col md:flex md:flex-row gap-6 md:gap-10">
        <ul className="grid grid-cols-1 text-black">
          {ABOUT_DATA.map((aboutItem, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              key={index}
              className="text-lg lg:text-md flex items-center mb-2 p-1 gap-2 "
            >
              <FaCheck size={15} color="#DE9790" />
              <span className="ml-2 text-sm md:text-md">{aboutItem}</span>
            </motion.li>
          ))}
        </ul>
        <div className="border rounded shadow-lg flex-1 md:max-w-[500px] mx-auto mt-8 md:mt-0 md:mx-0 h-[500px] relative w-full">
          <Image
            src="/images/isa-front-image.jpg"
            className="rounded-lg w-full bg-center h-full object-cover"
            alt="Isabela Cytryn"
            layout="fill"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
