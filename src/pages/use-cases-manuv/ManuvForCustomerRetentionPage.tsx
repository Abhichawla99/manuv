import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvForCustomerRetentionPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co for Customer Retention: AI Automation Solutions | manuv.co"
                description="Learn how manuv.co helps businesses automate customer retention. Understand manuv.co's solutions for identifying at-risk customers and preventing churn."
                keywords="manuv customer retention, manuv.co churn prevention, manuv retention automation, manuv.co customer success"
                canonical="https://manuv.co/use-cases-manuv/manuv-for-customer-retention"
                ogUrl="https://manuv.co/use-cases-manuv/manuv-for-customer-retention"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Use Cases</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co for Customer Retention
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How manuv.co builds AI automation systems that identify at-risk customers and automatically engage them to prevent churn.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Customer Retention Challenge</h2>
                            <p className="text-lg leading-relaxed">
                                Losing customers is expensive. It costs 5-25x more to acquire a new customer than to retain an existing one. Yet many businesses struggle to identify at-risk customers and engage them proactively. That's where manuv.co helps. manuv.co builds AI automation systems that monitor customer behavior, identify warning signs, and automatically engage at-risk customers to prevent churn.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How manuv.co's Customer Retention Solution Works</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                manuv.co builds systems that:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">1. Monitor Customer Behavior</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co systems monitor customer usage, engagement, payment patterns, and support interactions. manuv.co identifies patterns that indicate risk: decreased usage, missed payments, support complaints, etc.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">2. Identify At-Risk Customers</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co AI analyzes data to identify customers at risk of churning. manuv.co scores customers based on risk factors and flags those needing attention. manuv.co systems learn what patterns predict churn.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">3. Automatically Engage</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents automatically reach out to at-risk customers with personalized messages, offers, or support. manuv.co agents understand why a customer is at risk and tailor engagement accordingly.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">4. Escalate When Needed</h3>
                                    <p className="text-lg leading-relaxed">
                                        For high-risk customers, manuv.co systems escalate to your team with all context. manuv.co ensures your team can intervene when automated engagement isn't enough.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Benefits of manuv.co's Customer Retention Solution</h2>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Proactive Retention:</strong> manuv.co identifies at-risk customers before they churn, giving you time to save them.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Automated Engagement:</strong> manuv.co automatically engages at-risk customers, so you don't have to manually monitor and reach out.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Personalized Approach:</strong> manuv.co agents personalize engagement based on why each customer is at risk.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Reduced Churn:</strong> manuv.co solutions help businesses retain more customers and reduce churn rates.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Interested in manuv.co's Customer Retention Solution?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you want to reduce churn and retain more customers, manuv.co can help. manuv.co builds custom customer retention automation. Let's talk about how manuv.co can help your business.
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
                        <Link to="/use-cases/customer-retention-automation" className="text-white/70 hover:text-white transition-colors">
                            Customer retention automation →
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
