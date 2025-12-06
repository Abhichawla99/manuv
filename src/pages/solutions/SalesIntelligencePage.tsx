import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const SalesIntelligencePage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Sales Intelligence Platform | AI Sales Intelligence | manuv.co"
                description="AI-powered sales intelligence platform. Automate lead research, enrich prospect data, predict deal outcomes, and optimize sales performance with AI-driven insights."
                keywords="sales intelligence, AI sales intelligence, sales insights, sales analytics, sales performance, sales intelligence platform, sales data intelligence"
                canonical="https://manuv.co/solutions/sales-intelligence"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">Sales Intelligence Platform</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Transform sales data into actionable intelligence. Automate research, enrich leads, predict outcomes, and optimize sales performance.</p>
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
                        Sales teams waste hours on manual research, data entry, and lead qualification. Without sales intelligence, reps lack the insights needed to prioritize opportunities, personalize outreach, and close deals faster. Critical information is scattered across systems, making it impossible to get a complete picture of prospects.
                    </p>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">The Solution</h2>
                    <p className="text-xl font-light text-white/70 mb-12 leading-relaxed max-w-4xl">
                        Our sales intelligence platform automates lead research, enriches prospect data, predicts deal outcomes, and provides real-time insights. AI agents continuously research prospects, update CRM records, score leads, and recommend next best actions to maximize sales performance.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Automated Lead Research', description: 'AI agents research prospects, find contact information, and gather company insights automatically' },
                            { title: 'Data Enrichment', description: 'Automatically enrich CRM records with firmographic, technographic, and intent data' },
                            { title: 'Lead Scoring', description: 'AI-powered lead scoring based on behavior, fit, and engagement signals' },
                            { title: 'Deal Prediction', description: 'Predict deal outcomes, identify at-risk opportunities, and recommend actions' },
                            { title: 'Sales Analytics', description: 'Real-time dashboards and insights on pipeline health, conversion rates, and performance' },
                            { title: 'Next Best Action', description: 'AI recommendations for personalized outreach, follow-ups, and deal strategies' }
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
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Sales Intelligence Features</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'AI SDR Agent', link: '/agents/ai-sdr-agent', description: 'Automated prospecting and research' },
                            { title: 'CRM Enrichment', link: '/automations/crm-enrichment-engine', description: 'Auto-enrich lead data' },
                            { title: 'Lead Qualification', link: '/automations/lead-qualification-routing', description: 'Auto-qualify and route leads' }
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
                            { metric: '3x', description: 'Increase in qualified leads' },
                            { metric: '25%', description: 'Improvement in win rate' },
                            { metric: '40%', description: 'Reduction in sales cycle time' }
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
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Ready for sales intelligence?</h2>
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
