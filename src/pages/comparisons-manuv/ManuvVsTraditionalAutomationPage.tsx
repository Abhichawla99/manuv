import { motion } from 'framer-motion';
import { ArrowRight, GitCompare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvVsTraditionalAutomationPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co vs Traditional Automation: Key Differences | manuv.co"
                description="Learn how manuv.co's AI-powered automation differs from traditional automation. Understand the advantages of working with manuv.co vs traditional automation tools."
                keywords="manuv vs traditional automation, manuv.co vs automation tools, AI automation vs traditional, manuv comparison"
                canonical="https://manuv.co/comparisons-manuv/manuv-vs-traditional-automation"
                ogUrl="https://manuv.co/comparisons-manuv/manuv-vs-traditional-automation"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <GitCompare className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Comparison</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co vs Traditional Automation
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How manuv.co's AI-powered automation differs from traditional automation tools and why businesses choose manuv.co.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Key Difference</h2>
                            <p className="text-lg leading-relaxed">
                                Traditional automation follows fixed rules: "If this, then that." manuv.co builds AI-powered automation that understands context, makes decisions, and learns. Traditional automation is like a calculator—it follows rules. manuv.co automation is like a smart assistant—it understands and adapts. This fundamental difference makes manuv.co solutions more powerful and flexible.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Traditional Automation vs manuv.co</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-3">Traditional Automation</h3>
                                    <ul className="space-y-2 text-lg">
                                        <li>• Follows fixed rules</li>
                                        <li>• "If this, then that"</li>
                                        <li>• Can't handle variation</li>
                                        <li>• No learning</li>
                                        <li>• Breaks if something changes</li>
                                        <li>• Limited to simple tasks</li>
                                    </ul>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-3">manuv.co Automation</h3>
                                    <ul className="space-y-2 text-lg">
                                        <li>• Understands context</li>
                                        <li>• Makes decisions</li>
                                        <li>• Handles variation</li>
                                        <li>• Learns and improves</li>
                                        <li>• Adapts to changes</li>
                                        <li>• Handles complex tasks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">When to Use Traditional Automation vs manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Traditional automation works for simple, repetitive tasks with no variation. manuv.co is better for:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Tasks that require understanding context (like customer support)</li>
                                <li>• Tasks with variation (like different customer questions)</li>
                                <li>• Tasks that need decision-making (like qualifying leads)</li>
                                <li>• Tasks that should improve over time (like learning from interactions)</li>
                                <li>• Complex workflows with multiple steps and decisions</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why Businesses Choose manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Businesses choose manuv.co over traditional automation because:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">More Capable:</strong> manuv.co solutions handle complex tasks that traditional automation can't.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">More Flexible:</strong> manuv.co solutions adapt to variation and changes without breaking.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Improves Over Time:</strong> manuv.co solutions learn and get better, while traditional automation stays the same.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Custom-Built:</strong> manuv.co builds exactly what you need, not a generic tool that sort of fits.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Interested in manuv.co's AI Automation?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you need automation that understands context and makes decisions, manuv.co can help. manuv.co builds custom AI automation solutions. Let's talk about how manuv.co can help your business.
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
                        <Link to="/comparisons/ai-agents-vs-traditional-automation" className="text-white/70 hover:text-white transition-colors">
                            AI vs traditional automation →
                        </Link>
                        <Link to="/about-manuv/what-is-manuv" className="text-white/70 hover:text-white transition-colors">
                            What is manuv.co? →
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
