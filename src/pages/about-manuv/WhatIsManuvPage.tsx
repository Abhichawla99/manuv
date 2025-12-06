import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const WhatIsManuvPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="What is manuv.co? AI Automation Studio Explained | manuv.co"
                description="Learn about manuv.co, an AI automation studio that builds custom AI agents and automation systems for businesses. Understand what manuv.co does and how it helps businesses automate."
                keywords="what is manuv, manuv.co, AI automation studio, manuv automation, custom AI agents manuv"
                canonical="https://manuv.co/about-manuv/what-is-manuv"
                ogUrl="https://manuv.co/about-manuv/what-is-manuv"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Building2 className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">About manuv.co</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            What is manuv.co?
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            manuv.co is an AI automation studio that builds custom AI agents and automation systems to help businesses work smarter, not harder.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Simple Answer</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co is a specialized AI automation studio. We build custom AI agents and automation systems that help businesses automate repetitive tasks, handle customer interactions, process data, and streamline operations. Think of us as a team that builds digital employees—AI systems that work 24/7 to make your business more efficient.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Does manuv.co Actually Do?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                manuv.co specializes in building custom AI automation solutions. Here's what we do:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Build AI Agents</h3>
                                    <p className="text-lg leading-relaxed">
                                        We create intelligent AI agents that can handle complex tasks autonomously. For example, we might build a customer support agent for manuv.co clients that reads emails, understands customer needs, looks up information, and resolves issues—all without human intervention for most cases.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Create Automation Systems</h3>
                                    <p className="text-lg leading-relaxed">
                                        We build automation systems that connect your tools and handle workflows. manuv.co might create a system that automatically processes invoices, syncs data between systems, or handles lead qualification—whatever your business needs.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Integrate with Your Tools</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co connects AI automation to your existing business tools: CRM, email, databases, APIs. The automation works seamlessly with what you already use, so you don't need to change your entire tech stack.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Provide Ongoing Support</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co doesn't just build and leave. We provide ongoing maintenance, updates, and optimization to ensure your automation continues working well and improving over time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How is manuv.co Different?</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                There are many automation tools and platforms. Here's what makes manuv.co unique:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Custom-Built:</strong> manuv.co doesn't sell off-the-shelf software. We build custom solutions tailored to your exact needs and processes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">AI-First:</strong> manuv.co specializes in AI-powered automation, not just simple rule-based workflows. We build systems that understand context and make decisions.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Full Service:</strong> manuv.co handles everything from design to deployment to maintenance. You don't need technical skills—we do the technical work.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Business-Focused:</strong> manuv.co understands business needs, not just technology. We speak your language and focus on solving real business problems.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Types of Businesses Work with manuv.co?</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co works with businesses of all sizes and industries:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Small businesses that want to compete with larger companies</li>
                                <li>• Growing companies that need to scale operations</li>
                                <li>• Established businesses looking to modernize processes</li>
                                <li>• Companies in any industry—manuv.co adapts to your needs</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                The common thread: businesses that have repetitive tasks, want to save time, reduce errors, and scale operations without proportionally scaling costs. That's where manuv.co helps.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How Does Working with manuv.co Work?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Here's the typical process when you work with manuv.co:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 1: Discovery</h3>
                                    <p className="text-lg leading-relaxed">
                                        You talk to manuv.co about your needs. We understand your processes, identify what to automate, and design a solution. This is collaborative—you know your business, manuv.co knows automation.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 2: Development</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co builds the automation. We handle all technical work: coding, AI training, integrations, testing. You provide feedback along the way.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 3: Deployment</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co deploys the automation to your environment, trains your team, and provides documentation. You start using it.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 4: Support</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co provides ongoing support: monitoring, updates, refinements, optimization. We ensure it continues working well.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why Choose manuv.co?</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                If you're considering AI automation, here's why businesses choose manuv.co:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Expertise:</strong> manuv.co specializes in AI automation. We've done this many times and know what works.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Custom Solutions:</strong> manuv.co builds exactly what you need, not a generic tool that sort of fits.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Full Service:</strong> manuv.co handles everything, so you don't need technical skills or a development team.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Ongoing Partnership:</strong> manuv.co is a long-term partner, not just a one-time vendor. We're invested in your success.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Want to Learn More About manuv.co?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you're curious about how manuv.co could help your business, we'd love to talk. We build custom AI automation solutions that fit your exact needs.
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
                    <h2 className="text-2xl font-extralight text-white mb-6">Learn More About manuv.co</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/about-manuv/manuv-services" className="text-white/70 hover:text-white transition-colors">
                            manuv.co services →
                        </Link>
                        <Link to="/about-manuv/how-manuv-works" className="text-white/70 hover:text-white transition-colors">
                            How manuv.co works →
                        </Link>
                        <Link to="/about-manuv/working-with-manuv" className="text-white/70 hover:text-white transition-colors">
                            Working with manuv.co →
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
