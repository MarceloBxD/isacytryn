"use client";

import React from "react";
import { CtaButton } from "../CtaButton";

import { motion } from "framer-motion";

const NAV_DATA = [
  { name: "Apresentação", href: "/#apresentacao" },
  { name: "Sobre", href: "/#problemas" },
  { name: "Contato", href: "/#minha-abordagem" },
  { name: "Sobre Mim", href: "/#sobre-mim" },
  { name: "Feedbacks", href: "/#feedbacks" },
  { name: "FAQ", href: "/#faq" },
];

export const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-glass-white fixed top-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-glass bg-opacity-10 border border-glass-border shadow-glass flex items-center justify-between px-10 py-6"
    >
      <div>Logo</div>
      <div>
        <nav className="hidden lg:flex">
          <ul className="flex gap-5">
            {NAV_DATA.map((navItem) => (
              <li
                className="relative text-secondary after:content-[''] after:absolute after:left-full after:mx-5 after:text-white after:font-bold after:text-lg after:font-montserrat after:leading-10 after:uppercase last:after:content-['']"
                key={navItem.name}
              >
                <a href={navItem.href}>
                  <span className="relative block pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#DE9790] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                    {navItem.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <CtaButton title="Agende sua consulta!" />
      </div>
    </motion.header>
  );
};
