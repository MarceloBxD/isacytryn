import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

type CtaButtonProps = {
  title: string;
};

export const CtaButton: React.FC<CtaButtonProps> = ({ title }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    // Animação da imagem
    gsap.fromTo(
      buttonRef.current,
      {
        scale: 1,
        backgroundColor: "#F0e9e0", // primary
        color: "#2d5262", // quaternary
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
      {
        scale: 1,
        backgroundColor: "#F0e9e0", // primary
        color: "#2d5262", // quaternary
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power1.out",
      }
    );

    gsap.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: "#DE9790", // terciary
      color: "#F0e9e0", // primary
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
      duration: 0.3,
      ease: "power1.out",
      paused: true,
    });

    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        color: "#F0e9e0", // primary
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
        duration: 0.3,
        ease: "power1.out",
      });
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        backgroundColor: "#F0e9e0", // primary
        color: "#2d5262", // quaternary
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power1.out",
      });
    });
  }, []);

  return (
    <Link
      ref={buttonRef}
      target="_blank"
      href="https://api.whatsapp.com/send?phone=5521994633606&text=Oi,%20vim%20pelo%20site!%20"
      className="flex border cursor-pointer py-2 px-4 rounded-full z-50 items-center gap-3"
    >
      {/* svg wpp */}
      <span
        dangerouslySetInnerHTML={{
          __html: title,
        }}
        className="text-quaternary text-md"
      />
      <FaWhatsapp size={24} color="#25D366" />
    </Link>
  );
};
