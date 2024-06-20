"use client";

// native imports
import React, { useState, useEffect } from "react";
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
import { HEADER_ANIMATION } from "@/utils/animations";

export const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      {...HEADER_ANIMATION}
      className={` ${
        isOpen ? "h-[100dvh] bg-white bg-opacity-100" : ""
      } w-full z-50 fixed top-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-glass border border-glass-border shadow-glass flex ${
        isOpen ? "items-start" : "items-center"
      } justify-between px-10 py-6`}
    >
      <div className="relative w-48 h-10">
        <Image
          src={
            scrolled
              ? "/isa_logo_horizontal.png"
              : isOpen
              ? "/isa_logo_horizontal.png"
              : "/isa_logo_horizontal_branco.png"
          }
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
                className={`relative after:content-[''] after:absolute after:left-full after:mx-5 after:font-bold after:text-lg after:font-montserrat after:leading-10 after:uppercase last:after:content-[''] ${
                  scrolled
                    ? "text-secondary after:text-secondary"
                    : "text-white after:text-white"
                }`}
                key={navItem.name}
              >
                <Link href={navItem.href}>
                  <span
                    className={`relative block pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[${
                      scrolled ? "#FFFFFF" : "#DE9790"
                    }] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
                  >
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
