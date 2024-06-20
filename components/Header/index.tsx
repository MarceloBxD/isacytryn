"use client";

// native imports
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { CtaButton } from "../CtaButton";
import HamburgerMenu from "../HamburguerMenu";

// context
import { useApp } from "@/contexts/AppContext";

// data
import { NAV_DATA } from "@/data";

// animations
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";

export const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useApp();

  return (
    <motion.header
      {...FADE_IN_BASIC_ANIMATION}
      className={` ${
        isOpen ? "h-screen bg-white bg-opacity-100" : ""
      } w-full z-50 fixed top-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-glass bg-opacity-10 border border-glass-border shadow-glass flex ${
        isOpen ? "items-start" : "items-center"
      } justify-between px-10 py-6`}
    >
      <div className="relative w-48 h-10">
        <Image
          src={"/isa_logo_horizontal.png"}
          layout="fill"
          className="absolute object-cover object-center"
          alt="Logo Cytryn"
        />
      </div>
      {/* Show NAV in Desktop */}
      <div>
        <nav className="hidden lg:flex">
          <ul className="flex gap-5">
            {NAV_DATA.map((navItem) => (
              <li
                className="relative text-secondary after:content-[''] after:absolute after:left-full after:mx-5 after:text-white after:font-bold after:text-lg after:font-montserrat after:leading-10 after:uppercase last:after:content-['']"
                key={navItem.name}
              >
                <Link href={navItem.href}>
                  <span className="relative block pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#DE9790] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                    {navItem.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Show NAV in Desktop */}
      <div className="hidden md:block">
        <CtaButton title="Agende sua consulta!" />
      </div>
      {/* Show Hamburguer menu in Mobile */}
      <div className="block md:hidden">
        <HamburgerMenu />
      </div>
      {/* Show Hamburguer menu in Mobile */}
      {/* Show NAV in Mobile */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-5 absolute top-20 left-0 w-full p-5 rounded-lg  bg-clip-padding backdrop-filter backdrop-blur-glass bg-opacity-10 border border-glass-border shadow-glass`}
      >
        {NAV_DATA.map((navItem) => (
          <Link
            onClick={() => setIsOpen(false)}
            href={navItem.href}
            key={navItem.name}
            className="block md:hidden text-secondary text-lg font-montserrat leading-10 uppercase"
          >
            {navItem.name}
          </Link>
        ))}
      </div>
      {/* Show NAV in Mobile */}
    </motion.header>
  );
};
