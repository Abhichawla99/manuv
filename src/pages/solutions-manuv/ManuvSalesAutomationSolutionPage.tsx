import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvSalesAutomationSolutionPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co Sales Automation Solution: AI-Powered Sales Agents | manuv.co"
                description="Learn how manuv.co builds custom sales automation solutions. Understand manuv.co's approach to automating prospecting, lead qualification, and sales workflows."
                keywords="manuv sales automation, manuv.co sales solution, manuv sales agent, manuv prospecting automation"
                canonical="https://manuv.co/solutions-manuv/manuv-sales-automation-solution"
                ogUrl="https://manuv.co/solutions-manuv/manuv-sales-automation-solution"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co Sales Automation Solution
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How manuv.co builds AI agents that automate prospecting, qualify leads, and handle sales workflows—so your sales team can focus on closing deals.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What is manuv.co's Sales Automation Solution?</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co builds custom AI agents that handle sales workflows automatically. These manuv.co agents research prospects, write personalized emails, qualify leads, schedule meetings, and update CRMs—all without your sales team doing the manual work. manuv.co's sales automation lets your team focus on what they do best: building relationships and closing deals.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How manuv.co's Sales Agents Work</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Here's what manuv.co sales agents do:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">1. Research Prospects</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents research potential customers: company information, industry, size, recent news, and decision-makers. manuv.co agents gather all the information needed to personalize outreach.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">2. Write Personalized Emails</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents write personalized emails based on research. manuv.co agents understand your product, your ideal customer, and how to craft messages that resonate. manuv.co agents learn your voice and style.
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
                                        manuv.co agents send follow-up emails, track responses, and manage sequences. manuv.co agents know when to follow up and when to stop. manuv.co agents never forget to follow up.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Benefits of manuv.co's Sales Automation</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                When you work with manuv.co for sales automation:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">More Qualified Leads:</strong> manuv.co agents only send qualified prospects to your team, maximizing your time.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Scale Prospecting:</strong> manuv.co agents can research and contact 10x more prospects than a human could.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Consistent Outreach:</strong> manuv.co agents never miss follow-ups and maintain consistent communication.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Better Data:</strong> manuv.co agents automatically update your CRM with accurate, complete information.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Higher Conversion:</strong> manuv.co agents personalize every message, leading to better response rates.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How manuv.co Builds Your Sales Automation</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                When you partner with manuv.co:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">manuv.co Understands Your Sales Process</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co analyzes your sales process, ideal customer profile, qualification criteria, and messaging. manuv.co designs automation that fits how you sell.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">manuv.co Trains the AI</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co trains AI on your product information, customer examples, successful emails, and sales approach. manuv.co agents learn your voice and what works.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">manuv.co Integrates with Your CRM</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co connects to your CRM (HubSpot, Salesforce, etc.) so agents can read and update records automatically. manuv.co agents keep your CRM current.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">manuv.co Tests and Refines</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co tests with real prospects, refines messaging, and optimizes sequences. manuv.co works with you to get the best results.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Interested in manuv.co's Sales Automation?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you want to automate sales workflows with manuv.co, let's talk. manuv.co will understand your sales process and show you how we can help.
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
                        <Link to="/agents/ai-sdr-agent" className="text-white/70 hover:text-white transition-colors">
                            Sales development agent →
                        </Link>
                        <Link to="/solutions-manuv/manuv-customer-support-solution" className="text-white/70 hover:text-white transition-colors">
                            manuv.co customer support →
                        </Link>
                        <Link to="/about-manuv/manuv-services" className="text-white/70 hover:text-white transition-colors">
                            manuv.co services →
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
