import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ImplementingAIAutomationPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Implementing AI Automation: Step-by-Step Implementation Guide | manuv.co"
                description="Complete guide to implementing AI automation in your business. Learn the implementation process, what to expect, and how to ensure success."
                keywords="implementing AI automation, automation implementation, AI automation process, automation deployment, automation setup"
                canonical="https://manuv.co/getting-started/implementing-ai-automation"
                ogUrl="https://manuv.co/getting-started/implementing-ai-automation"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Play className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">Getting Started</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            Implementing AI Automation
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            A complete guide to the AI automation implementation process, from initial planning to going live and beyond.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Implementation Process</h2>
                            <p className="text-lg leading-relaxed">
                                Implementing AI automation follows a structured process. Understanding this process helps you know what to expect and how to prepare. Here's how it typically works:
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Phase 1: Discovery and Planning (Week 1)</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                This is where everything starts. The goal is to understand your needs completely:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Initial Consultation</h3>
                                    <p className="text-lg leading-relaxed">
                                        You discuss your pain points, goals, and what you want to automate. The team asks questions to understand your business, processes, and requirements.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Process Mapping</h3>
                                    <p className="text-lg leading-relaxed">
                                        The team maps out how your current process works: what steps happen, what decisions are made, what information is needed. This creates a blueprint for automation.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Solution Design</h3>
                                    <p className="text-lg leading-relaxed">
                                        Based on understanding, the team designs the automation solution: what it will do, how it will work, what systems it will integrate with, what AI capabilities it needs.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Project Plan</h3>
                                    <p className="text-lg leading-relaxed">
                                        A detailed plan is created: timeline, milestones, deliverables, costs. You know exactly what will be built, when, and how much it costs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Phase 2: Development (Week 2-3)</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                This is where the automation is built:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Building the Workflow</h3>
                                    <p className="text-lg leading-relaxed">
                                        The development team builds the automation workflow: connecting steps, setting up logic, creating the flow of how tasks are handled.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Integrating Systems</h3>
                                    <p className="text-lg leading-relaxed">
                                        Connections are made to your systems: CRM, email, databases, APIs. The automation can now read from and write to your tools.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Training the AI</h3>
                                    <p className="text-lg leading-relaxed">
                                        The AI is trained on your information: knowledge base, examples, rules, context. It learns how your business works and how to respond.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Progress Updates</h3>
                                    <p className="text-lg leading-relaxed">
                                        You receive regular updates on progress. You can see it being built and provide feedback along the way.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Phase 3: Testing and Refinement (Week 3-4)</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Before going live, everything is tested thoroughly:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Functional Testing</h3>
                                    <p className="text-lg leading-relaxed">
                                        Does it work? The team tests all functionality: workflows execute correctly, integrations work, AI responds appropriately.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">User Testing</h3>
                                    <p className="text-lg leading-relaxed">
                                        You and your team test with real scenarios. Does it handle your actual use cases? Are responses good? Does it work as expected?
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Edge Case Testing</h3>
                                    <p className="text-lg leading-relaxed">
                                        What about unusual situations? The team tests edge cases to make sure the automation handles them correctly or escalates appropriately.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Refinement</h3>
                                    <p className="text-lg leading-relaxed">
                                        Based on testing, issues are fixed, responses are refined, and the system is polished. This is an iterative process—test, fix, test again.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Phase 4: Deployment (Week 4)</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Once testing is complete, it's time to go live:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Deploy to Production:</strong> The automation is deployed to your live environment.</li>
                                <li>• <strong className="text-white">Team Training:</strong> Your team is trained on how to use and manage the system.</li>
                                <li>• <strong className="text-white">Documentation:</strong> You receive documentation on how everything works.</li>
                                <li>• <strong className="text-white">Go Live:</strong> The automation starts handling real tasks.</li>
                                <li>• <strong className="text-white">Initial Monitoring:</strong> The team monitors closely for the first few days to catch any issues quickly.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Phase 5: Optimization (Ongoing)</h2>
                            <p className="text-lg leading-relaxed">
                                After deployment, the work continues. The automation is monitored, performance is tracked, and improvements are made. As you use it, you'll identify opportunities to optimize: reduce costs, improve accuracy, handle more cases, add features.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What You Need to Provide</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                For implementation to go smoothly, you'll need to provide:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Clear Requirements:</strong> Be specific about what you want. Vague requirements lead to solutions that don't fit.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Information:</strong> Documentation, examples, knowledge base—everything the AI needs to learn.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Access:</strong> API keys, credentials, test environments—what the team needs to integrate.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Feedback:</strong> Quick responses to questions and review requests keep the project moving.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Testing Time:</strong> Your team needs to test and provide feedback during the testing phase.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Common Implementation Challenges</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">Changing Requirements</h3>
                                    <p className="text-lg leading-relaxed">
                                        If requirements change mid-project, it adds time and cost. That's why the discovery phase is so important—get it right upfront.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">Integration Issues</h3>
                                    <p className="text-lg leading-relaxed">
                                        Sometimes integrations are more complex than expected, especially with legacy systems. Good teams plan for this and have solutions.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">Data Quality</h3>
                                    <p className="text-lg leading-relaxed">
                                        If the information provided is incomplete or inaccurate, the AI won't perform well. Quality data is essential.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">Scope Creep</h3>
                                    <p className="text-lg leading-relaxed">
                                        Adding features during development extends timelines. Stick to the plan, or formally adjust scope and timeline together.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Tips for Successful Implementation</h2>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">✓</span>
                                    <span><strong className="text-white">Be Specific:</strong> Clear requirements lead to better solutions. Don't be vague.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">✓</span>
                                    <span><strong className="text-white">Provide Quality Information:</strong> Good data leads to good results. Invest time in gathering quality information.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">✓</span>
                                    <span><strong className="text-white">Respond Quickly:</strong> Fast feedback keeps projects moving. Don't let questions sit unanswered.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">✓</span>
                                    <span><strong className="text-white">Test Thoroughly:</strong> Don't rush testing. Catch issues before going live.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">✓</span>
                                    <span><strong className="text-white">Plan for Maintenance:</strong> Implementation isn't the end. Plan for ongoing maintenance and improvement.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Implement AI Automation?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                We've implemented AI automation for many businesses. We know the process, we know the challenges, and we know how to make it successful. If you're ready to implement automation, let's talk about your project.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Start Your Project
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-16 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-extralight text-white mb-6">Related Guides</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/guides/how-to-implement-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            Implementation guide →
                        </Link>
                        <Link to="/faq/how-long-does-it-take-to-implement" className="text-white/70 hover:text-white transition-colors">
                            Implementation timeline →
                        </Link>
                        <Link to="/best-practices/ai-automation-success-factors" className="text-white/70 hover:text-white transition-colors">
                            Success factors →
                        </Link>
                        <Link to="/getting-started/ai-automation-basics" className="text-white/70 hover:text-white transition-colors">
                            Automation basics →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
