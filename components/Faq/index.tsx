import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Is it responsive?",
    answer: "Yes. It's built with Tailwind CSS and is fully responsive.",
  },
  {
    question: "Is it production-ready?",
    answer: "Yes. It's built with best practices and is ready for production.",
  },
  {
    question: "Is it SEO-friendly?",
    answer:
      "Yes. It's built with SEO in mind and is optimized for search engines.",
  },
  {
    question: "Is it customizable?",
    answer:
      "Yes. It's highly customizable and can be easily modified to fit your needs.",
  },
  {
    question: "Is it well-documented?",
    answer:
      "Yes. It comes with detailed documentation to help you get started.",
  },
];

const Faq: React.FC = () => {
  return (
    <section id="faq" className="container my-20">
      <h2 className="text-3xl font-bold text-terciary">Perguntas Frequentes</h2>
      <div className="mt-10">
        <Accordion type="multiple">
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
export default Faq;
