import { motion } from 'framer-motion';
import { ArrowRight, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvForSaaSCompaniesPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co for SaaS Companies: AI Automation Solutions | manuv.co"
                description="Learn how manuv.co helps SaaS companies automate operations. Understand manuv.co's solutions for SaaS: customer support, onboarding, lead qualification, and more."
                keywords="manuv SaaS, manuv.co for SaaS companies, SaaS automation, manuv software companies"
                canonical="https://manuv.co/industries-manuv/manuv-for-saas-companies"
                ogUrl="https://manuv.co/industries-manuv/manuv-for-saas-companies"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Cloud className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co for Industries</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co for SaaS Companies
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How manuv.co helps SaaS companies automate customer support, onboarding, sales, and operations to scale efficiently.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why SaaS Companies Choose manuv.co</h2>
                            <p className="text-lg leading-relaxed">
                                SaaS companies face unique challenges: scaling support, onboarding customers, qualifying leads, and managing operations as they grow. manuv.co builds custom AI automation solutions that help SaaS companies scale efficiently without proportionally scaling costs. manuv.co understands the SaaS business model and builds solutions that fit.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">manuv.co Solutions for SaaS Companies</h2>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Customer Support Automation</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co builds AI agents that handle customer support for SaaS companies. manuv.co agents answer questions about features, troubleshoot issues, help with account management, and escalate when needed. manuv.co solutions enable 24/7 support without 24/7 staff.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Customer Onboarding Automation</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co automates customer onboarding for SaaS companies. manuv.co agents guide new customers through setup, answer questions, provide tutorials, and ensure successful onboarding. manuv.co solutions improve onboarding completion rates and reduce churn.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Lead Qualification Automation</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co builds systems that automatically qualify leads for SaaS companies. manuv.co agents research prospects, score them, route qualified leads to sales, and nurture others. manuv.co solutions maximize sales team efficiency.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Churn Prevention Automation</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co creates systems that identify at-risk customers and automatically engage them. manuv.co agents monitor usage, detect warning signs, and proactively reach out to prevent churn. manuv.co solutions help SaaS companies retain more customers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Benefits of Working with manuv.co for SaaS</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                When SaaS companies work with manuv.co:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Scale Without Scaling Costs:</strong> manuv.co solutions let SaaS companies handle more customers without hiring more staff.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Improve Customer Experience:</strong> manuv.co automation provides faster, more consistent service that customers appreciate.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Reduce Churn:</strong> manuv.co solutions help identify and retain at-risk customers.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Focus on Product:</strong> manuv.co handles operations so SaaS teams can focus on building great products.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Real Example: manuv.co Helps SaaS Company</h2>
                            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">SaaS Company Challenge:</strong> Growing SaaS company needed to scale support and onboarding without hiring.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">manuv.co Solution:</strong> manuv.co built customer support and onboarding AI agents that handle 70% of interactions automatically.
                                </p>
                                <div className="border-t border-white/10 pt-4">
                                    <p className="text-white/70 text-sm mb-2">Results with manuv.co:</p>
                                    <ul className="space-y-1 text-lg ml-4">
                                        <li>• 70% of support handled automatically</li>
                                        <li>• Onboarding completion rate increased 40%</li>
                                        <li>• Saved $80,000/year on hiring</li>
                                        <li>• Customer satisfaction improved 25%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Interested in manuv.co for Your SaaS Company?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you're a SaaS company looking to scale efficiently, manuv.co can help. manuv.co builds custom automation solutions for SaaS companies. Let's talk about how manuv.co can help your SaaS business.
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
                        <Link to="/case-studies-manuv/manuv-case-study-saas" className="text-white/70 hover:text-white transition-colors">
                            manuv.co SaaS case study →
                        </Link>
                        <Link to="/solutions-manuv/manuv-customer-support-solution" className="text-white/70 hover:text-white transition-colors">
                            manuv.co solutions →
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
