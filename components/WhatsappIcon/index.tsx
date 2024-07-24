import React from "react";

// import { Container } from './styles';
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

type WhatsappIconProps = {
  mode: "light" | "default";
};

export const WhatsappIcon = ({ mode = "default" }: WhatsappIconProps) => {
  return (
    <div
      className={`fixed bottom-4 right-4 hover:cursor-pointer flex items-center justify-center p-1.5 rounded-full bg-[${
        mode === "light" ? "#FFF" : "#25D366"
      }] `}
    >
      <Link href="https://api.whatsapp.com/send?phone=5521994633606&text=Oi,%20vim%20pelo%20site!%20">
        <FaWhatsapp size={32} color={mode === "light" ? "#25D366" : "#FFF"} />
      </Link>
    </div>
  );
};
