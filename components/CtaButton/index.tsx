import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type CtaButtonProps = {
  title: string;
};

export const CtaButton: React.FC<CtaButtonProps> = ({ title }) => {
  return (
    <Link
      target="_blank"
      href="https://api.whatsapp.com/send?phone=5521994633606&text=Oi,%20vim%20pelo%20site!%20"
      className="flex border cursor-pointer bg-white py-2 px-4 rounded-full z-50 items-center gap-3 "
    >
      {/* svg wpp */}
      <span
        dangerouslySetInnerHTML={{
          __html: title,
        }}
        className="text-black text-md"
      />
      <FaWhatsapp size={24} color="#25D366" />
    </Link>
  );
};
