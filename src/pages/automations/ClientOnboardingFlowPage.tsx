import { motion } from 'framer-motion';
import { ArrowRight, FileText, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ClientOnboardingFlowPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Client Onboarding Automation | Automated Onboarding Workflows | manuv.co"
                description="Automated client onboarding flow that auto-generates proposals, contracts, checklists, and sends them to clients at the right time. Streamline client onboarding."
                keywords="client onboarding automation, onboarding workflow automation, automated client onboarding, proposal generation automation, contract automation, onboarding process automation"
                canonical="https://manuv.co/automations/client-onboarding-flow"
            />

            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-2 text-primary mb-6">
                            <FileText className="w-5 h-5" />
                            <span className="text-xs font-light uppercase tracking-[0.2em]">Automation</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">Client Onboarding Flow</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Auto-generates proposals, contracts, checklists, and sends them to clients at the right time. Streamline onboarding from start to finish.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">Document Generation</div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">Automated Workflows</div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">Timeline Management</div>
                        </div>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">The Problem</span>
                            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">Manual onboarding is slow and inconsistent</h2>
                            <p className="text-lg font-light text-white/60 leading-relaxed mb-6">Onboarding takes days. Documents are manually created. Steps get missed. Client experience suffers.</p>
                            <ul className="space-y-3">
                                {['Onboarding takes 5-10 days', 'Manual document creation', 'Inconsistent process', 'Steps get missed', 'Poor client experience'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-px w-4 bg-white/20 mt-3" />
                                        <span className="text-white/70 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Onboarding Time</span>
                                    <span className="text-2xl font-light text-white">5-10 days</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Completion Rate</span>
                                    <span className="text-2xl font-light text-white">70-80%</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Client Satisfaction</span>
                                    <span className="text-2xl font-light text-white">3.5/5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">The Solution</span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">Automated onboarding workflow</h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl mx-auto">Our automation generates documents, manages timelines, and guides clients through onboarding automatically.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { icon: FileText, title: 'Document Generation', description: 'Auto-generates proposals, contracts, and checklists' },
                            { icon: CheckCircle, title: 'Workflow Automation', description: 'Manages onboarding steps and timelines' },
                            { icon: TrendingUp, title: 'Client Communication', description: 'Sends automated updates and reminders' }
                        ].map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                    <Icon className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-xl font-light text-white mb-3">{feature.title}</h3>
                                    <p className="text-sm font-light text-white/60">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">Results</span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">Faster, smoother onboarding</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { metric: '2-3 days', label: 'Onboarding Time', description: 'Faster completion' },
                            { metric: '100%', label: 'Completion Rate', description: 'All steps completed' },
                            { metric: '4.8/5', label: 'Client Satisfaction', description: 'Better experience' },
                            { metric: '90%', label: 'Time Reduction', description: 'Less manual work' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
                                <div className="text-5xl font-light text-primary mb-3">{item.metric}</div>
                                <div className="text-lg font-light text-white mb-2">{item.label}</div>
                                <div className="text-sm font-light text-white/50">{item.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Ready to automate onboarding?</h2>
                        <p className="text-lg font-light text-white/60 mb-10">Book a free strategy call to discuss automated client onboarding</p>
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
