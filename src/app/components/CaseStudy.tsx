import { motion } from 'motion/react';

interface CaseStudyProps {
  id: number;
  onBack: () => void;
}

const caseStudyData = {
  1: {
    title: 'Nokia Design System',
    subtitle: 'Building a comprehensive design system for a Fortune 500 company',
    category: 'Design Systems',
    year: '2024-Present',
    hero: 'https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc3MDYyMDQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    overview: {
      problem: 'A Fortune 500 enterprise with 50+ product teams was experiencing significant design inconsistencies, duplicated work, and slow development cycles. Each team built their own components, resulting in 200+ different button styles across products.',
      role: 'Lead Product Designer & Design Systems Architect',
      timeline: '18 months (ongoing)',
      team: 'Collaborated with 3 designers, 5 engineers, and product leadership',
      impact: [
        '70% reduction in design-to-development time',
        '50+ teams adopted the system within 6 months',
        '85% designer satisfaction rate',
        'Saved ~$2M annually in development costs',
      ],
    },
    sections: [
      {
        title: 'Context & Challenge',
        content: 'The organization had grown rapidly through acquisitions, resulting in a fragmented product ecosystem. Design and engineering teams worked in silos, creating duplicate components and inconsistent experiences. Leadership recognized this was creating technical debt and slowing innovation.',
        subsections: [
          {
            subtitle: 'Key Problems Identified',
            points: [
              'No single source of truth for design patterns',
              'Inconsistent component implementation across platforms',
              'Lack of accessibility standards',
              'Designers spending 40% of time on redundant work',
              'Engineering teams rebuilding the same components',
            ],
          },
        ],
      },
      {
        title: 'Research & Discovery',
        content: 'I led a comprehensive audit and stakeholder engagement process to understand the full scope of the challenge and build buy-in across the organization.',
        image: 'https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJ2aWV3JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzcwNjI0OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        subsections: [
          {
            subtitle: 'Discovery Activities',
            points: [
              'Conducted 30+ stakeholder interviews with designers, engineers, and PMs',
              'Audited 12 products to catalog all existing patterns and components',
              'Analyzed design files from 50+ designers to understand common workflows',
              'Reviewed competitor and industry design systems for best practices',
              'Established metrics and KPIs for measuring success',
            ],
          },
          {
            subtitle: 'Key Insights',
            points: [
              'Teams wanted to move faster but lacked shared tools',
              'Engineers were willing to adopt if documentation was clear',
              'Accessibility was a major concern with no current standards',
              'Mobile and responsive patterns were the biggest pain points',
            ],
          },
        ],
      },
      {
        title: 'Strategy & Approach',
        content: 'Based on research insights, I developed a phased rollout strategy that balanced immediate impact with long-term sustainability.',
        subsections: [
          {
            subtitle: 'Design Principles',
            points: [
              'Accessible by default - WCAG 2.1 AA compliance minimum',
              'Composable - Components work together seamlessly',
              'Consistent - Predictable patterns across products',
              'Documented - Clear guidelines for every component',
              'Flexible - Customizable while maintaining consistency',
            ],
          },
          {
            subtitle: 'Implementation Phases',
            points: [
              'Phase 1: Foundation (Tokens, Core Components, Documentation)',
              'Phase 2: Patterns (Forms, Navigation, Data Display)',
              'Phase 3: Advanced Components (Charts, Tables, Complex Interactions)',
              'Phase 4: Governance (Contribution model, Version management)',
            ],
          },
        ],
      },
      {
        title: 'Solution',
        content: 'I designed and implemented a comprehensive design system including component library, design tokens, documentation, and governance model.',
        image: 'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzcwNjI5MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        subsections: [
          {
            subtitle: 'Component Library',
            points: [
              'Built 60+ components in Figma with comprehensive variants',
              'Developed React component library with full TypeScript support',
              'Created iOS and Android native component specifications',
              'Implemented automated visual regression testing',
            ],
          },
          {
            subtitle: 'Design Tokens',
            points: [
              'Established semantic token system (color, typography, spacing, elevation)',
              'Created theme structure supporting light/dark modes and brand variations',
              'Built token transformation pipeline for all platforms',
            ],
          },
          {
            subtitle: 'Documentation & Enablement',
            points: [
              'Created comprehensive documentation site with live examples',
              'Developed onboarding program with workshops and office hours',
              'Published contribution guidelines and component request process',
              'Built Slack community for support and feedback',
            ],
          },
        ],
      },
      {
        title: 'Results & Impact',
        content: 'The design system transformed how teams work, delivering measurable improvements in efficiency, consistency, and satisfaction.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDYwOTMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
        subsections: [
          {
            subtitle: 'Quantitative Results',
            points: [
              '70% reduction in time from design to development',
              '50+ product teams adopted within first 6 months',
              'Design consistency score improved from 45% to 92%',
              '~$2M in annual cost savings from reduced duplicate work',
              '60% faster onboarding for new designers',
            ],
          },
          {
            subtitle: 'Qualitative Impact',
            points: [
              'Designers report spending more time on strategic work vs. pixel pushing',
              'Engineering teams appreciate clear specs and reusable components',
              'Product teams shipping features 2x faster',
              'Accessibility complaints reduced by 85%',
            ],
          },
          {
            subtitle: 'Key Learnings',
            points: [
              'Early stakeholder engagement was critical for adoption',
              'Documentation quality directly correlates with usage',
              'Governance model must balance control with flexibility',
              'Regular communication and showcases maintain momentum',
              'Measuring impact is essential for continued investment',
            ],
          },
        ],
      },
    ],
  },
  2: {
    title: 'Nokia Cloud Manager',
    subtitle: 'Reimagining the mobile banking experience for 2M+ users',
    category: 'Product Design',
    year: '2024',
    hero: 'https://images.unsplash.com/photo-1690627931320-16ac56eb2588?q=80&w=3586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    overview: {
      problem: 'A regional bank\'s mobile app had a 3.2 star rating and declining usage. Users complained about confusing navigation, difficult task completion, and lack of trust signals. The business was losing customers to digital-first competitors.',
      role: 'Lead Product Designer',
      timeline: '9 months',
      team: '2 designers, 1 researcher, 4 engineers, 1 PM',
      impact: [
        'App rating increased from 3.2 to 4.6 stars',
        '35% increase in monthly active users',
        '50% reduction in support calls',
        '40% improvement in task completion rates',
      ],
    },
    sections: [
      {
        title: 'Understanding the Problem',
        content: 'The existing app was built incrementally over 5 years without a cohesive vision, resulting in a cluttered interface and confusing user flows.',
        subsections: [
          {
            subtitle: 'Business Goals',
            points: [
              'Increase app adoption and daily active usage',
              'Reduce support costs from confused users',
              'Compete with digital-first banks',
              'Improve NPS and app store ratings',
            ],
          },
          {
            subtitle: 'Initial Hypothesis',
            points: [
              'Users struggle with findability and navigation',
              'Security concerns prevent full engagement',
              'Complex financial jargon creates barriers',
              'Accessibility issues exclude significant user segments',
            ],
          },
        ],
      },
      {
        title: 'Research & Insights',
        content: 'I led a comprehensive mixed-methods research study to understand user needs, behaviors, and pain points.',
        image: 'https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJ2aWV3JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzcwNjI0OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        subsections: [
          {
            subtitle: 'Research Methods',
            points: [
              'In-depth interviews with 24 users across demographics',
              'Usability testing of current app with 16 participants',
              'Analytics analysis of 500K user sessions',
              'Competitive analysis of 8 banking apps',
              'Accessibility audit with screen reader users',
            ],
          },
          {
            subtitle: 'Key Findings',
            points: [
              'Users open app primarily for quick balance checks and transfers',
              '68% of users never venture beyond the home screen',
              'Trust is built through clear communication and security signals',
              'Users 50+ struggled significantly with current navigation',
              'Accessibility failures blocked 15% of user base',
            ],
          },
        ],
      },
      {
        title: 'Design Process',
        content: 'I used an iterative design process, involving stakeholders and users throughout to validate direction.',
        image: 'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzcwNjI5MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        subsections: [
          {
            subtitle: 'Ideation & Exploration',
            points: [
              'Created 20+ concepts exploring different navigation patterns',
              'Sketched user flows for top 10 tasks',
              'Explored information hierarchy variations',
              'Tested lo-fi prototypes with 8 users',
            ],
          },
          {
            subtitle: 'Design Principles',
            points: [
              'Clarity over cleverness',
              'Quick access to common tasks',
              'Build trust through transparency',
              'Inclusive design for all abilities',
            ],
          },
        ],
      },
      {
        title: 'Final Solution',
        content: 'The redesigned app focused on simplicity, clarity, and accessibility while modernizing the visual design.',
        subsections: [
          {
            subtitle: 'Key Features',
            points: [
              'Reimagined home screen with account balances and quick actions',
              'Simplified navigation reduced from 8 to 4 primary tabs',
              'Redesigned transfer flow reducing steps from 7 to 3',
              'Bill pay with smart scheduling and reminders',
              'Transaction search and filtering',
              'Biometric authentication for quick, secure access',
            ],
          },
          {
            subtitle: 'Accessibility Improvements',
            points: [
              'WCAG 2.1 AA compliant throughout',
              'Increased touch targets to minimum 44x44pt',
              'Improved color contrast ratios',
              'Added screen reader optimizations',
              'Designed for dynamic type and zoom',
            ],
          },
        ],
      },
      {
        title: 'Impact & Learnings',
        content: 'The redesign exceeded business goals and significantly improved user experience.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDYwOTMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
        subsections: [
          {
            subtitle: 'Business Results',
            points: [
              'App Store rating: 3.2 → 4.6 stars',
              'Monthly active users: +35%',
              'Customer support calls: -50%',
              'Task completion rate: +40%',
              'User satisfaction (NPS): +28 points',
            ],
          },
          {
            subtitle: 'Key Takeaways',
            points: [
              'Research investment pays off - users told us exactly what they needed',
              'Accessibility improvements benefit all users, not just those with disabilities',
              'Iterative testing caught issues early and built stakeholder confidence',
              'Trust is earned through transparency and consistent experience',
              'Simplification is harder than addition but more valuable',
            ],
          },
        ],
      },
    ],
  },
  3: {
    title: 'Teya Customer Service Platform',
    subtitle: 'Mixed-methods research to improve patient portal engagement',
    category: 'Product Design',
    year: '2021-2023',
    hero: 'https://images.unsplash.com/photo-1755985022555-09c0ec136e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcHJvZHVjdCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzA2NDgyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: {
      problem: 'A healthcare system\'s patient portal had only 22% active usage despite 1.2M registered patients. Low engagement meant patients weren\'t scheduling appointments, requesting refills, or viewing test results online, creating inefficiencies for both patients and staff.',
      role: 'Lead UX Researcher',
      timeline: '6 months',
      team: '1 researcher (me), 2 designers, 1 data analyst, healthcare staff',
      impact: [
        'Identified 15 critical usability issues and opportunities',
        'Created actionable roadmap prioritized by impact',
        'Research influenced $3M product investment',
        'Post-redesign: 62% increase in portal usage',
      ],
    },
    sections: [
      {
        title: 'Research Objectives',
        content: 'The healthcare system needed to understand why patients weren\'t engaging with the portal and what would drive adoption.',
        subsections: [
          {
            subtitle: 'Core Questions',
            points: [
              'Why do patients choose not to use the portal?',
              'What are the biggest barriers to adoption?',
              'What tasks do patients most want to complete online?',
              'How do trust and privacy concerns affect usage?',
              'What differentiates engaged vs. non-engaged patients?',
            ],
          },
        ],
      },
      {
        title: 'Research Methodology',
        content: 'I designed a comprehensive mixed-methods research plan combining qualitative and quantitative approaches.',
        image: 'https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJ2aWV3JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzcwNjI0OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        subsections: [
          {
            subtitle: 'Quantitative Research',
            points: [
              'Survey of 1,200 patients (both users and non-users)',
              'Analytics analysis of 6 months of usage data',
              'Heatmap and session recording analysis',
              'Comparative analysis with industry benchmarks',
            ],
          },
          {
            subtitle: 'Qualitative Research',
            points: [
              'In-depth interviews with 32 patients across demographics',
              'Contextual inquiry in clinic waiting rooms (8 sessions)',
              'Usability testing with 16 participants',
              'Diary study with 12 patients over 2 weeks',
              'Stakeholder interviews with doctors, nurses, and admin staff',
            ],
          },
        ],
      },
      {
        title: 'Key Findings',
        content: 'The research revealed systemic issues with awareness, usability, and trust that prevented portal adoption.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDYwOTMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
        subsections: [
          {
            subtitle: 'Awareness & Onboarding',
            points: [
              '45% of patients didn\'t know the portal existed',
              'Signup process took average 12 minutes and had 40% abandonment',
              'Patients confused about what the portal could do',
              'No clear value proposition communicated',
            ],
          },
          {
            subtitle: 'Usability Issues',
            points: [
              'Medical terminology was incomprehensible to most patients',
              'Critical tasks required 7+ clicks to complete',
              'Test results presented without context or explanation',
              'Mobile experience was barely functional',
              'Search and navigation were ineffective',
            ],
          },
        ],
      },
      {
        title: 'Insights & Recommendations',
        content: 'I synthesized findings into actionable insights with prioritized recommendations based on impact and feasibility.',
        image: 'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzcwNjI5MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        subsections: [
          {
            subtitle: 'High Priority (0-3 months)',
            points: [
              'Redesign signup flow to reduce from 12 min to <3 min',
              'Add plain-language explanations for medical terms',
              'Fix critical mobile usability issues',
              'Improve appointment scheduling workflow',
              'Add clear privacy policy and security information',
            ],
          },
          {
            subtitle: 'Medium Priority (3-6 months)',
            points: [
              'Redesign test results to include context and explanations',
              'Build prescription refill optimization',
              'Create patient education content library',
              'Implement proactive notifications',
              'Add family/caregiver access features',
            ],
          },
        ],
      },
      {
        title: 'Impact & Outcomes',
        content: 'The research findings directly influenced product strategy and drove significant improvements in portal engagement.',
        subsections: [
          {
            subtitle: 'Immediate Impact',
            points: [
              'Presented findings to C-suite, securing $3M investment',
              'Recommendations adopted as product roadmap',
              'Research insights shared across organization',
              'Created patient personas and journey maps used by all teams',
            ],
          },
          {
            subtitle: 'Post-Implementation Results',
            points: [
              'Portal active usage increased from 22% to 62%',
              'Signup completion rate improved from 60% to 92%',
              'Time to complete common tasks reduced by 65%',
              'Patient satisfaction score increased 34 points',
              'Phone call volume to clinic reduced by 28%',
            ],
          },
        ],
      },
    ],
  },
};

