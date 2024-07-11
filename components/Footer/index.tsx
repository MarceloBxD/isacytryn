"use client";

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { NAV_DATA, FOOTER_DATA } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { CtaButton } from "../CtaButton";
import BackToTopButton from "../BackToTopButton";

const SOCIAL_MEDIA_ITEMS = [
  {
    id: 1,
    name: "Instagram",
    image: <FaInstagram size={32} color="#fff" />,
    bgOnHover: "#E1306C",
    href: "https://www.instagram.com/psi.isabelacytryn/",
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
    href: "https://www.doctoralia.com.br/isabela-cytryn-2",
  },
];

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="text-black w-full bg-primary py-5">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4">
        <div className="flex items-center space-x-6 mb-5 md:mb-0">
          {SOCIAL_MEDIA_ITEMS.map((item) => (
            <Link
              target="_blank"
              key={item.id}
              href={item.href}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-secondary hover:bg-primary transition-colors duration-300 rounded-full"
            >
              {item.image}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-xl md:text-2xl font-bold text-black">Endereço</h1>
          <p className="text-md md:text-lg max-w-[350px] md:max-w-full mt-2 text-black">
            Rua Capitão Salomão, 63 - Humaitá - Rio de Janeiro, RJ
          </p>
          <p className="text-md md:text-lg font-bold">CRP: 05/69829</p>
          <p className="text-md md:text-lg">Isabela Fernandes Cytryn</p>
        </div>
        <div className="mt-5 md:mt-0">
          <CtaButton title="Entre em contato pelo <b>Whatsapp</b>!" />
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
