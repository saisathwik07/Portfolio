const skills = [
  { name: "Python", percent: 85 },
  { name: "JavaScript", percent: 80 },
  { name: "React", percent: 75 },
  { name: "SQL", percent: 80 },
  { name: "Java", percent: 75 },
  { name: "MongoDB", percent: 75 },
  { name: "NodeJS", percent: 70 },
  { name: "C", percent: 80 },
];

const aboutDetails = [
  { label: "Profile:", value: "Full Stack Web Developer" },
  { label: "Domain:", value: "Web Development, AI/ML, Data Structures" },
  { label: "Education:", value: "BTech in Computer Science" },
  { label: "Language:", value: "English, Hindi, Telugu" },
  { label: "Tools Known:", value: "Git & GitHub, Visual Studio, VS Code, MongoDB, SQL" },
  { label: "Frameworks:", value: "React, NodeJS, Express, Flask" },
  { label: "Interest:", value: "Web Development, Machine Learning, Problem Solving, Coding" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Left side - Personal info & skills */}
        <div>
          <div className="mb-8">
            <p className="text-muted-foreground mb-1">Name: Nethani Sai Sathwik</p>
            <p className="text-muted-foreground mb-1">Role: BTech Student & Developer</p>
            <p className="text-muted-foreground mb-4">College: KITS, Telangana, India</p>
          </div>

          <h3 className="text-foreground font-semibold mb-6">Skills</h3>
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground text-sm">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - About Me */}
        <div>
          <div className="relative mb-8">
            <h2 className="section-heading">About Me</h2>
            <span className="section-heading-bg">About</span>
          </div>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Computer Science student at KITS (2022-2026) with strong passion for full-stack web development and AI/ML. Experienced in building modern web applications using MERN stack. Completed internships at EY GDS (Web Development) and Microsoft Initiative (AI). Certified in Problem Solving and SQL by HackerRank. Proficient in Python, JavaScript, React, NodeJS, and databases including SQL and MongoDB.
          </p>
          <div className="space-y-4">
            {aboutDetails.map((detail) => (
              <div key={detail.label} className="flex gap-4">
                <span className="font-bold text-foreground min-w-[140px]">{detail.label}</span>
                <span className="text-muted-foreground">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
