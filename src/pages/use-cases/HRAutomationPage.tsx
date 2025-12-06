import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const HRAutomationPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="HR Automation | AI-Powered HR Automation Solutions | manuv.co"
                description="Complete HR automation solutions. Automate recruitment, onboarding, employee management, and HR workflows with AI-powered agents and automation systems."
                keywords="HR automation, AI HR automation, HR workflow automation, automated recruitment, HR AI agents, employee onboarding automation, HR process automation"
                canonical="https://manuv.co/use-cases/hr-automation"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">HR Automation</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Transform your HR operations with AI-powered automation. Streamline recruitment, onboarding, and employee management processes.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">The Problem</h2>
                    <p className="text-xl font-light text-white/70 mb-8 leading-relaxed max-w-4xl">
                        HR teams are overwhelmed with manual tasks: screening resumes, scheduling interviews, processing paperwork, managing employee data, and handling repetitive inquiries. These time-consuming processes reduce HR's ability to focus on strategic initiatives and employee experience.
                    </p>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">The Solution</h2>
                    <p className="text-xl font-light text-white/70 mb-12 leading-relaxed max-w-4xl">
                        AI-powered HR automation handles recruitment screening, candidate communication, onboarding workflows, document processing, and employee data management. Our AI agents can interview candidates, process applications, manage onboarding tasks, and answer employee questions 24/7.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Automated Recruitment', description: 'AI agents screen resumes, schedule interviews, and communicate with candidates' },
                            { title: 'Smart Onboarding', description: 'Automated onboarding workflows with document processing and task management' },
                            { title: 'Employee Data Management', description: 'Automated data entry, updates, and synchronization across HR systems' },
                            { title: '24/7 HR Support', description: 'AI agents answer employee questions and handle routine HR inquiries' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                <h3 className="text-xl font-light text-white mb-3">{item.title}</h3>
                                <p className="text-sm font-light text-white/60">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">HR Automation Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Client Onboarding Flow', link: '/automations/client-onboarding-flow', description: 'Automated employee onboarding workflows' },
                            { title: 'Document Processing', link: '/automations/document-processing-pipeline', description: 'Process HR documents automatically' },
                            { title: 'AI Operations Agent', link: '/agents/ai-operations-agent', description: 'Automate HR operations and workflows' }
                        ].map((item, i) => (
                            <Link key={i} to={item.link} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all group">
                                <h3 className="text-xl font-light text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm font-light text-white/60 mb-4">{item.description}</p>
                                <span className="text-xs font-light text-primary flex items-center gap-2">Learn more <ExternalLink className="w-3 h-3" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Results</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { metric: '80%', description: 'Reduction in time-to-hire' },
                            { metric: '90%', description: 'Automation of routine HR tasks' },
                            { metric: '24/7', description: 'HR support availability' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                                <div className="text-5xl font-extralight text-primary mb-3">{item.metric}</div>
                                <div className="text-white/70 font-light">{item.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Ready to automate HR?</h2>
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
