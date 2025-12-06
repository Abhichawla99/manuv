import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const HowLongDoesItTakeToImplementPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="How Long Does AI Automation Take to Implement? Timeline Guide | manuv.co"
                description="Learn about AI automation implementation timelines. Understand how long different types of automations take and what affects the timeline."
                keywords="AI automation timeline, automation implementation time, how long does automation take, automation setup time"
                canonical="https://manuv.co/faq/how-long-does-it-take-to-implement"
                ogUrl="https://manuv.co/faq/how-long-does-it-take-to-implement"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">FAQ</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            How Long Does AI Automation Take to Implement?
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Realistic timelines for different types of AI automation projects, from simple workflows to complex AI agents.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Quick Answer</h2>
                            <p className="text-lg leading-relaxed">
                                Most AI automation projects take 2-4 weeks from start to deployment. Simple automations can be done in a few days, while complex AI agents with multiple integrations might take 6-8 weeks. The timeline depends on complexity, integrations, and how quickly you can provide feedback.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Timeline by Project Type</h2>
                            <div className="space-y-6">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Simple Automations (3-7 days)</h3>
                                    <p className="text-lg leading-relaxed mb-2">
                                        Examples: Email auto-tagging, basic data sync, simple form processing
                                    </p>
                                    <p className="text-lg leading-relaxed text-white/70">
                                        These are straightforward workflows with minimal decision-making. Once requirements are clear, development is quick.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Medium Complexity (2-3 weeks)</h3>
                                    <p className="text-lg leading-relaxed mb-2">
                                        Examples: Lead qualification system, document processing, multi-step workflows
                                    </p>
                                    <p className="text-lg leading-relaxed text-white/70">
                                        These involve multiple steps, some AI decision-making, and integration with 2-3 systems. Testing and refinement add time.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Complex AI Agents (4-8 weeks)</h3>
                                    <p className="text-lg leading-relaxed mb-2">
                                        Examples: Customer support agent, sales development agent, research agent
                                    </p>
                                    <p className="text-lg leading-relaxed text-white/70">
                                        These require significant AI training, complex workflows, multiple integrations, and extensive testing to ensure reliability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Happens During Implementation?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Here's a typical timeline breakdown:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 1: Discovery & Planning</h3>
                                    <p className="text-lg leading-relaxed">
                                        We understand your needs, map out processes, identify integrations, and create a detailed plan. This phase is crucial—getting it right saves time later.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 2-3: Development</h3>
                                    <p className="text-lg leading-relaxed">
                                        We build the automation, integrate with your systems, train the AI, and create the workflows. You'll see progress updates and can provide feedback.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 3-4: Testing & Refinement</h3>
                                    <p className="text-lg leading-relaxed">
                                        We test with real scenarios, fix issues, refine AI responses, and ensure everything works smoothly. Your team can test and provide feedback.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 4: Deployment & Training</h3>
                                    <p className="text-lg leading-relaxed">
                                        We deploy to production, train your team on how to use and manage the system, and provide documentation. You're ready to go live.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Can Speed Things Up?</h2>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Clear Requirements:</strong> Knowing exactly what you want from the start eliminates back-and-forth.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Quick Feedback:</strong> Responding promptly to questions and review requests keeps the project moving.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Existing Integrations:</strong> If your tools already have APIs and documentation, integration is faster.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Starting Simple:</strong> Beginning with a basic version and adding features later is often faster than building everything at once.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Can Slow Things Down?</h2>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Complex Integrations:</strong> Connecting to legacy systems or systems without good APIs takes longer.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Changing Requirements:</strong> Mid-project changes add time. That's why the discovery phase is so important.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Limited Access:</strong> If we need to wait for API access, credentials, or approvals, that adds delays.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Extensive Customization:</strong> Highly custom solutions take longer than using standard patterns.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Can You Start Using It Before It's Complete?</h2>
                            <p className="text-lg leading-relaxed">
                                Yes! We often deploy automations in phases. You might start with a basic version that handles 60% of cases, then we add features to get to 90%+. This way you start seeing value quickly while we continue to improve the system.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Real Example Timeline</h2>
                            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Project:</strong> Customer Support AI Agent
                                </p>
                                <ul className="space-y-2 text-lg">
                                    <li>• <strong>Day 1-3:</strong> Discovery call, requirements gathering, process mapping</li>
                                    <li>• <strong>Day 4-10:</strong> Build core agent, integrate with CRM and knowledge base</li>
                                    <li>• <strong>Day 11-17:</strong> Train AI on support scenarios, test responses</li>
                                    <li>• <strong>Day 18-21:</strong> Refine based on testing, add edge cases</li>
                                    <li>• <strong>Day 22-24:</strong> Deploy to production, train team, go live</li>
                                </ul>
                                <p className="text-lg leading-relaxed mt-4 text-white/70">
                                    Total: 3.5 weeks from start to production
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Get Started?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                Every project is different. The best way to know your timeline is to discuss your specific needs. We'll give you a realistic timeline based on your requirements.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Get a Timeline Estimate
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
                        <Link to="/getting-started/implementing-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            Implementation guide →
                        </Link>
                        <Link to="/guides/how-to-implement-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            How to implement AI automation →
                        </Link>
                        <Link to="/faq/how-much-does-ai-automation-cost" className="text-white/70 hover:text-white transition-colors">
                            How much does it cost? →
                        </Link>
                        <Link to="/guides/ai-automation-best-practices" className="text-white/70 hover:text-white transition-colors">
                            Best practices →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
