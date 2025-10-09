import React from 'react';

const MoreAbout = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6 text-left pl-4">
        <h2 className="font-serif text-3xl font-medium">Hi, I'm Annie!</h2>
        
        {/* Image and Text Side by Side */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Image - 40% */}
          <div className="w-full md:w-2/5">
            <img 
              src="/headshot.JPG" 
              alt="Annie Zhou" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Content - 50% */}
          <div className="w-full md:w-1/2 space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>I spend my days making the invisible legible, tracing the patterns that shape how progress, both physical and digital, takes form.</p>
            
            <p>My work sits at the intersection of systems and storytelling. At Microsoft, I helped orchestrate one of the world's largest GPU fleets. I deeply believe in democratizing access to tech: I started my career developing AI learning materials and contributing to open-source for NLP tools.</p>
            
            <p>Outside of work, I write techno-social essays and curate creative spaces through Wayward, a project exploring how we create meaning, memory, and art in an increasingly digital world.</p>
            
            <p>Through everything, I aspire to build bridges between the logical and the lyrical. I believe my friends share a sense of genorosity, are curious and intentional, and open-minded. If anything here resonates, I'd love to hear what you're building, writing, or thinking about.</p>
          </div>
        </div>
      </section>

      <section className="pl-4">
        <h3 className="font-serif text-xl font-medium mb-6">On Small Joys</h3>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Text Content - 50% */}
          <div className="w-full md:w-1/2 space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>I live for morning coffees, impromptu photo walks, & riverside runs; for ampersands & oxford commas; for muji pens & midori notebooks. I am equally fascinated and terrified by the ocean.
              I'm inspired by episodes of Dialectic, essays by Henrik Karlsson, & photos by Faizal Westcott. 
              <br /> 
            </p>
          </div>

          {/* Image - 50% */}
          <div className="w-full md:w-1/2">
            <img 
              src="/Group 5.png" 
              alt="Hobbies" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreAbout;