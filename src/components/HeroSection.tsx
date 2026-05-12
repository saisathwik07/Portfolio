import { useEffect, useState } from "react";
import { Github, Linkedin, Code, ArrowDown } from "lucide-react";
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
          <p className="text-primary font-semibold uppercase tracking-widest mb-4 animate-fade-in-down">Hello!</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            I'm{" "}
            <span className="text-primary">NETHANI SAI SATHWIK</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {text}
            <span className="animate-pulse text-primary">|</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">BTech Student | KITS</p>
          
          {/* Dual CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="gold-btn">
              MY WORKS
            </a>
            <a href="#contact" className="gold-btn-outline">
              CONTACT ME
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/saisathwik07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/saisathwikreddyn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/saisathwikreddy07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              title="LeetCode"
            >
              <Code className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Profile Image with Glow */}
        <div className="flex justify-center pt-8 md:pt-16">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-glow-pulse" />
            <img
              src={profileImg}
              alt="Nethani Sai Sathwik"
              className="relative w-full h-full object-cover object-top rounded-full border-4 border-primary shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce hidden md:block">
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default HeroSection;
