"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <div>
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </main>
  );
}
