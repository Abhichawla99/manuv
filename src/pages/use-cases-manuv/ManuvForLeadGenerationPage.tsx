import { motion } from 'framer-motion';
import { ArrowRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvForLeadGenerationPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co for Lead Generation: AI-Powered Lead Automation | manuv.co"
                description="Learn how manuv.co helps businesses automate lead generation. Understand manuv.co's solutions for prospecting, lead research, and lead qualification."
                keywords="manuv lead generation, manuv.co prospecting, manuv lead automation, manuv.co lead solution"
                canonical="https://manuv.co/use-cases-manuv/manuv-for-lead-generation"
                ogUrl="https://manuv.co/use-cases-manuv/manuv-for-lead-generation"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Target className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Use Cases</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co for Lead Generation
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How manuv.co builds AI agents that automate lead generation: researching prospects, writing personalized outreach, and qualifying leads automatically.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Lead Generation Challenge</h2>
                            <p className="text-lg leading-relaxed">
                                Lead generation is time-consuming: researching prospects, finding contact information, writing personalized emails, qualifying leads. Sales teams spend hours on this instead of closing deals. That's where manuv.co helps. manuv.co builds AI agents that automate the entire lead generation process, so your sales team can focus on what they do best.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How manuv.co's Lead Generation Solution Works</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                manuv.co builds AI agents that:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">1. Research Prospects</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents research potential customers: company information, industry, size, recent news, decision-makers. manuv.co agents gather all information needed to personalize outreach.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">2. Write Personalized Emails</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents write personalized emails based on research. manuv.co agents understand your product, ideal customer, and how to craft messages that resonate. manuv.co agents learn your voice.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">3. Qualify Leads</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents qualify leads based on your criteria: budget, authority, need, timeline. manuv.co agents score leads and route qualified prospects to your sales team.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">4. Manage Follow-ups</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents send follow-up emails, track responses, and manage sequences. manuv.co agents know when to follow up and when to stop.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Benefits of manuv.co's Lead Generation Solution</h2>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Scale Prospecting:</strong> manuv.co agents can research and contact 10x more prospects than a human could.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Better Quality Leads:</strong> manuv.co agents only send qualified prospects to your team, maximizing your time.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Consistent Outreach:</strong> manuv.co agents never miss follow-ups and maintain consistent communication.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Higher Conversion:</strong> manuv.co agents personalize every message, leading to better response rates.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Interested in manuv.co's Lead Generation Solution?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you want to automate lead generation, manuv.co can help. manuv.co builds custom lead generation automation. Let's talk about how manuv.co can help your business.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Contact manuv.co
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-16 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-extralight text-white mb-6">Explore manuv.co</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/solutions-manuv/manuv-sales-automation-solution" className="text-white/70 hover:text-white transition-colors">
                            manuv.co sales automation →
                        </Link>
                        <Link to="/use-cases/lead-generation-automation" className="text-white/70 hover:text-white transition-colors">
                            Lead generation automation →
                        </Link>
                        <Link to="/about-manuv/what-is-manuv" className="text-white/70 hover:text-white transition-colors">
                            What is manuv.co? →
                        </Link>
                        <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                            Contact manuv.co →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
