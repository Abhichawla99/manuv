import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const HowDoesAIAutomationWorkPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="How Does AI Automation Work? Step-by-Step Explanation | manuv.co"
                description="Learn how AI automation works in simple terms. Understand the process, components, and real-world examples. Perfect for beginners and business owners."
                keywords="how does AI automation work, AI automation process, how AI automation works, automation workflow, AI automation explained"
                canonical="https://manuv.co/faq/how-does-ai-automation-work"
                ogUrl="https://manuv.co/faq/how-does-ai-automation-work"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Cpu className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">FAQ</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            How Does AI Automation Work?
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            A clear, step-by-step explanation of how AI automation systems process information and complete tasks automatically.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Basic Process</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                AI automation works in a continuous loop: it receives input, processes it with AI, makes decisions, takes action, and learns from the results. Let's break this down step by step.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="border-l-2 border-primary pl-6">
                                    <h3 className="text-xl font-light text-white mb-3">Step 1: Receive Input</h3>
                                    <p className="text-lg leading-relaxed">
                                        The system receives information from various sources: emails, forms, databases, APIs, or user interactions. This could be a customer question, a new lead, a document to process, or data that needs to be analyzed.
                                    </p>
                                </div>

                                <div className="border-l-2 border-primary pl-6">
                                    <h3 className="text-xl font-light text-white mb-3">Step 2: Understand with AI</h3>
                                    <p className="text-lg leading-relaxed">
                                        The AI analyzes the input to understand what it means. It reads text, extracts key information, identifies intent, and determines what action needs to be taken. This is where the "intelligence" part comes in—the AI understands context, not just keywords.
                                    </p>
                                </div>

                                <div className="border-l-2 border-primary pl-6">
                                    <h3 className="text-xl font-light text-white mb-3">Step 3: Make Decisions</h3>
                                    <p className="text-lg leading-relaxed">
                                        Based on what it understands, the AI decides what to do. It might need to look up additional information, route the task to the right place, or take a specific action. The AI uses rules, patterns, and learned behavior to make smart decisions.
                                    </p>
                                </div>

                                <div className="border-l-2 border-primary pl-6">
                                    <h3 className="text-xl font-light text-white mb-3">Step 4: Take Action</h3>
                                    <p className="text-lg leading-relaxed">
                                        The system performs the action: sending an email, updating a database, creating a record, generating a response, or triggering another workflow. It integrates with your existing tools to make changes automatically.
                                    </p>
                                </div>

                                <div className="border-l-2 border-primary pl-6">
                                    <h3 className="text-xl font-light text-white mb-3">Step 5: Learn and Improve</h3>
                                    <p className="text-lg leading-relaxed">
                                        The system tracks what happened, learns from the results, and gets better over time. If something didn't work as expected, it adjusts. If something worked well, it remembers that pattern for next time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Real Example: Customer Support Automation</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Let's see how this works with a real scenario:
                            </p>
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 space-y-4">
                                <div>
                                    <p className="text-white/60 text-sm mb-2">Customer sends email:</p>
                                    <p className="text-lg italic">"I need to update my billing address. My account number is 12345."</p>
                                </div>
                                <div className="flex items-center justify-center text-primary/50">
                                    <ArrowRight className="w-6 h-6 rotate-90" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm mb-2">AI processes:</p>
                                    <ul className="space-y-2 text-lg">
                                        <li>• Understands: Customer wants to update billing address</li>
                                        <li>• Extracts: Account number 12345</li>
                                        <li>• Looks up: Customer account in database</li>
                                        <li>• Decides: Can handle this automatically</li>
                                    </ul>
                                </div>
                                <div className="flex items-center justify-center text-primary/50">
                                    <ArrowRight className="w-6 h-6 rotate-90" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm mb-2">AI takes action:</p>
                                    <ul className="space-y-2 text-lg">
                                        <li>• Updates billing address in CRM</li>
                                        <li>• Sends confirmation email to customer</li>
                                        <li>• Logs the change in system</li>
                                    </ul>
                                </div>
                                <div className="flex items-center justify-center text-primary/50">
                                    <ArrowRight className="w-6 h-6 rotate-90" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm mb-2">Result:</p>
                                    <p className="text-lg">Customer's request is completed in seconds, no human needed.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Components That Make It Work</h2>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">AI Models</h3>
                                    <p className="text-lg leading-relaxed">
                                        These are the "brains" that understand language, make decisions, and learn. They're trained on vast amounts of data to understand context and respond intelligently.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Workflow Engine</h3>
                                    <p className="text-lg leading-relaxed">
                                        This orchestrates the entire process, connecting different steps and ensuring everything happens in the right order. It's like a conductor leading an orchestra.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Integrations</h3>
                                    <p className="text-lg leading-relaxed">
                                        These connect your AI automation to your existing tools: CRM, email, databases, APIs. The system can read from and write to these tools automatically.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Knowledge Base</h3>
                                    <p className="text-lg leading-relaxed">
                                        This stores information the AI needs: company policies, product details, customer data, historical patterns. The AI can access this to make informed decisions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why This Approach Works</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Traditional automation follows rigid rules: "If email contains 'refund', forward to billing." But AI automation is smarter:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Understands Intent:</strong> It knows "I want my money back" means the same as "refund request" even if those exact words aren't used.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Handles Variations:</strong> Every customer question is slightly different, but the AI can handle all variations without needing rules for each one.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Learns Continuously:</strong> As it processes more requests, it gets better at understanding and responding correctly.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Makes Smart Decisions:</strong> It can decide when to handle something automatically and when to escalate to a human.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Want to See It in Action?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                We build custom AI automation systems that work exactly like this. If you're curious about how it could work for your business, let's talk.
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
                    <h2 className="text-2xl font-extralight text-white mb-6">Learn More</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/faq/what-is-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            What is AI automation? →
                        </Link>
                        <Link to="/faq/what-are-ai-agents" className="text-white/70 hover:text-white transition-colors">
                            What are AI agents? →
                        </Link>
                        <Link to="/getting-started/implementing-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            How to implement AI automation →
                        </Link>
                        <Link to="/guides/ai-automation-best-practices" className="text-white/70 hover:text-white transition-colors">
                            AI automation best practices →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
