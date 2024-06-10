import React from "react";

export const CtaButton: React.FC = () => {
  return (
    <button className="flex bg-secondary p-4 rounded-full items-center gap-3">
      {/* svg wpp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-phone"
      >
        <path d="M23 1l-6 6"></path>
        <path d="M17 7l-6 6"></path>
        <path d="M23 7l-6 6"></path>
      </svg>

      <span className="text-white font-bold text-md">Agende sua consulta!</span>
    </button>
  );
};
