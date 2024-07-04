"use client";

import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

import { NAV_DATA, FOOTER_DATA } from "@/data";

import Link from "next/link";
import Image from "next/image";

const SOCIAL_MEDIA_ITEMS = [
  {
    id: 1,
    name: "Instagram",
    image: <FaInstagram size={32} color="#fff" />,
    bgOnHover: "#E1306C",
  },
  {
    id: 2,
    name: "Facebook",
    image: <FaFacebookF size={32} color="#fff" />,
    bgOnHover: "#1877F2",
  },
  {
    id: 3,
    name: "Doctoralia",
    image: (
      <Image
        quality={100}
        alt="Doctoralia logo"
        src="/doctoralia.png"
        width={32}
        height={32}
      />
    ),
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="text-black w-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div className="flex justify-center w-screen h-[250px] md:h-[400px] items-center bg-quaternary ">
          {SOCIAL_MEDIA_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-center w-full hover:bg-slate-500 h-full transition-colors duration-300`}
            >
              {item.image}
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
