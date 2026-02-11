import { motion } from 'motion/react';
import { useState } from 'react';

const experience = [
  {
    year: 'January 2024-Present',
    title: 'UX Designer',
    company: 'Nokia',
    description: 'Leading design system initiatives and product design for enterprise SaaS platform. Managing cross-functional collaboration with 8 product teams.',
    achievements: [
      'Built and launched design system serving 50+ designers and developers',
      'Led UX research program resulting in 40% increase in user satisfaction',
      'Mentored 3 junior designers',
    ],
  },
  {
    year: 'December 2021-July 2023',
    title: 'Product Designer',
    company: 'Teya (former SaltPay)',
    description: 'Designed mobile and web experiences for fintech products. Conducted user research and usability testing.',
    achievements: [
      'Redesigned mobile banking app, increasing engagement by 35%',
      'Established user research practice and conducted 50+ user interviews',
      'Collaborated with engineering to improve design-dev handoff',
    ],
  },
  {
    year: 'May 2017-October 2017',
    title: 'Researcher',
    company: 'Conservation Practice',
    description: 'End-to-end product design for B2B SaaS startup. Contributed to design system and user research initiatives.',
    achievements: [
      'Designed core product features from 0-1',
      'Created and maintained component library',
      'Conducted usability testing and user interviews',
    ],
  },
  {
    year: 'September 2013-December 2017',
    title: 'Researcher',
    company: 'Az - Rede de Investigação em Azulejo | FLUL',
    description: 'Worked on diverse client projects ranging from e-commerce to healthcare. Learned fundamentals of user-centered design.',
    achievements: [
      'Designed interfaces for 15+ client projects',
      'Collaborated with developers on implementation',
      'Participated in design critiques and workshops',
    ],
  },
];

const skills = {
  'Product Design': ['User Research', 'Interaction Design', 'Visual Design', 'Prototyping', 'User Testing', 'Information Architecture'],
  'UX Research': ['User Interviews', 'Usability Testing', 'Survey Design', 'Data Analysis', 'Persona Development', 'Journey Mapping'],
  'Design Systems': ['Component Design', 'Design Tokens', 'Documentation', 'Accessibility', 'Pattern Libraries', 'Version Control'],
};

const tools = {
  'Design': ['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'ProtoPie'],
  'Research': ['UserTesting', 'Maze', 'Dovetail', 'Miro', 'Optimal Workshop'],
  'Development': ['HTML/CSS', 'React Basics', 'Git', 'Storybook', 'Zeroheight'],
};

export function About() {
  const [selectedYear, setSelectedYear] = useState<number>(0);

  return (
    <div className="min-h-screen">
      {/* Intro */}
      <section className="mx-auto px-4 py-12 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-4xl lg:text-6xl uppercase tracking-tight mb-4 leading-none">
            About
          </h1>
          <p className="text-base max-w-3xl mb-4 leading-relaxed">
            A product designer with 8+ years of experience creating thoughtful, research-driven solutions. Specializing in building design systems, conducting UX research, and designing products that scale.
          </p>
          <p className="text-base max-w-3xl leading-relaxed">
            Currently seeking opportunities to join a team where I can contribute to meaningful products, mentor other designers, and continue growing expertise in design systems and research.
          </p>
        
        </motion.div>
      </section>

      {/* Experience Timeline */}
      <section className="mx-auto px-4 py-12 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className="text-xs uppercase tracking-wider mb-6">Experience</h2>
          
          <div className="border-2 border-black">
            {/* Timeline Navigation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-4 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                {experience.map((job, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedYear(index)}
                    className={`w-full text-left border-b-2 border-black last:border-b-0 transition-colors ${
                      selectedYear === index
                        ? 'bg-black text-white'
                        : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    <div className="p-3 border-b border-black">
                      <div className="text-xs uppercase mb-1">Period</div>
                      <div className="text-sm">{job.year}</div>
                    </div>
                    <div className="p-3 border-b border-black">
                      <div className="text-xs uppercase mb-1">Role</div>
                      <div className="text-sm">{job.title}</div>
                    </div>
                    <div className="p-3">
                      <div className="text-xs uppercase mb-1">Company</div>
                      <div className="text-sm">{job.company}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Timeline Details */}
              <div className="lg:col-span-8">
                <motion.div
                  key={selectedYear}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="p-6"
                >
                  <div className="border-b-2 border-black pb-4 mb-4">
                    <div className="text-xs uppercase mb-2">Period</div>
                    <div className="text-2xl mb-2">{experience[selectedYear].year}</div>
                    <div className="text-xl mb-1">{experience[selectedYear].title}</div>
                    <div className="text-base">{experience[selectedYear].company}</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-xs uppercase mb-2">Description</div>
                    <p className="text-sm leading-relaxed">{experience[selectedYear].description}</p>
                  </div>
                  
                  <div>
                    <div className="text-xs uppercase mb-3">Key Achievements</div>
                    <ul className="space-y-2">
                      {experience[selectedYear].achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-xs">—</span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
          <section className= "py-6">
            <a
            href="https://www.dropbox.com/scl/fi/qvr7enp29pwehtuhf6h0b/Ana-Venancio_resume2026.pdf?rlkey=iizu5o5gzd0ktqwqrmlvih3ia&st=j6dkgtxi&dl=0"
            className="uppercase tracking-tight hover:underline"
          >
            Resume →
          </a>
            </section> 
      </section>
      

      {/* Skills */}
      <section className="mx-auto px-4 py-12 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h2 className="text-xs uppercase tracking-wider mb-6">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category} className="border-r-2 border-black last:border-r-0">
                <div className="border-b-2 border-black p-3 bg-white">
                  <div className="text-xs uppercase">{category}</div>
                </div>
                <div className="p-3">
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 border border-black text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tools */}
      <section className="mx-auto px-4 py-12 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className="text-xs uppercase tracking-wider mb-6">Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
            {Object.entries(tools).map(([category, items]) => (
              <div key={category} className="border-r-2 border-black last:border-r-0">
                <div className="border-b-2 border-black p-3 bg-white">
                  <div className="text-xs uppercase">{category}</div>
                </div>
                <div className="p-3">
                  <ul className="space-y-1">
                    {items.map((tool) => (
                      <li key={tool} className="text-sm">
                        — {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="border-2 border-black p-8 text-center"
        >
          <h2 className="text-2xl uppercase mb-4 tracking-tight">Let's Work Together</h2>
          <p className="text-sm mb-6 leading-relaxed max-w-2xl mx-auto">
            Currently open to new opportunities in product design, UX research, and design systems.
          </p>
          <a
            href="https://www.linkedin.com/in/anavrvenancio/"
            className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors uppercase text-sm tracking-tight border-2 border-black"
          >
            Get in Touch →
          </a>
        </motion.div>
      </section>
    </div>
  );
}