"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaCheck } from "react-icons/fa";

const APPROACH_DATA = {
  title: "COMO EU POSSO TE AJUDAR",
  subtitle: (
    <>
      Trabalho com <b>Terapias Cognitivo-Comportamentais</b> de 3ª Geração – a
      última geração de psicoterapias, mais <b>modernas e atualizadas</b>.
    </>
  ),
  description: (
    <p>
      Iremos trabalhar com abordagens baseadas em evidências em uma jornada
      personalizada e adaptada às suas necessidades específicas, rumo à uma
      mudança significativa no enfrentamento de desafios emocionais.
    </p>
  ),
  items: [
    <p>
      Oferecem <b>tratamento efetivo</b> para uma variedade de problemas
      psicológicos, incluindo depressão, ansiedade, estresse, pânico e questões
      relacionadas à autoestima e confiança.
    </p>,
    <p>
      Utilizam <b>estratégias validadas</b> e individualizas para ajudar no
      manejo de pensamentos, emoções, sensações corporais e comportamentos que
      contribuem para o mal-estar.
    </p>,
    <p>
      <b>Encorajam a aceitação</b> de experiências internas dolorosas ou
      inevitáveis, permitindo uma melhor adaptação e resposta às situações da
      vida sem resistência desnecessária.
    </p>,
    <p>
      Ajudam na <b>identificação e alinhamento com valores pessoais</b>,
      orientando mudanças comportamentais consistentes com o que é
      verdadeiramente importante para você.
    </p>,
  ],
};

const Approach: React.FC = () => {
  return (
    <section className="container my-20 flex gap-10 flex-col md:flex-row">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-terciary">
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
              <FaCheck size={24} color="#DE9790" />
              <li>{item}</li>
            </motion.div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Approach;
