import React from "react";

type SolveProblemCardProps = {
  faceIcon: React.ReactNode;
  children: React.ReactNode;
};

const SolveProblemCard: React.FC<SolveProblemCardProps> = ({
  faceIcon,
  children,
}) => {
  return (
    <div
      className={`flex gap-4 p-4 bg-white shadow-md rounded-lg items-center hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-default`}
    >
      <div
        className={`flex items-center justify-center bg-primary rounded-full p-2`}
      >
        {faceIcon}
      </div>
      <div className={`text-quaternary text-left font-semibold text-lg`}>
        {children}
      </div>
    </div>
  );
};

export default SolveProblemCard;
