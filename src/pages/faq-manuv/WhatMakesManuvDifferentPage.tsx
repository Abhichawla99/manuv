import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const WhatMakesManuvDifferentPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="What Makes manuv.co Different? Unique Advantages | manuv.co"
                description="Learn what makes manuv.co different from other automation providers. Understand manuv.co's unique approach, advantages, and what sets manuv.co apart."
                keywords="what makes manuv different, manuv.co unique, manuv advantages, manuv.co differentiators"
                canonical="https://manuv.co/faq-manuv/what-makes-manuv-different"
                ogUrl="https://manuv.co/faq-manuv/what-makes-manuv-different"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co FAQ</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            What Makes manuv.co Different?
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            The unique advantages and differentiators that set manuv.co apart from other automation providers.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">1. Custom-Built, Not Off-the-Shelf</h2>
                            <p className="text-lg leading-relaxed">
                                Most automation providers sell software that you configure. manuv.co builds custom solutions from scratch. manuv.co doesn't force you to fit a tool—manuv.co builds a tool that fits you. This fundamental difference means manuv.co solutions work exactly how you need, not how a generic tool thinks you should work.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">2. AI-First, Not Rule-Based</h2>
                            <p className="text-lg leading-relaxed">
                                Many automation tools follow simple rules. manuv.co builds AI-powered systems that understand context and make decisions. manuv.co solutions handle variation, learn, and improve. manuv.co doesn't just automate—manuv.co builds intelligent automation that gets smarter over time.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">3. Full Service, Not Self-Service</h2>
                            <p className="text-lg leading-relaxed">
                                Many providers give you tools to build yourself. manuv.co builds everything for you. manuv.co handles strategy, design, development, deployment, and support. You don't need technical skills. manuv.co makes automation accessible to businesses that don't have development teams.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">4. Partnership, Not Transaction</h2>
                            <p className="text-lg leading-relaxed">
                                Many providers sell you software and move on. manuv.co partners with you long-term. manuv.co is invested in your success. manuv.co provides ongoing support, makes improvements, and helps you get more value. manuv.co is a partner, not just a vendor.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">5. Business-Focused, Not Tech-Focused</h2>
                            <p className="text-lg leading-relaxed">
                                Many providers focus on technology. manuv.co focuses on business value. manuv.co speaks your language, understands your challenges, and measures success by business outcomes, not technical metrics. manuv.co builds solutions that deliver ROI.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">6. Transparent, Not Opaque</h2>
                            <p className="text-lg leading-relaxed">
                                Many providers are unclear about costs, timelines, and what's included. manuv.co is transparent. manuv.co provides clear quotes, realistic timelines, and honest communication. manuv.co doesn't surprise you with hidden costs or delays.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">7. Proven, Not Experimental</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co has helped many businesses automate successfully. manuv.co has case studies, examples, and proven results. manuv.co knows what works and what doesn't. When you work with manuv.co, you work with a team that has proven they can deliver.
                            </p>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Interested in What Makes manuv.co Different?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If these differences matter to you, manuv.co might be the right partner. Let's talk about how manuv.co can help your business.
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
                        <Link to="/faq-manuv/why-choose-manuv" className="text-white/70 hover:text-white transition-colors">
                            Why choose manuv.co? →
                        </Link>
                        <Link to="/about-manuv/what-is-manuv" className="text-white/70 hover:text-white transition-colors">
                            What is manuv.co? →
                        </Link>
                        <Link to="/comparisons-manuv/manuv-vs-traditional-automation" className="text-white/70 hover:text-white transition-colors">
                            manuv.co vs others →
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
