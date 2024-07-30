// native imports
import React from "react";
import { motion } from "framer-motion";

// icons
import { TfiFaceSad } from "react-icons/tfi";

// nuvem icon
import { IoCloud } from "react-icons/io5";
import { Pause } from "lucide-react";
import { Heart } from "lucide-react";
import { FaHamburger } from "react-icons/fa";
import { MessageCircleIcon } from "lucide-react";

// components
import SolveProblemCard from "../../../components/SolveProblemCard";
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";
import { Title } from "../../../components/Title";

const SOLVE_PROBLEMS_DATA = {
  title: "ANSIEDADE, DEPRESSÃO, ESTRESSE, ANGÚSTIA...",
  description: "Se essa é a sua realidade hoje, é provável que você:",
  items: [
    {
      faceIcon: <TfiFaceSad size={24} color="#FFF" />,
      description: (
        <p className="font-normal">
          Lide com <b>preocupações</b> persistentes que dificultam viver no
          presente e criam medo do futuro, do incerto.
        </p>
      ),
    },
    {
      faceIcon: <IoCloud size={24} color="#FFF" />,
      description: (
        <p className="font-normal">
          Esteja com <b>dificuldade para se concentrar</b>, pensar com clareza e
          tomar decisões. Parece que a <b>&quot;cabeça não para&quot;</b>.
        </p>
      ),
    },
    {
      faceIcon: <Pause size={24} color="#FFF" />,
      description: (
        <p className="font-normal">
          Esteja sendo <b>prejudicado</b> em mais de uma área da sua vida, como
          trabalho, relacionamentos, saúde física e família, criando uma bola de
          neve.
        </p>
      ),
    },
    {
      faceIcon: <Heart size={24} color="#FFF" />,
      description: (
        <p className="font-normal">
          Esteja sentindo{" "}
          <b>sensações físicas desagradáveis ou até incontroláveis</b>, como
          palpitações, falta de ar, desconforto torácico, etc.
        </p>
      ),
    },
    {
      faceIcon: <FaHamburger size={24} color="#FFF" />,
      description: (
        <p className="font-normal">
          Tenha criado maus hábitos - como a{" "}
          <b>procrastinação, exagero alimentar, álcool</b> - para lidar com suas
          emoções e, por consequência, se desconectar delas.
        </p>
      ),
    },
    {
      faceIcon: <MessageCircleIcon size={24} color="#FFF" />,
      description: (
        <p className="font-normal">
          Tenha pensamentos muito <b>autocríticos</b>, como: &quot;não ser bom o
          suficiente, ser incapaz, não ser amado, não ter valor, etc&quot;.
        </p>
      ),
    },
  ],
};

const SolveProblems: React.FC = () => {
  return (
    <motion.section
      {...FADE_IN_BASIC_ANIMATION}
      id="sintomas"
      className={`
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-3
    md:gap-4
    container
`}
    >
      <motion.div
        className={`
        col-span-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        text-quaternary
        mt-20
        md:mt-0
        `}
      >
        <Title
          className="
        text-center"
          text={SOLVE_PROBLEMS_DATA.title}
        />
        <motion.p className="text-xl mb-10 md:text-2xl lg:text-4xl text-center">
          {SOLVE_PROBLEMS_DATA.description}
        </motion.p>
      </motion.div>
      {SOLVE_PROBLEMS_DATA.items.map((problem, index) => (
        <SolveProblemCard key={index} faceIcon={problem.faceIcon}>
          {problem.description}
        </SolveProblemCard>
      ))}
    </motion.section>
  );
};

export default SolveProblems;
