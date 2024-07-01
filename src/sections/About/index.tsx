// native imports
import React from "react";
import { motion } from "framer-motion";

// assets
import { FaCheck } from "react-icons/fa";

// data
import { ABOUT_DATA } from "@/data";

// image
import Image from "next/image";

const About: React.FC = () => {
  return (
    <motion.section className="container">
      <h2 className="text-3xl font-bold text-terciary">Sobre</h2>
      <div>
        <div className="text-quaternary w-fit relative text-xl md:text-2xl lg:text-3xl font-bold mt-8">
          Isabela Cytryn
        </div>
      </div>
      <div className="mt-8 flex-col md:flex md:flex-row gap-4">
        <ul className="grid grid-cols-1 gap-4 text-black">
          {ABOUT_DATA.map((aboutItem, index) => (
            <li
              key={index}
              className="text-lg lg:text-md  flex items-center p-2 gap-3 "
            >
              <FaCheck size={15} color="#DE9790" />
              <span>{aboutItem}</span>
            </li>
          ))}
        </ul>
        <div className="border rounded border-black flex-1 relative w-full">
          <Image
            src="/isa_foto.png"
            width={300}
            height={300}
            className="rounded-lg object-cover object-center"
            alt="Isabela Cytryn"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
