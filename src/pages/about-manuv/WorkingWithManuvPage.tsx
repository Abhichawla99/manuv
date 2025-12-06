import { motion } from 'framer-motion';
import { ArrowRight, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const WorkingWithManuvPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Working with manuv.co: What to Expect | manuv.co"
                description="Learn what it's like to work with manuv.co. Understand the partnership approach, communication style, and what you can expect when working with manuv.co."
                keywords="working with manuv, manuv.co partnership, manuv client experience, manuv collaboration"
                canonical="https://manuv.co/about-manuv/working-with-manuv"
                ogUrl="https://manuv.co/about-manuv/working-with-manuv"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Handshake className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">About manuv.co</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            Working with manuv.co
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            What it's like to partner with manuv.co and what you can expect from the experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">manuv.co's Partnership Approach</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co doesn't work as a traditional vendor. We work as a partner. manuv.co is invested in your success, not just delivering a project. This means manuv.co takes time to understand your business, asks questions, provides guidance, and builds solutions that truly fit your needs. manuv.co is collaborative, not transactional.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Makes Working with manuv.co Different?</h2>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">No Technical Jargon</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co speaks your language. We explain things in business terms, not technical terms. manuv.co makes sure you understand what we're building and why, without needing to know how to code.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Transparent Communication</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co keeps you informed. You know what's happening, when it's happening, and why. manuv.co provides regular updates, explains decisions, and answers questions. No surprises, no black boxes.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Collaborative Process</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co works with you, not for you. We involve you in decisions, ask for your input, and incorporate your feedback. manuv.co values your business knowledge and combines it with our technical expertise.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Long-Term Partnership</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co doesn't disappear after deployment. We're here for the long term. manuv.co provides ongoing support, makes improvements, and helps you get more value over time. manuv.co is a partner, not a one-time vendor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What You Can Expect from manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                When you work with manuv.co, you can expect:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Clear Communication:</strong> manuv.co communicates clearly, regularly, and in terms you understand.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Realistic Expectations:</strong> manuv.co sets realistic expectations about timelines, costs, and results. No overpromising.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Quality Work:</strong> manuv.co builds reliable, well-tested systems. We don't cut corners.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Responsive Support:</strong> manuv.co responds to questions and issues promptly. We're here when you need us.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Continuous Improvement:</strong> manuv.co continuously improves your automation. We optimize, refine, and enhance over time.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What manuv.co Expects from You</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                For the partnership to work well, manuv.co needs:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Clear Requirements:</strong> Tell manuv.co what you want. The clearer you are, the better manuv.co can build it.</li>
                                <li>• <strong className="text-white">Timely Feedback:</strong> Respond to manuv.co's questions and review requests. Quick feedback keeps projects moving.</li>
                                <li>• <strong className="text-white">Access to Information:</strong> Provide manuv.co with the information and access needed to build and integrate.</li>
                                <li>• <strong className="text-white">Open Communication:</strong> Share concerns, questions, or changes. manuv.co can't help if we don't know what you need.</li>
                                <li>• <strong className="text-white">Realistic Expectations:</strong> Understand that building takes time, testing is important, and perfection comes through iteration.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The manuv.co Experience</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Here's what working with manuv.co feels like:
                            </p>
                            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-4">
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Week 1:</strong> You have a conversation with manuv.co. We ask questions, understand your needs, and design a solution. manuv.co presents a plan and timeline. You approve it.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Week 2-3:</strong> manuv.co builds your automation. You receive progress updates. manuv.co asks questions when needed. You provide feedback. You see it coming together.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Week 4:</strong> manuv.co tests everything. You test it too. manuv.co refines based on feedback. When it's ready, manuv.co deploys it and trains your team. You start using it.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong className="text-white">Ongoing:</strong> manuv.co monitors, supports, and improves. You see value. manuv.co helps you get more value. The partnership continues.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why Businesses Choose manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Businesses work with manuv.co because:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• manuv.co makes automation accessible—you don't need technical skills</li>
                                <li>• manuv.co builds custom solutions that fit perfectly</li>
                                <li>• manuv.co provides full service—we handle everything</li>
                                <li>• manuv.co is a long-term partner, not just a vendor</li>
                                <li>• manuv.co focuses on business value, not just technology</li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Work with manuv.co?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you're interested in partnering with manuv.co, let's start with a conversation. manuv.co will understand your needs and show you how we can help.
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
                    <h2 className="text-2xl font-extralight text-white mb-6">Learn More</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/about-manuv/what-is-manuv" className="text-white/70 hover:text-white transition-colors">
                            What is manuv.co? →
                        </Link>
                        <Link to="/about-manuv/how-manuv-works" className="text-white/70 hover:text-white transition-colors">
                            How manuv.co works →
                        </Link>
                        <Link to="/about-manuv/manuv-pricing" className="text-white/70 hover:text-white transition-colors">
                            manuv.co pricing →
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
