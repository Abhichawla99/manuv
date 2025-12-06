import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ChoosingRightAIAgentPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Choosing the Right AI Agent | AI Agent Selection Guide | manuv.co"
                description="Complete guide to choosing the right AI agent for your business. Understand different AI agent types, use cases, and selection criteria."
                keywords="choosing AI agent, AI agent selection, AI agent types, which AI agent to use, AI agent guide, AI agent comparison, select AI agent"
                canonical="https://manuv.co/guides/choosing-right-ai-agent"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">Choosing the Right AI Agent</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Complete guide to selecting the right AI agent for your specific business needs and use cases.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">AI Agent Types</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { 
                                title: 'Customer Support Agent', 
                                link: '/agents/ai-customer-support-agent',
                                description: 'Handles customer inquiries, support tickets, and customer service tasks. Best for: Customer service automation, 24/7 support, ticket management.',
                                useCases: ['Customer service', 'Support tickets', 'FAQ handling']
                            },
                            { 
                                title: 'SDR / Outbound Agent', 
                                link: '/agents/ai-sdr-agent',
                                description: 'Automates prospecting, outreach, and sales development. Best for: Lead generation, email outreach, sales prospecting.',
                                useCases: ['Lead generation', 'Email outreach', 'Sales prospecting']
                            },
                            { 
                                title: 'Research Agent', 
                                link: '/agents/ai-research-agent',
                                description: 'Conducts research, data gathering, and analysis. Best for: Market research, competitive analysis, data collection.',
                                useCases: ['Market research', 'Data collection', 'Competitive analysis']
                            },
                            { 
                                title: 'Content Agent', 
                                link: '/agents/ai-content-agent',
                                description: 'Creates and manages content across platforms. Best for: Content creation, content repurposing, content management.',
                                useCases: ['Content creation', 'Content repurposing', 'Content management']
                            },
                            { 
                                title: 'Operations Agent', 
                                link: '/agents/ai-operations-agent',
                                description: 'Automates operational workflows and processes. Best for: Process automation, workflow management, operations optimization.',
                                useCases: ['Process automation', 'Workflow management', 'Operations']
                            },
                            { 
                                title: 'Data Agent', 
                                link: '/agents/ai-data-agent',
                                description: 'Processes, analyzes, and manages data. Best for: Data processing, data analysis, data management.',
                                useCases: ['Data processing', 'Data analysis', 'Data management']
                            }
                        ].map((item, i) => (
                            <Link key={i} to={item.link} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all group">
                                <h3 className="text-xl font-light text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm font-light text-white/60 mb-4">{item.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.useCases.map((useCase, j) => (
                                        <span key={j} className="text-xs font-light text-white/40 border border-white/10 px-2 py-1 rounded">{useCase}</span>
                                    ))}
                                </div>
                                <span className="text-xs font-light text-primary flex items-center gap-2">Learn more <ExternalLink className="w-3 h-3" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Selection Criteria</h2>
                    <div className="space-y-6">
                        {[
                            { title: 'Task Complexity', description: 'Simple repetitive tasks may need automation workflows, while complex decision-making requires AI agents.' },
                            { title: 'Data Requirements', description: 'Consider what data the agent needs access to and ensure proper security and permissions.' },
                            { title: 'Integration Needs', description: 'Evaluate which systems the agent needs to integrate with and compatibility requirements.' },
                            { title: 'Scalability', description: 'Consider future growth and whether the agent can scale with your business needs.' },
                            { title: 'Cost vs Value', description: 'Evaluate the ROI of the AI agent based on time saved, efficiency gains, and business impact.' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-light">{String(i + 1).padStart(2, '0')}</span>
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-xl font-light text-white mb-2">{item.title}</h3>
                                    <p className="text-white/70 font-light">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Need help choosing the right agent?</h2>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Schedule a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
