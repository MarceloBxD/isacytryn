import React from "react";

const ArrowDown: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 md:h-14 md:w-14 text-white animate-bounce border rounded-full p-2 border-white cursor-pointer hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
};

export default ArrowDown;
