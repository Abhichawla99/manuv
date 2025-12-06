import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Bot, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const AIAgentsVsChatbotsPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI Agents vs Chatbots | Comparison Guide | manuv.co"
                description="Compare AI agents vs chatbots. Understand the differences, capabilities, and when to use AI agents vs traditional chatbots for your business."
                keywords="AI agents vs chatbots, AI agents comparison, chatbots vs AI agents, intelligent agents, conversational AI, AI agent capabilities, chatbot limitations"
                canonical="https://manuv.co/comparisons/ai-agents-vs-chatbots"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">AI Agents vs Chatbots</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Understand the key differences between AI agents and chatbots. Choose the right solution for your business needs.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Key Differences</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <Bot className="w-8 h-8 text-primary" />
                                <h3 className="text-2xl font-light text-white">AI Agents</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    { feature: 'Autonomous Actions', description: 'Can perform actions, make decisions, and execute tasks independently' },
                                    { feature: 'Complex Reasoning', description: 'Understands context, learns from interactions, and adapts behavior' },
                                    { feature: 'Multi-Step Workflows', description: 'Handles complex, multi-step processes with decision points' },
                                    { feature: 'Tool Integration', description: 'Integrates with multiple tools and systems to complete tasks' },
                                    { feature: 'Learning & Improvement', description: 'Continuously learns and improves from experience' },
                                    { feature: 'Proactive Behavior', description: 'Can initiate actions and workflows based on conditions' }
                                ].map((item, i) => (
                                    <li key={i} className="flex flex-col gap-2">
                                        <span className="text-white font-light">{item.feature}</span>
                                        <span className="text-white/60 text-sm font-light">{item.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <MessageSquare className="w-8 h-8 text-white/40" />
                                <h3 className="text-2xl font-light text-white">Chatbots</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    { feature: 'Reactive Responses', description: 'Responds to user queries but cannot take autonomous actions' },
                                    { feature: 'Rule-Based Logic', description: 'Follows predefined conversation flows and decision trees' },
                                    { feature: 'Simple Interactions', description: 'Handles single-turn or limited multi-turn conversations' },
                                    { feature: 'Limited Integration', description: 'Can connect to APIs but with limited autonomous capabilities' },
                                    { feature: 'Static Behavior', description: 'Behavior is fixed unless manually updated by developers' },
                                    { feature: 'User-Initiated Only', description: 'Only responds when users initiate conversations' }
                                ].map((item, i) => (
                                    <li key={i} className="flex flex-col gap-2">
                                        <span className="text-white font-light">{item.feature}</span>
                                        <span className="text-white/60 text-sm font-light">{item.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">When to Use Each</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                            <h3 className="text-2xl font-light text-white mb-6">Use AI Agents For:</h3>
                            <ul className="space-y-3">
                                {[
                                    'Complex business processes requiring decision-making',
                                    'Tasks that need to integrate with multiple systems',
                                    'Workflows requiring autonomous actions and follow-ups',
                                    'Processes that need to learn and adapt over time',
                                    'Operations requiring proactive monitoring and alerts',
                                    'Multi-step processes with conditional logic'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-px w-4 bg-primary mt-3" />
                                        <span className="text-white/70 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                            <h3 className="text-2xl font-light text-white mb-6">Use Chatbots For:</h3>
                            <ul className="space-y-3">
                                {[
                                    'Simple Q&A and FAQ responses',
                                    'Basic customer support inquiries',
                                    'Lead qualification with predefined questions',
                                    'Simple appointment scheduling',
                                    'Information lookup and retrieval',
                                    'Basic conversational interfaces'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-px w-4 bg-white/20 mt-3" />
                                        <span className="text-white/70 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Related Comparisons</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'AI Agents vs Automation', link: '/comparisons/ai-agents-vs-traditional-automation', description: 'Compare AI agents with traditional automation' },
                            { title: 'AI vs RPA', link: '/comparisons/ai-vs-rpa', description: 'Compare AI automation with RPA' },
                            { title: 'Custom vs Off-the-Shelf', link: '/comparisons/custom-vs-off-the-shelf', description: 'Compare custom and off-the-shelf solutions' }
                        ].map((item, i) => (
                            <Link key={i} to={item.link} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all group">
                                <h3 className="text-xl font-light text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm font-light text-white/60 mb-4">{item.description}</p>
                                <span className="text-xs font-light text-primary flex items-center gap-2">Learn more <ExternalLink className="w-3 h-3" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Ready to choose the right solution?</h2>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Schedule a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
