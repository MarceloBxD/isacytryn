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
    <motion.section className="container my-20 flex gap-10 flex-col md:flex-row">
      <motion.div {...FADE_IN_BASIC_ANIMATION} className="flex-1">
        <motion.h2 className="text-3xl mb-8 md:mb-2 font-bold text-terciary">
          {APPROACH_DATA.title}
        </motion.h2>
        <h3 className="text-xl text-quaternary">{APPROACH_DATA.subtitle}</h3>
        <p className="text-lg text-quaternary">{APPROACH_DATA.description}</p>
      </motion.div>
      <motion.div {...FADE_IN_BASIC_ANIMATION} className="flex-1 p-2">
        <ul className="flex flex-col gap-3">
          {APPROACH_DATA.items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-center gap-2"
              key={index}
            >
              <FaCheck size={42} color="#DE9790" />
              <li className="ml-3">{item}</li>
            </motion.div>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default Approach;
