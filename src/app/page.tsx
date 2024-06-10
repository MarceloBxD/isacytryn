import Presentation from "@/sections/Presentation";
import { Header } from "../../components/Header";
import SolveProblems from "@/sections/SolveProblems";
import Approach from "@/sections/Approach";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Presentation />
      <SolveProblems />
      <Approach />
    </main>
  );
}
