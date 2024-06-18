import React from "react";
import { TfiFaceSad } from "react-icons/tfi";

import SolveProblemCard from "../../../components/SolveProblemCard";

const SOLVE_PROBLEMS_DATA = {
  title: "ANSIEDADE, DEPRESSÃO, ESTRESSE, ANGÚSTIA...",
  description: "Se essa é a sua realidade hoje, é provável que você:",
  items: [
    {
      faceIcon: <TfiFaceSad size={24} color="#000" />,
      description: (
        <p>
          Lide com <b>preocupações</b> persistentes que dificultam viver no
          presente e criam medo do futuro, do incerto.
        </p>
      ),
    },
    {
      faceIcon: <TfiFaceSad size={24} color="#000" />,
      description: (
        <p>
          Esteja com <b>dificuldade para se concentrar</b>, pensar com clareza e
          tomar decisões. Parece que a <b>&quot;cabeça não para&quot;</b>.
        </p>
      ),
    },
    {
      faceIcon: <TfiFaceSad size={24} color="#000" />,
      description: (
        <p>
          Esteja sendo <b>prejudicado</b> em mais de uma área da sua vida, como
          trabalho, relacionamentos, saúde física e família, criando uma bola de
          neve.
        </p>
      ),
    },
    {
      faceIcon: <TfiFaceSad size={24} color="#000" />,
      description: (
        <p>
          Esteja sentindo{" "}
          <b>sensações físicas desagradáveis ou até incontroláveis</b>, como
          palpitações, falta de ar, desconforto torácico, etc.
        </p>
      ),
    },
    {
      faceIcon: <TfiFaceSad size={24} color="#000" />,
      description: (
        <p>
          Tenha criado maus hábitos - como a{" "}
          <b>procrastinação, exagero alimentar, álcool</b> - para lidar com suas
          emoções e, por consequência, se desconectar delas.
        </p>
      ),
    },
    {
      faceIcon: <TfiFaceSad size={24} color="#000" />,
      description: (
        <p>
          Tenha pensamentos muito <b>autocríticos</b>, como: &quot;não ser bom o
          suficiente, ser incapaz, não ser amado, não ter valor, etc&quot;.
        </p>
      ),
    },
  ],
};

const SolveProblems: React.FC = () => {
  return (
    <section
      className={`
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-5
    container
    my-10
`}
    >
      <div
        className={`
        col-span-full
        flex
        flex-col
        gap-5
        items-center
        justify-center
        text-center
        px-5
        text-quaternary
        `}
      >
        <h2 className="text-lg md:text-xl tracking-wider lg:text-2xl text-terciary font-bold text-center">
          {SOLVE_PROBLEMS_DATA.title}
        </h2>
        <p className="text-xl mb-10 md:text-2xl lg:text-4xl text-center">
          {SOLVE_PROBLEMS_DATA.description}
        </p>
      </div>
      {SOLVE_PROBLEMS_DATA.items.map((problem, index) => (
        <SolveProblemCard key={index} faceIcon={problem.faceIcon}>
          {problem.description}
        </SolveProblemCard>
      ))}
    </section>
  );
};

export default SolveProblems;
