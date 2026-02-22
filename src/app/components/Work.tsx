import { motion } from 'motion/react';

interface WorkProps {
  onCaseStudyClick: (id: number) => void;
}

const caseStudies = [
  {
    id: 1,
    title: 'Nokia Design System',
    category: 'Design Systems',
    description: 'Building a comprehensive design system for a Fortune 500 company, serving 50+ product teams',
    year: '2024-Present',
    tags: ['Design Systems', 'Component Library', 'Documentation'],
    image: 'https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc3MDYyMDQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Nokia Cloud Operations Manager',
    category: 'Product Design',
    description: 'Reimagining the mobile banking experience for 2M+ users with focus on accessibility and trust',
    year: '2024',
    tags: ['Mobile Design', 'UX Research', 'Accessibility'],
    image: 'https://images.unsplash.com/photo-1690627931320-16ac56eb2588?q=80&w=3586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Teya Customer Service Platform',
    category: 'Product Design',
    description: 'Empowering frontline teams to support customers',
    year: '2021-2023',
    tags: ['Product Design', 'User testing', 'Internal tools optimization'],
    image: 'https://images.unsplash.com/photo-1755985022555-09c0ec136e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcHJvZHVjdCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzA2NDgyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Work({ onCaseStudyClick }: WorkProps) {
  return (
    <div className="min-h-screen">
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-4xl lg:text-6xl uppercase tracking-tight mb-4 leading-none">
            Selected Work
          </h1>
          <p className="text-base max-w-3xl mb-12 leading-relaxed">
            Case studies demonstrating strategic thinking, user research, and systematic design approach.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-0">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-2 border-black mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Metadata */}
                <div className="lg:col-span-4 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                  <div className="border-b-2 border-black p-3">
                    <div className="text-xs uppercase mb-1">Title</div>
                    <div className="font-normal">{study.title}</div>
                  </div>
                  <div className="border-b-2 border-black p-3">
                    <div className="text-xs uppercase mb-1">Category</div>
                    <div>{study.category}</div>
                  </div>
                  <div className="border-b-2 border-black p-3">
                    <div className="text-xs uppercase mb-1">Year</div>
                    <div>{study.year}</div>
                  </div>
                  <div className="border-b-2 border-black p-3">
                    <div className="text-xs uppercase mb-1">Description</div>
                    <div className="text-sm leading-relaxed">{study.description}</div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs uppercase mb-2">Tags</div>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 border border-black text-xs uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-8">
                  <div 
                    className="aspect-[4/3] bg-gray-100 cursor-pointer transition-colors relative group"
                  >
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                      <button 
                        onClick={() => onCaseStudyClick(study.id)}
                        className="opacity-0 group-hover:opacity-100 px-6 py-3 bg-white border-2 border-black uppercase text-sm tracking-tight hover:bg-black hover:text-white transition-colors"
                      >
                        View Case Study →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}