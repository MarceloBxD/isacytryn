import React from "react";
import { motion } from "framer-motion";

type TitleProps = {
  text: string;
  className?: string;
  color?: string;
};

export const Title = ({ text, className, color = "terciary" }: TitleProps) => {
  return (
    <motion.h2
      className={`text-xl md:text-3xl mb-8 md:mb-2 text-left font-bold text-${
        color.startsWith("#") || color.startsWith("rgb")
          ? `[${color}]`
          : `${color}`
      } ${className} `}
    >
      {text}
    </motion.h2>
  );
};
