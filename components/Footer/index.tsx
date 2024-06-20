"use client";

import React from "react";

import { NAV_DATA, FOOTER_DATA } from "@/data";

const Footer: React.FC = () => {
  return (
    <footer className="text-black p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Endereços</h2>
          <ul>
            {FOOTER_DATA.addresses.map((address, index) => (
              <li key={index} className="mb-4">
                <p className="text-lg">{address.neighborhood}</p>
                <p>{address.location}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contato</h2>
          <ul>
            <li className="mb-2">
              <p>Whatsapp: {FOOTER_DATA.contact.whatsapp}</p>
            </li>
            <li className="mb-2">
              <p>Email: {FOOTER_DATA.contact.email}</p>
            </li>
            <li className="mb-2">
              <p>Facebook: {FOOTER_DATA.contact.facebook}</p>
            </li>
            <li className="mb-2">
              <p>Instagram: {FOOTER_DATA.contact.instagram}</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Navegação</h2>
          <ul>
            {" "}
            {NAV_DATA.map((navItem) => (
              <li
                className="relative after:content-['']  after:text-white after:font-bold after:text-lg after:font-montserrat after:leading-10 after:uppercase last:after:content-['']"
                key={navItem.name}
              >
                <a href={navItem.href}>
                  <span className="relative block pb-1">{navItem.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
