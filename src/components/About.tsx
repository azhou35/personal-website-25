import React from 'react';

const About = () => {
  return (
    <div className="space-y-4">
      <section className="space-y-2 text-left pl-4">
        <h2 className="font-serif text-3xl font-medium text-[#2c3d2c] dark:!text-white">Annie Zhou</h2>

        {/* Left-aligned Bio Text */}
        <div className="max-w-[500px] text-[#2c3d2c] dark:!text-white" style={{
          fontSize: '1.05rem',
          lineHeight: '1.7'
        }}>
          <p className="text-gray-600 dark:text-gray-400"><span style={{ cursor: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22><text y=%2224%22 font-size=%2224%22>👈</text></svg>') 16 16, pointer" }}>Poking</span> the pressure points where large systems fail.</p>
          <p className="mt-12">Check out my <a href="https://anniewhere.substack.com/" target="_blank" rel="noopener noreferrer" className="group relative inline-block transition-all duration-200 hover:underline" style={{ color: 'inherit', cursor: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22><text y=%2224%22 font-size=%2224%22>✍️</text></svg>') 16 16, pointer" }}><span className="group-hover:text-[#9a6f4e] transition-colors duration-200">blog↗</span></a>, <a href="https://azhou35.github.io/my-digital-garden/" target="_blank" rel="noopener noreferrer" className="group relative inline-block transition-all duration-200 hover:underline" style={{ color: 'inherit', cursor: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22><text y=%2224%22 font-size=%2224%22>🌷</text></svg>') 16 16, pointer" }}><span className="group-hover:text-[#9a6f4e] transition-colors duration-200">digital garden↗</span></a>, and <a href="https://curius.app/annie-zhou" target="_blank" rel="noopener noreferrer" className="group relative inline-block transition-all duration-200 hover:underline" style={{ color: 'inherit', cursor: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22><text y=%2224%22 font-size=%2224%22>👀</text></svg>') 16 16, pointer" }}><span className="group-hover:text-[#9a6f4e] transition-colors duration-200">bookmarks↗</span></a>.</p>
        </div>
      </section>


      <section className="space-y-16">
        <div className="space-y-6 text-left pl-4">

          {[
            {
              title: "OpenAI",
              description: "Scaling compute and driving reliability across GPU training infrastructure.",
              role: "Technical Program Manager"
            },
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
              title: "Trusli",
              description: "Designed and launched a platform for AI-powered contract management.",
              role: "1st Product Manager"
            }
          ].map((project) => (
            <div key={project.title} className="group">
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-serif text-lg font-medium">{project.title}</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400"><span className="text-[8px]" style={{ verticalAlign: '2px' }}>★</span> {project.role}</span>
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