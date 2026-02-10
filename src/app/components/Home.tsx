import { motion } from 'motion/react';
import exampleImage from 'figma:asset/2cd0a7a1198b9a007da7ae87719b2434b9af9768.png';

interface HomeProps {
  onNavigate: (section: 'home' | 'work' | 'about') => void;
}

export function Home({ onNavigate }: HomeProps) {
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
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-black">
            {/* Featured Project 1 */}
            <div className="border-r-2 border-black last:border-r-0">
              <div className="border-b-2 border-black p-3 bg-white">
                <div className="text-xs uppercase mb-1">Title</div>
                <div>Design System Architecture</div>
              </div>
              <div className="border-b-2 border-black p-3 bg-white">
                <div className="text-xs uppercase mb-1">Type</div>
                <div>Design Systems</div>
              </div>
              <div 
                className="aspect-square bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => onNavigate('work')}
              >
                <img 
                  src={exampleImage} 
                  alt="Featured project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Featured Project 2 */}
            <div className="border-r-2 border-black last:border-r-0">
              <div className="border-b-2 border-black p-3 bg-white">
                <div className="text-xs uppercase mb-1">Title</div>
                <div>Mobile Banking Redesign</div>
              </div>
              <div className="border-b-2 border-black p-3 bg-white">
                <div className="text-xs uppercase mb-1">Type</div>
                <div>Product Design</div>
              </div>
              <div 
                className="aspect-square bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => onNavigate('work')}
              >
                <img 
                  src="https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3MDY0ODI1OXww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Mobile banking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Featured Project 3 */}
            <div>
              <div className="border-b-2 border-black p-3 bg-white">
                <div className="text-xs uppercase mb-1">Title</div>
                <div>Healthcare Portal Research</div>
              </div>
              <div className="border-b-2 border-black p-3 bg-white">
                <div className="text-xs uppercase mb-1">Type</div>
                <div>UX Research</div>
              </div>
              <div 
                className="aspect-square bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => onNavigate('work')}
              >
                <img 
                  src="https://images.unsplash.com/photo-1755985022555-09c0ec136e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcHJvZHVjdCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzA2NDgyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Healthcare research"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
            <div className="p-6 border-r-2 border-black last:border-r-0">
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