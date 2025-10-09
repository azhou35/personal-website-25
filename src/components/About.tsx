import React from 'react';

const About = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6 text-left pl-4">
        <h2 className="font-serif text-3xl font-medium text-[#2c3d2c] dark:!text-white">Annie Zhou</h2>
        
        {/* Left-aligned Bio Text */}
        <div className="space-y-5 max-w-[500px] text-[#2c3d2c] dark:!text-white" style={{ 
          fontSize: '1.05rem', 
          lineHeight: '1.7'
        }}>
          <p>Poking the pressure points where large systems fail. <br /> Current TPM at OpenAI. Previously at Microsoft Supercomputing.</p>
          <p>Cultivating creative communities through photowalks, galleries, & writing clubs.</p>
          <p>Check out my <a href="https://anniewhere.substack.com/" target="_blank" rel="noopener noreferrer" className="group relative inline-block transition-all duration-200 hover:underline" style={{ color: 'inherit' }}><span className="group-hover:text-[#9a6f4e] transition-colors duration-200">blog↗</span></a>, <a href="https://azhou35.github.io/my-digital-garden/" target="_blank" rel="noopener noreferrer" className="group relative inline-block transition-all duration-200 hover:underline" style={{ color: 'inherit' }}><span className="group-hover:text-[#9a6f4e] transition-colors duration-200">digital garden↗</span></a>, and <a href="https://curius.app/annie-zhou" target="_blank" rel="noopener noreferrer" className="group relative inline-block transition-all duration-200 hover:underline" style={{ color: 'inherit' }}><span className="group-hover:text-[#9a6f4e] transition-colors duration-200">bookmarks↗</span></a>.</p>
        </div>
      </section>


      <section className="space-y-16">
        <div className="space-y-6 text-left pl-4">
        <h3 className="font-serif text-xl font-medium">Featured Work</h3>

          {[
            {
              title: "Microsoft",
              description: "Defined operational excellence for AI supercomputing, developed end-to-end copilot for HPC researchers.",
              role: "Technical Product Manager"
            },
            {
              title: "AWS",
              description: "Documented NLP & Gaming tools for developers and authored machine learning tutorials for non-technical audiences.",
              role: "Technical Writer"
            },
            {
              title: "Zing",
              description: "Birthed study-buddy matching platform developed for Cornell's Learning Strategy Center.",
              role: "Product Manager"
            },
            {
              title: "Trusli",
              description: "Designed and launched a platform for AI-powered contract management.",
              role: "1st Product Manager"
            }
          ].map((project) => (
            <div key={project.title} className="group">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-lg font-medium">{project.title}</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">• {project.role}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;