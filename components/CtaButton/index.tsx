import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type CtaButtonProps = {
  title: string;
};

export const CtaButton: React.FC<CtaButtonProps> = ({ title }) => {
  return (
    <button className="flex border bg-secondary p-4 rounded-full z-50 items-center gap-3 ">
      {/* svg wpp */}
      <FaWhatsapp size={24} color="#fff" />

      <span className="text-white font-bold text-md">{title}</span>
    </button>
  );
};
