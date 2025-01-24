import React from 'react';

const About = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-medium">Annie Zhou.</h2>
        <div className="space-y-0.5 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
        <p>  searching for the humanity within technology through product, prose, and people.
          </p>
          
          <p>
            based in nyc. working on supercomputing at scale at microsoft ai. 
            previously contributed to open source at aws and designed nlp tools for legal tech.
</p>
          
          <p>
            outside of work, i read, take pictures, and curate intentional spaces for creativity.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h3 className="font-serif text-xl font-medium">Featured Work</h3>
        <div className="space-y-6">
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

      <section className="space-y-6">
        <h3 className="font-serif text-xl font-medium">Ars Poetica</h3>
        <div className="prose dark:prose-invert max-w-none text-sm bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <p>
          through writing and community building, i aim to explore how technology reshapes human connection. where are the intimate spaces where digital and emotional experiences intersect? how can we build bridges between the logical and the lyrical?
         what remains uniquely human in an increasingly digital world?
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;