export function CaseStudy({ id, onBack }: CaseStudyProps) {
  const study = caseStudyData[id as keyof typeof caseStudyData];

  if (!study) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-4 py-6 border-b-2 border-black">
        <button
          onClick={onBack}
          className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors uppercase text-xs tracking-tight"
        >
          ← Back to Work
        </button>
      </div>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-4 py-8 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs uppercase tracking-wider border border-black px-2 py-1">
              {study.category}
            </span>
            <span className="text-xs">{study.year}</span>
          </div>
          <h1 className="text-4xl lg:text-6xl uppercase tracking-tight mb-3 leading-none">
            {study.title}
          </h1>
          <p className="text-base max-w-4xl">
            {study.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="max-w-[1400px] mx-auto px-4 pb-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="aspect-[16/9] bg-gray-100 border-2 border-black"
        >
          <img 
            src={study.hero} 
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Overview */}
      <section className="max-w-[1400px] mx-auto px-4 py-12 border-b-2 border-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h2 className="text-xs uppercase tracking-wider mb-6">Overview</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-black">
            <div className="lg:col-span-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-6">
              <div className="text-xs uppercase mb-3">The Challenge</div>
              <p className="text-sm leading-relaxed">
                {study.overview.problem}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="border-b-2 border-black p-4">
                <div className="text-xs uppercase mb-2">Role</div>
                <p className="text-sm">{study.overview.role}</p>
              </div>
              <div className="border-b-2 border-black p-4">
                <div className="text-xs uppercase mb-2">Timeline</div>
                <p className="text-sm">{study.overview.timeline}</p>
              </div>
              <div className="p-4">
                <div className="text-xs uppercase mb-2">Team</div>
                <p className="text-sm">{study.overview.team}</p>
              </div>
            </div>
          </div>

          <div className="mt-0 border-2 border-t-0 border-black p-6 bg-gray-50">
            <div className="text-xs uppercase mb-4">Impact</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.overview.impact.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-xs">—</span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Detailed Sections */}
      {study.sections.map((section, sectionIdx) => (
        <section 
          key={sectionIdx} 
          className="max-w-[1400px] mx-auto px-4 py-12 border-b-2 border-black"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-xs uppercase tracking-wider mb-6">
              {section.title}
            </h2>
            
            <div className="mb-8">
              <p className="text-sm leading-relaxed max-w-4xl">
                {section.content}
              </p>
            </div>

            {section.image && (
              <div className="aspect-[16/9] bg-gray-100 border-2 border-black mb-8">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {section.subsections && (
              <div className="space-y-0">
                {section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx} className="border-2 border-black mb-4">
                    <div className="border-b-2 border-black p-4 bg-white">
                      <div className="text-xs uppercase">{subsection.subtitle}</div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {subsection.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex gap-2">
                            <span className="text-xs">—</span>
                            <span className="text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      ))}

      {/* Next Project CTA */}
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-2 border-black p-8 text-center"
        >
          <button
            onClick={onBack}
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors uppercase text-sm tracking-tight border-2 border-black"
          >
            View More Projects →
          </button>
        </motion.div>
      </section>
    </div>
  );
}
