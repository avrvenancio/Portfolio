import { motion } from 'motion/react';
import { useState } from 'react';

interface HomeProps {
  onNavigate: (section: 'home' | 'work' | 'about') => void;
  onCaseStudyClick: (id: number) => void;
}

const featuredProjects = [
  {
    id: 1,
    title: 'Nokia Design System',
    category: 'Design Systems',
    image: 'https://images.unsplash.com/photo-1690627931320-16ac56eb2588?q=80&w=3586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Nokia Cloud Operations Manager',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1690627931320-16ac56eb2588?q=80&w=3586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Teya Customer Support Platform',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1755985022555-09c0ec136e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcHJvZHVjdCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzA2NDgyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Home({ onNavigate, onCaseStudyClick }: HomeProps) {
  const [expandedId, setExpandedId] = useState<number>(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-4 py-12 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-4xl lg:text-6xl uppercase tracking-tight mb-4 leading-none">
            Product Designer<br />
            UX Researcher<br />
            Design Systems
          </h1>
          <p className="text-base max-w-2xl mb-6 leading-relaxed">
            Creating human-centered design solutions that bridge user needs with business goals through research, strategy, and systematic thinking.
          </p>
          <button
            onClick={() => onNavigate('work')}
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors uppercase text-sm tracking-tight border-2 border-black"
          >
            View Work →
          </button>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className="text-xs uppercase tracking-wider mb-6">Latest Work</h2>
          
          <div className="border-2 border-black">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={index !== featuredProjects.length - 1 ? 'border-b-2 border-black' : ''}
              >
                {expandedId === project.id ? (
                  // Expanded state
                  <>
                    <div className="border-b-1 border-black p-3 bg-white">
                      <div className="text-xs uppercase mb-1">Title</div>
                      <div>{project.title}</div>
                    </div>
                    <div className="border-b-2 border-black p-3 bg-white">
                      <div className="text-xs uppercase mb-1">Category</div>
                      <div>{project.category}</div>
                    </div>
                    <div 
                      className="aspect-[16/9] bg-gray-100 cursor-pointer transition-colors relative group"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-opacity-90 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                        <button 
                          onClick={() => onCaseStudyClick(project.id)}
                          className="opacity-0 group-hover:opacity-100 px-6 py-3 bg-white border-2 border-black uppercase text-sm tracking-tight hover:bg-black hover:text-white transition-colors"
                        >
                          View Case Study →
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  // Collapsed state
                  <div 
                    className="p-3 bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedId(project.id)}
                  >
                    <div className="text-xs uppercase mb-1">Title</div>
                    <div>{project.title}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="max-w-[1400px] mx-auto px-4 py-12 border-t-2 border-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h2 className="text-xs uppercase tracking-wider mb-6">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
          <div className="p-6 border-r-2 border-black last:border-r-0">
              <h3 className="uppercase mb-3 text-sm tracking-tight">Product Design</h3>
              <p className="text-sm leading-relaxed">
                End-to-end product experiences from concept to launch, focusing on user flows, interaction design, and visual polish.
              </p>
            </div>
            <div className="p-6 border-r-2 border-black last:border-r-2">
              <h3 className="uppercase mb-3 text-sm tracking-tight">UX Research</h3>
              <p className="text-sm leading-relaxed">
                User interviews, usability testing, and data analysis to inform design decisions and validate solutions.
              </p>
            </div>
            <div className="p-6">
              <h3 className="uppercase mb-3 text-sm tracking-tight">Design Systems</h3>
              <p className="text-sm leading-relaxed">
                Scalable component libraries, design tokens, and documentation that maintain consistency across products.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
