import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const WhenToUseAIAutomationPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="When to Use AI Automation: Decision Guide | manuv.co"
                description="Learn when AI automation makes sense and when it doesn't. Understand the best use cases, ideal scenarios, and when to consider other solutions."
                keywords="when to use AI automation, AI automation use cases, automation decision guide, when to automate, automation timing"
                canonical="https://manuv.co/best-practices/when-to-use-ai-automation"
                ogUrl="https://manuv.co/best-practices/when-to-use-ai-automation"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">Best Practices</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            When to Use AI Automation
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Not every task should be automated. Here's how to know when AI automation makes sense and when it doesn't.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Golden Rule</h2>
                            <p className="text-lg leading-relaxed">
                                Use AI automation when a task is repetitive, time-consuming, and follows patterns that can be learned. Don't use it for one-off tasks, highly creative work, or situations that require deep human judgment and empathy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Perfect Use Cases for AI Automation</h2>
                            <div className="space-y-4">
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">High-Volume, Repetitive Tasks</h3>
                                    <p className="text-lg leading-relaxed">
                                        Tasks that happen frequently and follow similar patterns are ideal. Examples: processing customer emails, qualifying leads, updating records, generating reports. The more volume, the more value automation provides.
                                    </p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Tasks Requiring Information Lookup</h3>
                                    <p className="text-lg leading-relaxed">
                                        When a task involves looking up information from multiple sources, AI automation excels. Examples: checking customer history, finding product information, researching leads, gathering data from multiple systems.
                                    </p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">24/7 Availability Needs</h3>
                                    <p className="text-lg leading-relaxed">
                                        If you need something available around the clock, AI automation is perfect. Examples: customer support, lead qualification, monitoring systems, processing requests. AI doesn't sleep or take breaks.
                                    </p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Tasks with Clear Patterns</h3>
                                    <p className="text-lg leading-relaxed">
                                        If a task follows patterns that can be learned, automation works well. Examples: categorizing emails, routing requests, processing forms, extracting data from documents. The AI learns the patterns and applies them.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">When AI Automation Makes Less Sense</h2>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">One-Off or Rare Tasks</h3>
                                    <p className="text-lg leading-relaxed">
                                        If something happens rarely, automation might not be worth the setup cost. The time to build and maintain might exceed the time saved. Sometimes manual work is fine for rare tasks.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Highly Creative Work</h3>
                                    <p className="text-lg leading-relaxed">
                                        While AI can assist with creative tasks, truly creative work that requires human insight, emotion, and unique perspective is better done by humans. AI can help, but shouldn't replace human creativity.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Tasks Requiring Deep Human Judgment</h3>
                                    <p className="text-lg leading-relaxed">
                                        Some decisions require human judgment, empathy, and understanding of complex human situations. Examples: handling sensitive customer complaints, making strategic business decisions, managing complex relationships.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Constantly Changing Processes</h3>
                                    <p className="text-lg leading-relaxed">
                                        If a process changes constantly and unpredictably, automation might struggle to keep up. Automation works best with stable processes. If things change daily, manual work might be more flexible.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Decision Framework</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Ask these questions to decide if automation makes sense:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">How often does this happen?</h3>
                                    <p className="text-lg leading-relaxed">
                                        If it's daily or multiple times per day, automation likely makes sense. If it's weekly or monthly, consider the time saved vs. setup cost.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Does it follow patterns?</h3>
                                    <p className="text-lg leading-relaxed">
                                        If similar tasks follow similar patterns, automation can learn and handle them. If every instance is completely different, automation might struggle.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">How much time does it take?</h3>
                                    <p className="text-lg leading-relaxed">
                                        If it takes significant time (hours per week), automation likely provides good ROI. If it's quick (minutes per week), the setup cost might not be worth it.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Does it require human judgment?</h3>
                                    <p className="text-lg leading-relaxed">
                                        If it requires complex judgment, empathy, or creativity, humans might be better. If it's more about following rules and patterns, automation works well.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">What's the cost of errors?</h3>
                                    <p className="text-lg leading-relaxed">
                                        If errors are costly or dangerous, consider carefully. Automation can reduce errors, but you need safeguards. Some tasks are too critical to automate without extensive testing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Real Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <p className="text-lg leading-relaxed mb-2"><strong className="text-white">Good for automation:</strong> Processing 200 customer support emails per day</p>
                                    <p className="text-lg leading-relaxed text-white/70">High volume, follows patterns, repetitive, time-consuming. Perfect use case.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <p className="text-lg leading-relaxed mb-2"><strong className="text-white">Good for automation:</strong> Qualifying 50 leads per day</p>
                                    <p className="text-lg leading-relaxed text-white/70">Repetitive, follows patterns, involves information lookup. Great fit.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <p className="text-lg leading-relaxed mb-2"><strong className="text-white">Less ideal:</strong> Writing a company strategy document</p>
                                    <p className="text-lg leading-relaxed text-white/70">Requires deep thinking, creativity, and judgment. Better done by humans, though AI can assist.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <p className="text-lg leading-relaxed mb-2"><strong className="text-white">Less ideal:</strong> Handling a one-time complex negotiation</p>
                                    <p className="text-lg leading-relaxed text-white/70">Rare, requires human judgment and relationship management. Not worth automating.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Hybrid Approach</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Often, the best solution is a hybrid: AI automation handles the routine parts, and humans handle the exceptions and complex cases. For example:
                            </p>
                            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                <p className="text-lg leading-relaxed mb-2"><strong className="text-white">Customer Support Example:</strong></p>
                                <ul className="space-y-2 text-lg ml-4">
                                    <li>• AI handles 70% of routine questions automatically</li>
                                    <li>• AI escalates complex cases to humans</li>
                                    <li>• Humans handle sensitive situations and edge cases</li>
                                    <li>• AI learns from human responses to improve</li>
                                </ul>
                                <p className="text-lg leading-relaxed mt-4 text-white/70">
                                    This gives you the efficiency of automation with the judgment of humans where it matters most.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Timing Matters</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Even if a task is a good fit for automation, timing matters:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Wait if processes are unstable:</strong> If you're still figuring out how things should work, wait until processes stabilize.</li>
                                <li>• <strong className="text-white">Wait if you're growing fast:</strong> If your business is changing rapidly, wait until things settle.</li>
                                <li>• <strong className="text-white">Start if you have clear processes:</strong> If you know how things work and they're stable, it's a good time to automate.</li>
                                <li>• <strong className="text-white">Start if you're scaling:</strong> If you're growing and need to handle more volume, automation helps you scale.</li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Not Sure If Automation Makes Sense?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                We help businesses evaluate whether automation makes sense for their specific situation. If you're not sure, let's talk about your tasks and see if automation is the right fit.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Get Expert Advice
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-16 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-extralight text-white mb-6">Related Topics</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/how-to/choose-right-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            How to choose automation →
                        </Link>
                        <Link to="/faq/what-is-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            What is AI automation? →
                        </Link>
                        <Link to="/best-practices/ai-automation-success-factors" className="text-white/70 hover:text-white transition-colors">
                            Success factors →
                        </Link>
                        <Link to="/use-cases/customer-service-automation" className="text-white/70 hover:text-white transition-colors">
                            Customer service automation →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
