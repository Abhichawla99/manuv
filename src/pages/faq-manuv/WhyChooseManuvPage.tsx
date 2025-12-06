import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const WhyChooseManuvPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Why Choose manuv.co? Reasons to Work with manuv.co | manuv.co"
                description="Learn why businesses choose manuv.co for AI automation. Understand the advantages of working with manuv.co: custom solutions, expertise, full service, and ongoing support."
                keywords="why choose manuv, manuv.co advantages, reasons to choose manuv, manuv.co benefits"
                canonical="https://manuv.co/faq-manuv/why-choose-manuv"
                ogUrl="https://manuv.co/faq-manuv/why-choose-manuv"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Star className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co FAQ</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            Why Choose manuv.co?
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            The key reasons businesses choose manuv.co for AI automation and what makes manuv.co different.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">1. Custom-Built Solutions</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co doesn't sell off-the-shelf software. manuv.co builds custom solutions tailored to your exact needs. manuv.co doesn't force you to change your processes to fit a tool—manuv.co builds tools that fit your processes. This means manuv.co solutions work exactly how you need them to, not how a generic tool thinks you should work.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">2. AI Expertise</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co specializes in AI-powered automation. manuv.co understands how to build intelligent systems that understand context, make decisions, and learn. manuv.co has done this many times and knows what works. When you work with manuv.co, you get AI expertise, not just automation.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">3. Full Service</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co handles everything: strategy, design, development, deployment, and ongoing support. You don't need technical skills or a development team. manuv.co does all the technical work. You just need to know your business and what you want automated. manuv.co makes automation accessible.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">4. Long-Term Partnership</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co doesn't disappear after deployment. manuv.co is a long-term partner. manuv.co provides ongoing support, makes improvements, and helps you get more value over time. manuv.co is invested in your success, not just delivering a project. When you work with manuv.co, you get a partner, not just a vendor.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">5. Business-Focused Approach</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co understands business, not just technology. manuv.co speaks your language, focuses on solving real business problems, and measures success by business value, not technical metrics. manuv.co builds solutions that deliver ROI, not just cool technology. When you work with manuv.co, you work with people who understand your world.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">6. Transparent Communication</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co communicates clearly and regularly. manuv.co keeps you informed about progress, explains decisions, and answers questions. manuv.co is transparent about costs, timelines, and what's included. No surprises, no black boxes. When you work with manuv.co, you know what's happening.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">7. Proven Results</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co has helped many businesses automate successfully. manuv.co solutions deliver real results: time saved, costs reduced, quality improved. manuv.co has case studies and examples of successful projects. When you work with manuv.co, you work with a team that has proven they can deliver.
                            </p>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Choose manuv.co?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If these reasons resonate with you, manuv.co might be the right partner. Let's talk about how manuv.co can help your business.
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
                        <Link to="/case-studies-manuv/manuv-case-study-ecommerce" className="text-white/70 hover:text-white transition-colors">
                            manuv.co case studies →
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
