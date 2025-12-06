import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const AIAutomationBasicsPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI Automation Basics: Complete Beginner's Guide | manuv.co"
                description="Complete beginner's guide to AI automation. Learn the fundamentals, key concepts, and everything you need to know to get started with AI automation."
                keywords="AI automation basics, automation fundamentals, beginner automation guide, AI automation 101, automation concepts"
                canonical="https://manuv.co/getting-started/ai-automation-basics"
                ogUrl="https://manuv.co/getting-started/ai-automation-basics"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">Getting Started</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            AI Automation Basics
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Everything you need to know to understand AI automation, from core concepts to real-world applications.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What is Automation?</h2>
                            <p className="text-lg leading-relaxed">
                                Automation is using technology to perform tasks without human intervention. Simple automation follows fixed rules: "If this happens, then do that." AI automation is smarter—it can understand context, make decisions, and learn from experience.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Key Concepts</h2>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Workflows</h3>
                                    <p className="text-lg leading-relaxed">
                                        A workflow is a series of steps that happen in order. Automation executes these steps automatically. For example: receive email → read content → look up customer → generate response → send email.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">AI Agents</h3>
                                    <p className="text-lg leading-relaxed">
                                        AI agents are autonomous programs that can perceive, decide, and act. They're like digital employees that can handle complex tasks on their own, making decisions and taking actions without constant supervision.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Integrations</h3>
                                    <p className="text-lg leading-relaxed">
                                        Integrations connect your automation to other systems: CRM, email, databases, APIs. This lets the automation read from and write to your existing tools.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Knowledge Base</h3>
                                    <p className="text-lg leading-relaxed">
                                        The knowledge base stores information the AI needs: product details, policies, processes, examples. The AI accesses this to make informed decisions and provide accurate responses.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How AI Automation Differs from Regular Automation</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-3">Regular Automation</h3>
                                    <ul className="space-y-2 text-lg">
                                        <li>• Follows fixed rules</li>
                                        <li>• "If this, then that"</li>
                                        <li>• Can't handle variation</li>
                                        <li>• No learning</li>
                                        <li>• Breaks if something changes</li>
                                    </ul>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-3">AI Automation</h3>
                                    <ul className="space-y-2 text-lg">
                                        <li>• Understands context</li>
                                        <li>• Makes decisions</li>
                                        <li>• Handles variation</li>
                                        <li>• Learns and improves</li>
                                        <li>• Adapts to changes</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed">
                                Regular automation is like a calculator—it follows rules. AI automation is like a smart assistant—it understands and adapts.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Common Use Cases</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Here are the most common ways businesses use AI automation:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Customer Support</h3>
                                    <p className="text-lg leading-relaxed">
                                        AI agents handle customer questions, look up account information, and resolve issues automatically. They can handle 70-90% of support requests without human help.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Sales & Lead Generation</h3>
                                    <p className="text-lg leading-relaxed">
                                        AI agents research leads, write personalized emails, qualify prospects, and update CRMs. They can handle the entire prospecting workflow.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Data Processing</h3>
                                    <p className="text-lg leading-relaxed">
                                        Automation reads documents, extracts information, validates data, and puts it in the right places. No more manual data entry.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Content Creation</h3>
                                    <p className="text-lg leading-relaxed">
                                        AI can generate content, repurpose existing content, and adapt it for different platforms. It learns your voice and style.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Operations</h3>
                                    <p className="text-lg leading-relaxed">
                                        Automation handles internal requests, routes tasks, manages approvals, and ensures processes run smoothly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Benefits of AI Automation</h2>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Saves Time:</strong> Your team can focus on strategic work instead of repetitive tasks.</span>
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
                                    <span><strong className="text-white">Works 24/7:</strong> Your business never sleeps, and neither does automation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Improves Over Time:</strong> AI learns and gets better with experience.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Getting Started: First Steps</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you're new to AI automation, here's where to start:
                            </p>
                            <ol className="space-y-4 list-decimal list-inside text-lg">
                                <li><strong className="text-white">Identify One Pain Point:</strong> Pick one task that's causing problems. Don't try to automate everything at once.</li>
                                <li><strong className="text-white">Understand the Current Process:</strong> Document exactly how the task works today. Be specific.</li>
                                <li><strong className="text-white">Define Success:</strong> What would "solved" look like? Be clear and measurable.</li>
                                <li><strong className="text-white">Research Options:</strong> Learn about different automation approaches. Understand what's possible.</li>
                                <li><strong className="text-white">Talk to Experts:</strong> Discuss your needs with an automation team. They can help you understand what's feasible and what approach makes sense.</li>
                                <li><strong className="text-white">Start Small:</strong> Begin with one automation, prove value, then expand.</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Common Misconceptions</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">"AI will replace all employees"</h3>
                                    <p className="text-lg leading-relaxed">
                                        Not true. AI automation handles repetitive tasks so humans can focus on creative, strategic, and relationship work. It's a tool that makes teams more productive, not a replacement.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">"Automation is too expensive"</h3>
                                    <p className="text-lg leading-relaxed">
                                        Not necessarily. Many automation projects pay for themselves within 6-12 months. The key is choosing the right automation and measuring ROI properly.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">"You need to be technical"</h3>
                                    <p className="text-lg leading-relaxed">
                                        Not if you work with the right team. You need to understand your business, not code. The development team handles all technical work.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">"It works perfectly immediately"</h3>
                                    <p className="text-lg leading-relaxed">
                                        Rarely. Like any system, automation needs testing and refinement. It starts good and gets better over time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Next Steps</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Now that you understand the basics, here's what to do next:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Learn about specific use cases that interest you</li>
                                <li>• Understand how to choose the right automation</li>
                                <li>• Learn about implementation and costs</li>
                                <li>• Talk to experts about your specific needs</li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Learn More?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                Understanding the basics is just the beginning. If you're curious about how AI automation could work for your business, let's talk about your specific situation and needs.
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
                    <h2 className="text-2xl font-extralight text-white mb-6">Continue Learning</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/faq/what-is-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            What is AI automation? →
                        </Link>
                        <Link to="/how-to/get-started-with-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            How to get started →
                        </Link>
                        <Link to="/faq/how-does-ai-automation-work" className="text-white/70 hover:text-white transition-colors">
                            How does it work? →
                        </Link>
                        <Link to="/getting-started/implementing-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            Implementation guide →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
