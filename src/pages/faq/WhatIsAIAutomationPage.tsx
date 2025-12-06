import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const WhatIsAIAutomationPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="What is AI Automation? Complete Guide for Beginners | manuv.co"
                description="Learn what AI automation is, how it works, and why businesses use it. Simple explanations with real-world examples. Perfect for understanding AI automation basics."
                keywords="what is AI automation, AI automation explained, automation basics, AI automation guide, understanding AI automation"
                canonical="https://manuv.co/faq/what-is-ai-automation"
                ogUrl="https://manuv.co/faq/what-is-ai-automation"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <HelpCircle className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">FAQ</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            What is AI Automation?
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            A simple, conversational guide to understanding AI automation and how it can transform your business.
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
                                AI automation is when you use artificial intelligence to handle tasks that normally require human thinking and decision-making. Instead of a person doing repetitive work, an AI system does it automatically, learns from patterns, and makes smart decisions on its own.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Think of It Like This</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Imagine you have an employee who never gets tired, works 24/7, and gets better at their job over time. That's what AI automation does. It's not about replacing humans—it's about giving your team superpowers to focus on what matters most.
                            </p>
                            <p className="text-lg leading-relaxed">
                                For example, instead of someone manually reading every customer email and categorizing it, an AI system can read the email, understand what the customer needs, route it to the right department, and even draft a response—all in seconds.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How Does It Actually Work?</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                AI automation combines three things:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Intelligence:</strong> The AI understands context, makes decisions, and learns from data.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Automation:</strong> Tasks happen automatically without human intervention.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Integration:</strong> The system connects to your existing tools (CRM, email, databases) and works seamlessly.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Real-World Examples</h2>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Customer Support</h3>
                                    <p className="text-lg leading-relaxed">
                                        An AI agent reads customer messages, understands the problem, looks up account information, and resolves 70-90% of issues without human help. When it can't solve something, it escalates to a human with all the context.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Sales Prospecting</h3>
                                    <p className="text-lg leading-relaxed">
                                        An AI agent researches potential customers, finds their contact information, writes personalized emails, and sends them at the right time. It tracks responses and updates your CRM automatically.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Data Processing</h3>
                                    <p className="text-lg leading-relaxed">
                                        An AI system reads documents, extracts important information, validates it, and puts it in the right place in your database. No more manual data entry or copy-pasting between systems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why Should You Care?</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                AI automation isn't just a nice-to-have anymore—it's becoming essential for staying competitive. Here's why:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Saves Time:</strong> Your team can focus on strategy and creative work instead of repetitive tasks.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Reduces Errors:</strong> AI doesn't get tired or distracted, so it makes fewer mistakes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Scales Easily:</strong> Handle 10x more work without hiring 10x more people.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Works 24/7:</strong> Your business never sleeps, and neither does AI automation.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Common Questions</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">Is AI automation the same as regular automation?</h3>
                                    <p className="text-lg leading-relaxed">
                                        Not exactly. Regular automation follows fixed rules (if this, then that). AI automation can understand context, make decisions, and learn from experience. It's like the difference between a calculator and a smart assistant.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">Do I need technical skills to use AI automation?</h3>
                                    <p className="text-lg leading-relaxed">
                                        Not if you work with the right team. A good AI automation studio will build everything for you and make it easy to use. You just need to know what you want automated.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">How long does it take to set up?</h3>
                                    <p className="text-lg leading-relaxed">
                                        Most AI automation systems can be built and deployed in 2-4 weeks. Simple automations might take a few days, while complex systems with multiple integrations take longer.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Get Started?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you're curious about how AI automation could work for your business, we'd love to chat. We build custom AI systems that fit your exact needs.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Book a Strategy Call
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-16 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-extralight text-white mb-6">Related Questions</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/faq/how-does-ai-automation-work" className="text-white/70 hover:text-white transition-colors">
                            How does AI automation work? →
                        </Link>
                        <Link to="/faq/what-are-ai-agents" className="text-white/70 hover:text-white transition-colors">
                            What are AI agents? →
                        </Link>
                        <Link to="/faq/how-much-does-ai-automation-cost" className="text-white/70 hover:text-white transition-colors">
                            How much does AI automation cost? →
                        </Link>
                        <Link to="/getting-started/ai-automation-basics" className="text-white/70 hover:text-white transition-colors">
                            Getting started with AI automation →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
