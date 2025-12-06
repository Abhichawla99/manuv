import { motion } from 'framer-motion';
import { ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const WhatAreAIAgentsPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="What Are AI Agents? Simple Explanation with Examples | manuv.co"
                description="Learn what AI agents are, how they differ from chatbots, and what they can do for your business. Clear explanations with real-world examples."
                keywords="what are AI agents, AI agents explained, autonomous AI agents, AI agents vs chatbots, intelligent agents"
                canonical="https://manuv.co/faq/what-are-ai-agents"
                ogUrl="https://manuv.co/faq/what-are-ai-agents"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Bot className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">FAQ</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            What Are AI Agents?
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Think of AI agents as digital employees that can think, decide, and act on their own. Here's everything you need to know.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Simple Definition</h2>
                            <p className="text-lg leading-relaxed">
                                An AI agent is a software program that can perceive its environment, make decisions, and take actions to achieve goals—all autonomously, without constant human supervision. Unlike simple chatbots that just respond to questions, AI agents can complete entire workflows and tasks on their own.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">AI Agents vs. Chatbots: What's the Difference?</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                This is a common question, and the difference is important:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-3">Chatbots</h3>
                                    <ul className="space-y-2 text-lg">
                                        <li>• Answer questions</li>
                                        <li>• Follow scripts</li>
                                        <li>• Limited to predefined responses</li>
                                        <li>• Can't take actions</li>
                                        <li>• Need human help for complex tasks</li>
                                    </ul>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-3">AI Agents</h3>
                                    <ul className="space-y-2 text-lg">
                                        <li>• Understand context and intent</li>
                                        <li>• Make decisions independently</li>
                                        <li>• Complete multi-step tasks</li>
                                        <li>• Take actions (send emails, update databases, etc.)</li>
                                        <li>• Learn and improve over time</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Can AI Agents Actually Do?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                AI agents can handle complex, multi-step tasks that require thinking and decision-making. Here are some real examples:
                            </p>
                            <div className="space-y-6">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Customer Support Agent</h3>
                                    <p className="text-lg leading-relaxed">
                                        Reads customer messages, understands the problem, looks up account information, checks order history, and resolves issues. If it can't solve something, it escalates to a human with all the context already gathered.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Sales Development Agent</h3>
                                    <p className="text-lg leading-relaxed">
                                        Researches potential customers, finds their contact information, writes personalized emails based on their company and role, sends follow-ups, and updates your CRM automatically. It handles the entire prospecting workflow.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Research Agent</h3>
                                    <p className="text-lg leading-relaxed">
                                        Searches the web, reads articles and reports, analyzes data, synthesizes information, and creates comprehensive reports. It can research competitors, market trends, or any topic you need.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Operations Agent</h3>
                                    <p className="text-lg leading-relaxed">
                                        Handles internal requests, routes tasks to the right people, manages approvals, tracks deadlines, and ensures processes run smoothly. It's like having a project coordinator that never sleeps.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How Do AI Agents Work?</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                AI agents work through a cycle of perception, decision, and action:
                            </p>
                            <ol className="space-y-4 list-decimal list-inside text-lg">
                                <li><strong className="text-white">Perceive:</strong> The agent receives information from its environment—emails, databases, APIs, user inputs.</li>
                                <li><strong className="text-white">Think:</strong> It processes the information, understands context, and determines what needs to be done.</li>
                                <li><strong className="text-white">Decide:</strong> It chooses the best action based on its understanding and goals.</li>
                                <li><strong className="text-white">Act:</strong> It performs the action—sends an email, updates a database, triggers a workflow.</li>
                                <li><strong className="text-white">Learn:</strong> It observes the results and adjusts its behavior for next time.</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why Use AI Agents?</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                AI agents are powerful because they combine intelligence with autonomy:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Handle Complexity:</strong> They can manage tasks that require multiple steps, decisions, and integrations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Work Autonomously:</strong> Once set up, they work independently without constant supervision.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Scale Easily:</strong> One agent can handle what would take multiple human employees.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Available 24/7:</strong> They never sleep, take breaks, or call in sick.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Get Better Over Time:</strong> They learn from experience and improve their performance.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Common Questions About AI Agents</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">Do AI agents replace human employees?</h3>
                                    <p className="text-lg leading-relaxed">
                                        No. AI agents handle repetitive, time-consuming tasks so humans can focus on creative work, strategy, and complex problem-solving. They're tools that make teams more productive, not replacements.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">How do you train an AI agent?</h3>
                                    <p className="text-lg leading-relaxed">
                                        You provide the agent with knowledge about your business: processes, policies, product information, examples of good responses. The agent learns from this and gets better as it processes more requests.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">Can AI agents make mistakes?</h3>
                                    <p className="text-lg leading-relaxed">
                                        Yes, like any system. That's why good AI agents have safeguards: they know when to escalate to humans, they log all actions, and they learn from mistakes. Over time, they make fewer errors.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Interested in Building an AI Agent?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                We build custom AI agents tailored to your specific needs. If you have tasks that take up too much of your team's time, an AI agent might be the solution.
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
                    <h2 className="text-2xl font-extralight text-white mb-6">Explore AI Agents</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/agents/ai-customer-support-agent" className="text-white/70 hover:text-white transition-colors">
                            Customer Support Agent →
                        </Link>
                        <Link to="/agents/ai-sdr-agent" className="text-white/70 hover:text-white transition-colors">
                            Sales Development Agent →
                        </Link>
                        <Link to="/faq/how-does-ai-automation-work" className="text-white/70 hover:text-white transition-colors">
                            How does AI automation work? →
                        </Link>
                        <Link to="/comparisons/ai-agents-vs-chatbots" className="text-white/70 hover:text-white transition-colors">
                            AI Agents vs Chatbots →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
