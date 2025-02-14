import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="space-y-15 px-6">
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
