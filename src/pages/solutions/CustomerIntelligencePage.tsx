import { motion } from 'framer-motion';
import { ArrowRight, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const CustomerIntelligencePage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Customer Intelligence Platform | AI Customer Intelligence | manuv.co"
                description="AI-powered customer intelligence platform. Understand customer behavior, predict needs, and deliver personalized experiences with AI-driven customer insights."
                keywords="customer intelligence, AI customer intelligence, customer insights, customer analytics, customer behavior analysis, customer intelligence platform, customer data intelligence"
                canonical="https://manuv.co/solutions/customer-intelligence"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">Customer Intelligence Platform</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Transform customer data into actionable intelligence. Understand behavior, predict needs, and deliver personalized experiences.</p>
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
                        Businesses have vast amounts of customer data scattered across systems, but struggle to turn it into actionable insights. Without unified customer intelligence, companies miss opportunities to personalize experiences, predict churn, and maximize customer lifetime value.
                    </p>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">The Solution</h2>
                    <p className="text-xl font-light text-white/70 mb-12 leading-relaxed max-w-4xl">
                        Our customer intelligence platform aggregates data from all touchpoints, analyzes behavior patterns, predicts customer needs, and delivers personalized recommendations. AI agents continuously monitor customer interactions, identify trends, and trigger automated actions to improve customer experience.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: '360° Customer View', description: 'Unified view of all customer interactions, transactions, and behaviors across channels' },
                            { title: 'Behavioral Analytics', description: 'AI-powered analysis of customer behavior patterns and preferences' },
                            { title: 'Predictive Insights', description: 'Predict churn risk, upsell opportunities, and customer lifetime value' },
                            { title: 'Personalization Engine', description: 'Automated personalization of content, offers, and experiences' },
                            { title: 'Real-Time Alerts', description: 'Instant notifications for important customer events and opportunities' },
                            { title: 'Automated Actions', description: 'Trigger automated workflows based on customer intelligence insights' }
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
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Customer Intelligence Features</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'CRM Enrichment', link: '/automations/crm-enrichment-engine', description: 'Auto-enrich customer profiles' },
                            { title: 'AI Data Agent', link: '/agents/ai-data-agent', description: 'Process and analyze customer data' },
                            { title: 'Customer Service Automation', link: '/use-cases/customer-service-automation', description: 'Automate customer service workflows' }
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
                            { metric: '40%', description: 'Increase in customer lifetime value' },
                            { metric: '35%', description: 'Reduction in churn rate' },
                            { metric: '50%', description: 'Improvement in personalization effectiveness' }
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
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Ready for customer intelligence?</h2>
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
