// native imports
import React from "react";

// components
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
  return (
    <motion.section
      {...FADE_IN_BASIC_ANIMATION}
      id="faq"
      className="container my-20"
    >
      <h2 className="text-3xl font-bold text-terciary">Perguntas Frequentes</h2>
      <div className="mt-10">
        <Accordion type="multiple">
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
};
export default Faq;
