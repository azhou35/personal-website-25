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
              src="photos/headshot.JPG" 
              alt="Annie Zhou" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Content - 50% */}
          <div className="w-full md:w-1/2 space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>I grew up in Jersey, spent time in upstate New York, and now split my time between NYC and SF. I'm drawn to cities, systems, and the people and processes that keep them alive.</p>

            <p>My earliest memories exist within games (Pokemon and Maplestory were early obsessions) and I first got into GPUs working on Amazon's GameLift team. Today, I work at OpenAI on scaling operations and maintaining the health of an ever-growing compute fleet. Previously, I drove hardware health work for one of the world's largest supercomputers at Azure.</p>

            <p>I'm a techno-optimist who cares about making technology accessible for people of all backgrounds. In undergrad, I wrote learning materials for AI4ALL and contributed to open-source NLP tools.</p>

            <p>Outside of work, I over-think on how to cultivate creative spaces through <a href="https://www.waywardnyc.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Wayward↗</a>, a project exploring how we create meaning, sustain memory, and share art with our neighbors.</p>

            <p>I'm energized by those who share a sense of generosity, are curious and intentional, and true to who they are.</p>
          </div>
        </div>
      </section>

      <section className="pl-4">
        <h3 className="font-serif text-xl font-medium mb-6">On Small Joys</h3>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Text Content - 50% */}
          <div className="w-full md:w-1/2 space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>I live for morning coffees, impromptu photo walks, & riverside runs; for ampersands & oxford commas; for muji pens & midori notebooks. 
              I'm inspired by episodes of Dialectic, essays by Henrik Karlsson, photos by Faizal Westcott, poems by Ada Limón, film theories by Thomas Flight.
            </p>
          </div>

          {/* Image - 50% */}
          <div className="w-full md:w-1/2">
            <img 
              src="photos/Group 5.png" 
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