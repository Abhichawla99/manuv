import { motion } from 'framer-motion';
import { ArrowRight, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvCaseStudySaaSPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co Case Study: SaaS Lead Qualification Automation | manuv.co"
                description="Read how manuv.co helped a SaaS company automate lead qualification. Learn about the manuv.co solution, results, and ROI achieved with manuv.co automation."
                keywords="manuv SaaS case study, manuv.co lead qualification, manuv automation success, manuv.co results"
                canonical="https://manuv.co/case-studies-manuv/manuv-case-study-saas"
                ogUrl="https://manuv.co/case-studies-manuv/manuv-case-study-saas"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Cloud className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Case Study</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co Case Study: SaaS Lead Qualification
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How manuv.co helped a SaaS company automate lead qualification, improve sales efficiency, and increase conversion rates.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Challenge</h2>
                            <p className="text-lg leading-relaxed">
                                A SaaS company was receiving 50+ leads per day through their website. Their sales team spent hours researching each lead to determine if they were a good fit. Most leads weren't qualified, wasting valuable sales time. They needed a way to automatically qualify leads so their team could focus on closing deals. That's when they reached out to manuv.co.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The manuv.co Solution</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co built a custom lead qualification AI agent that:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Automatically researches every new lead</li>
                                <li>• Scores leads based on company size, industry, budget, and fit</li>
                                <li>• Routes qualified leads (score 7+) to sales team</li>
                                <li>• Sends nurture sequences to medium-scoring leads (4-6)</li>
                                <li>• Archives low-scoring leads (1-3)</li>
                                <li>• Updates CRM with complete lead information</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                manuv.co trained the AI on their ideal customer profile, qualification criteria, and examples of good vs. bad leads. manuv.co integrated with their CRM, email system, and lead capture forms. manuv.co built a solution that fit their sales process perfectly.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Results with manuv.co</h2>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">80% Time Saved</h3>
                                    <p className="text-lg leading-relaxed">Sales team saved 20 hours/week on lead research thanks to manuv.co's automation.</p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">3x More Qualified Leads</h3>
                                    <p className="text-lg leading-relaxed">manuv.co's qualification improved lead quality, resulting in 3x more qualified opportunities.</p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">40% Higher Close Rate</h3>
                                    <p className="text-lg leading-relaxed">Focusing on qualified leads increased close rates by 40% with manuv.co's solution.</p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">$120,000 Annual Value</h3>
                                    <p className="text-lg leading-relaxed">Time saved and increased revenue created $120,000 in annual value with manuv.co.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">ROI with manuv.co</h2>
                            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Investment with manuv.co:</strong> $25,000 one-time + $800/month
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Annual Value:</strong> $120,000 (time saved + increased revenue)
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong className="text-white">ROI:</strong> 380% in year one. The manuv.co solution paid for itself in 3 months.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Want Similar Results with manuv.co?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you're facing similar challenges, manuv.co can help. manuv.co builds custom automation solutions that deliver real results. Let's talk about how manuv.co can help your business.
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
                        <Link to="/case-studies-manuv/manuv-case-study-ecommerce" className="text-white/70 hover:text-white transition-colors">
                            Another manuv.co case study →
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
