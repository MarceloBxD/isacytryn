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

const Faq: React.FC = () => {
  return (
    <section id="faq" className="container my-20">
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
    </section>
  );
};
export default Faq;
