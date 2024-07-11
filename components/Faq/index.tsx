"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// data
import { FAQ_DATA } from "@/data";
import { motion } from "framer-motion";
import { FADE_IN_BASIC_ANIMATION } from "@/utils/animations";

const Faq: React.FC = () => {
  // Dividindo FAQ_DATA em duas colunas
  const halfLength = Math.ceil(FAQ_DATA.length / 2);
  const firstHalf = FAQ_DATA.slice(0, halfLength);
  const secondHalf = FAQ_DATA.slice(halfLength);

  return (
    <motion.section
      {...FADE_IN_BASIC_ANIMATION}
      id="faq"
      className="container my-20 px-4 md:px-0"
    >
      <h2 className="text-3xl font-bold text-terciary text-center mb-10">
        Perguntas Frequentes
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Accordion type="multiple">
            {firstHalf.map((faq, index) => (
              <AccordionItem
                className="max-w-[90%] mx-auto"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left text-quaternary hover:text-secondary">
                  <p className="max-w-[90%]">{faq.question}</p>
                </AccordionTrigger>
                <AccordionContent className="text-quaternary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="-mt-5 md:mt-0">
          <Accordion type="multiple">
            {secondHalf.map((faq, index) => (
              <AccordionItem
                className="max-w-[90%] mx-auto"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left text-quaternary hover:text-secondary">
                  <p className="max-w-[90%]">{faq.question}</p>
                </AccordionTrigger>
                <AccordionContent className="text-quaternary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;
