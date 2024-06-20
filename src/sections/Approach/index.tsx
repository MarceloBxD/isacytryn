"use client";

// native imports
import React from "react";
import { motion } from "framer-motion";

// assets
import { FaCheck } from "react-icons/fa";

// animations
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";

// data
import { APPROACH_DATA } from "@/data";

const Approach: React.FC = () => {
  return (
    <motion.section
      {...FADE_IN_BASIC_ANIMATION}
      className="container my-20 flex gap-10 flex-col md:flex-row"
    >
      <div className="flex-1">
        <h2 className="text-3xl mb-8 md:mb-2 font-bold text-terciary">
          {APPROACH_DATA.title}
        </h2>
        <h3 className="text-xl text-quaternary">{APPROACH_DATA.subtitle}</h3>
        <p className="text-lg text-quaternary">{APPROACH_DATA.description}</p>
      </div>
      <div className="flex-1 p-5 ">
        <ul className="flex flex-col gap-3">
          {APPROACH_DATA.items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex gap-2"
              key={index}
            >
              <FaCheck size={30} color="#DE9790" />
              <li>{item}</li>
            </motion.div>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Approach;
