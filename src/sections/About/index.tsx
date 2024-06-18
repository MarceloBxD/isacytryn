import React from "react";

const About: React.FC = () => {
  return (
    <section className="container">
      <h2 className="text-3xl font-bold text-terciary">Sobre</h2>
      <div>
        <div className="text-quaternary w-fit relative text-xl md:text-2xl lg:text-3xl font-bold mt-8">
          Isabela Cytryn
          <div className="absolute -bottom-3 left-0 bg-black w-full h-[0.7px]" />
        </div>
      </div>
      <div className="mt-8">
        <ul>
          <li className="list-disc ml-5 text-quaternary">
            Graduação em <b>psicologia</b> pela PUC-rio
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
