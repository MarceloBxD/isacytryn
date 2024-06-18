"use client";

import React from "react";
import { CtaButton } from "../../../components/CtaButton";
import { motion } from "framer-motion";

const PRESENTATION_DATA = {
  degree: "Psicóloga clínica especializada em adultos",
  specialty: "Terapia cognitivo-comportamental",
  description:
    "Talvez você esteja enfrentando alguma dificuldade e sua ansiedade está interferindo na capacidade de pensar com clareza, resolver problemas ou mesmo ter prazer. Se algo está gerando sofrimento em sua vida, isso importa, exige cuidado, e eu estou aqui para ajudar.",
  preCta:
    "Dê uma chance para si mesmo e marque uma sessão de terapia. Nunca é tarde para (re)começar.",
  bgImg: "/images/bg.jpg",
};

const FRAMER_ANIMATION = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8 },
};

const Presentation: React.FC = () => {
  return (
    <section
      className={`flex relative bg-hero-pattern object-cover position-center bg-cover bg-no-repeat h-screen w-screen bg-center bg-fixed  bg-opacity-25`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex container flex-col gap-5 pt-56 justify-left h-full">
        <div className="flex relative flex-col items-left text-white gap-3">
          <motion.h1 {...FRAMER_ANIMATION} className="text-3xl text-left">
            {PRESENTATION_DATA.degree}
          </motion.h1>
          <motion.h2
            {...FRAMER_ANIMATION}
            className="text-2xl font-bold text-left"
          >
            {PRESENTATION_DATA.specialty}
          </motion.h2>
        </div>
        <motion.p
          {...FRAMER_ANIMATION}
          className="text-lg text-white relative text-left font-semibold"
        >
          {PRESENTATION_DATA.description}
        </motion.p>
        <motion.div {...FRAMER_ANIMATION} className="flex justify-left">
          <CtaButton title="Entre em contato comigo!" />
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;
