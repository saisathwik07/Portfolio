import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Full Stack Developer", "Web Developer", "Student", "AI Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1500);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 60);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-background pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">Hello!</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            I'm{" "}
            <span className="text-primary">NETHANI SAI SATHWIK</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {text}
            <span className="animate-pulse text-primary">|</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">BTech Student | KITS</p>
          <a
            href="https://github.com/saisathwik07"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            MY WORKS
          </a>
        </div>
        <div className="flex justify-center pt-8 md:pt-16">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <img
              src={profileImg}
              alt="Nethani Sai Sathwik"
              className="w-full h-full object-cover object-top rounded-full border-4 border-primary shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
