import { spec } from "node:test/reporters";
import React from "react";

const PRESENTATION_DATA = {
  degree: "Psicóloga clínica especializada em adultos",
  specialty: "Terapia cognitivo-comportamental",
  description:
    "Talvez você esteja enfrentando alguma dificuldade e sua ansiedade está interferindo na capacidade de pensar com clareza, resolver problemas ou mesmo ter prazer. Se algo está gerando sofrimento em sua vida, isso importa, exige cuidado, e eu estou aqui para ajudar.",
  preCta:
    "Dê uma chance para si mesmo e marque uma sessão de terapia. Nunca é tarde para (re)começar.",
};

const Presentation: React.FC = () => {
  return (
    <section className="h-[calc(100vh-25)] flex flex-col container">
      <div className="flex flex-col items-left pt-56 justify-left h-full">
        <h1 className="text-3xl font-bold text-left">
          {PRESENTATION_DATA.degree}
        </h1>
        <h2 className="text-2xl font-bold text-left">
          {PRESENTATION_DATA.specialty}
        </h2>
        <p className="text-lg text-left">{PRESENTATION_DATA.description}</p>
        <button className="bg-primary text-white font-bold py-3 px-5 rounded-lg mt-5">
          {PRESENTATION_DATA.preCta}
        </button>
      </div>
    </section>
  );
};

export default Presentation;
