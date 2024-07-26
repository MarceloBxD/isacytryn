"use client";

import Presentation from "@/sections/Presentation";
import { Header } from "../../components/Header";
import SolveProblems from "@/sections/SolveProblems";
import Approach from "@/sections/Approach";
import Faq from "../../components/Faq";
import About from "@/sections/About";
import Footer from "../../components/Footer";
import Feedbacks from "@/sections/Feedbacks";
import { WhatsappIcon } from "../../components/WhatsappIcon";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Presentation />
      <SolveProblems />
      <Approach />
      <About />
      <Feedbacks />
      <Faq />
      <Footer />
      <WhatsappIcon />
    </main>
  );
}
