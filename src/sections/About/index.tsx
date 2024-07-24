// native imports
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// assets
import { FaCheck } from "react-icons/fa";

// data
import { ABOUT_DATA } from "@/data";

// image
import Image from "next/image";
import { CtaButton } from "../../../components/CtaButton";
import { Title } from "../../../components/Title";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    // Animação da imagem com um efeito de zoom suave
    gsap.fromTo(
      ".about-image",
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
        duration: 1,
        ease: "power2.out",
      }
    );

    // Animação dos itens da lista com um efeito de deslizamento suave
    gsap.from(".about-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-item",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
      duration: 1,
      ease: "power2.out",
    });

    // Adiciona uma animação de rotação sutil para a forma personalizada
    gsap.fromTo(
      ".custom-shape",
      {
        rotate: -30,
        opacity: 0.5,
      },
      {
        rotate: 0,
        opacity: 0.5,
        scrollTrigger: {
          trigger: ".custom-shape",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section id="sobre-mim" className="relative container">
      <Title text="SOBRE MIM" />
      <div className="relative">
        <div className="text-quaternary relative w-fit text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 md:mb-12">
          Isabela Cytryn
          <div className="w-full mt-2 h-1 bg-quaternary mb-8" />
        </div>
      </div>
      <div className="relative mt-8 flex-col md:flex md:flex-row gap-6 md:gap-10">
        <ul className="grid grid-cols-1 text-black">
          {ABOUT_DATA.map((aboutItem, index) => (
            <li
              key={index}
              className="text-lg lg:text-md h-fit flex items-center mb-2 p-1 gap-2"
            >
              <FaCheck size={15} color="#DE9790" />
              <span className="ml-2 text-sm md:text-lg">{aboutItem}</span>
            </li>
          ))}
          <div className="h-1 bg-quaternary my-3 w-full " />
          <p className="text-quaternary mt-2 max-w-[85%]">
            Além do meu profissionalismo, você pode esperar uma relação genuína,
            marcada por confiança, empatia, transparência e autenticidade.{" "}
          </p>
          <p className="text-quaternary">
            Meu objetivo é que você tenha uma vida da qual se orgulhe!
          </p>
        </ul>
        <div className="relative w-full h-[500px] md:w-[500px] md:h-[500px] mx-auto mt-8 md:mt-0 md:mx-0">
          <div className="absolute inset-0 -z-10 bg-[#F0E9E0] rounded-lg shadow-lg"></div>
          <Image
            src="/images/isa-front-image.jpg"
            className={`about-image rounded-lg w-full h-full object-cover border-8 border-[#DE9790] shadow-xl 
            md:rounded-lg md:w-full md:h-full md:object-cover md:border-8 md:border-[#DE9790] md:shadow-xl`}
            alt="Isabela Cytryn"
            layout="fill"
          />
          {/* Adicione formas geométricas personalizadas */}
          <div className="custom-shape"></div>
          <div className="absolute top-4 left-4 w-16 h-16 bg-[#DE9790] rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-xl">🧠</span>
          </div>
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#6C63FF] rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-xl">💭</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
