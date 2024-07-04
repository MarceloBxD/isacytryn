import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type CtaButtonProps = {
  title: string;
};

export const CtaButton: React.FC<CtaButtonProps> = ({ title }) => {
  return (
    <button className="flex border bg-white py-2 px-4 rounded-full z-50 items-center gap-3 ">
      {/* svg wpp */}
      <span
        dangerouslySetInnerHTML={{
          __html: title,
        }}
        className="text-black text-md"
      />
      <FaWhatsapp size={24} color="#25D366" />
    </button>
  );
};
