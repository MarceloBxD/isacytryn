"use client";

import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

import { NAV_DATA, FOOTER_DATA } from "@/data";

import Link from "next/link";
import Image from "next/image";
import { CtaButton } from "../CtaButton";

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
    <footer id="contato" className="text-black w-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div className="flex justify-center w-screen h-[250px] md:h-[300px]  items-center bg-quaternary ">
          {SOCIAL_MEDIA_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-center w-full cursor-pointer  hover:bg-slate-500 h-full transition-colors duration-300`}
            >
              {item.image}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-5 bg-quaternary  items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-full mb-5">
            <h1 className="text-2xl font-bold text-white">Endereço</h1>
            <p className="text-lg text-white">
              Rua Capitão Salomão, 63 - Humaitá - Rio de Janeiro, RJ
            </p>
            <p className="text-lg"></p>
          </div>
          <CtaButton title="Entre em contato pelo <b>Whatsapp</b>!" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
