import { Github, Linkedin, Code, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: "https://github.com/saisathwik07", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/saisathwikreddyn", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com/u/saisathwikreddy07/", label: "LeetCode" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black text-xs shadow-md shadow-primary/20">
              SS
            </span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Sai Sathwik. All rights reserved.
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                title={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Built with */}
          <p className="text-muted-foreground text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
