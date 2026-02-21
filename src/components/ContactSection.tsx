import { Mail, MapPin, Phone, Download, Github, Linkedin, FileText, Code } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/saisathwik07",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/saisathwikreddyn",
      icon: Linkedin,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/saisathwikreddy07/",
      icon: Code,
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/saisathwik123456",
      icon: FileText,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="section-heading">Contact Me</h2>
          <p className="text-muted-foreground mt-4">Below are the details to reach out to me!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground text-sm">Telangana, India</p>
          </div>

          <div className="text-center p-6">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">Contact Number</h3>
            <a href="tel:+918309873687" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              +91-8309873687
            </a>
          </div>

          <div className="text-center p-6">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">Email Address</h3>
            <a href="mailto:saisathwik123456@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">
              saisathwik123456@gmail.com
            </a>
          </div>

          <div className="text-center p-6">
            <Download className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">Download Resume</h3>
            <a
              href="https://drive.google.com/file/d/1PxIjv5j-FJJZOAN-goRjD6y0-k8bkM74/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Download
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-16 border-t border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">Connect With Me</h3>
          <div className="flex justify-center gap-8 max-w-2xl mx-auto flex-wrap">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url.startsWith("http") ? link.url : `https://${link.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
                  title={link.name}
                >
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-bold text-foreground mb-4\">Have a Question?</h3>
          <a
            href="mailto:saisathwik123456@gmail.com"
            className="gold-btn"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
