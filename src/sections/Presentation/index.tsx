import React from "react";
import { CtaButton } from "../../../components/CtaButton";

const PRESENTATION_DATA = {
  degree: "Psicóloga clínica especializada em adultos",
  specialty: "Terapia cognitivo-comportamental",
  description:
    "Talvez você esteja enfrentando alguma dificuldade e sua ansiedade está interferindo na capacidade de pensar com clareza, resolver problemas ou mesmo ter prazer. Se algo está gerando sofrimento em sua vida, isso importa, exige cuidado, e eu estou aqui para ajudar.",
  preCta:
    "Dê uma chance para si mesmo e marque uma sessão de terapia. Nunca é tarde para (re)começar.",
  bgImg: "/images/bg.jpg",
};

const Presentation: React.FC = () => {
  return (
    <section
      className={`flex bg-hero-pattern object-cover position-center bg-cover bg-no-repeat h-screen w-screen bg-primary bg-center bg-fixed  bg-opacity-50s`}
    >
      <div className="flex container flex-col gap-5 pt-56 justify-left h-full">
        <div className="flex flex-col items-left text-[#2d5262] gap-3">
          <h1 className="text-3xl text-left">{PRESENTATION_DATA.degree}</h1>
          <h2 className="text-2xl font-bold text-left">
            {PRESENTATION_DATA.specialty}
          </h2>
        </div>
        <p className="text-lg text-[#2d5262] text-left font-semibold">
          {PRESENTATION_DATA.description}
        </p>
        <div className="flex justify-left">
          <CtaButton title="Entre em contato comigo!" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
