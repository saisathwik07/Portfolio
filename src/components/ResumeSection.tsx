const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Resume Header */}
        <div className="text-center mb-16 relative">
          <h2 className="section-heading">Resume</h2>
          <span className="section-heading-bg">Resume</span>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            BTech Computer Science student with internship experience in Web Development and AI. Passionate about MERN stack development and machine learning applications. Certified in Problem Solving and SQL.
          </p>
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/1PxIjv5j-FJJZOAN-goRjD6y0-k8bkM74/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        {/* Experience */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground">Experience</h3>
        </div>
          <div className="max-w-3xl mx-auto space-y-8 mb-16">
          <div className="border-l-4 border-primary pl-6 py-2">
            <span className="text-primary font-semibold">March 2025 – April 2025</span>
            <h4 className="text-xl font-bold text-foreground mt-1">Web Development Intern</h4>
            <p className="text-muted-foreground">EY GDS & Edunet Foundation – Online. (Certificate)</p>
            <ul className="text-muted-foreground text-sm mt-2 space-y-1 list-disc list-inside">
              <li>Built modern web applications using MERN stack under Next Gen Employability Program.</li>
              <li>Developed REST APIs and implemented authentication & database integration.</li>
            </ul>
          </div>
          <div className="border-l-4 border-primary pl-6 py-2">
            <span className="text-primary font-semibold">May 2025 – June 2025</span>
            <h4 className="text-xl font-bold text-foreground mt-1">AI Intern</h4>
            <p className="text-muted-foreground">Edunet Foundation – Online. (Certificate)</p>
            <ul className="text-muted-foreground text-sm mt-2 space-y-1 list-disc list-inside">
              <li>Completed Foundations of AI internship covering ML concepts and AI applications.</li>
              <li>Implemented AI models and gained hands-on experience in real-world problem solving.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground">Education</h3>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="border-l-4 border-primary pl-6 py-2">
            <span className="text-primary font-semibold">Nov 2022 – Jun 2026</span>
            <h4 className="text-xl font-bold text-foreground mt-1">Bachelor of Technology in Computer Science</h4>
            <p className="text-muted-foreground">Kakatiya Institute Of Technology And Science (KITS)</p>
            <p className="text-muted-foreground text-sm">GPA: 8.1/10.0</p>
          </div>
          <div className="border-l-4 border-primary pl-6 py-2">
            <span className="text-primary font-semibold">2020-2022</span>
            <h4 className="text-xl font-bold text-foreground mt-1">Class 12</h4>
            <p className="text-muted-foreground">Govt Junior College</p>
            <p className="text-muted-foreground text-sm">Percentage: 82.6%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
