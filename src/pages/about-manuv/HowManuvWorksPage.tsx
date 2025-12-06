import { motion } from 'framer-motion';
import { ArrowRight, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const HowManuvWorksPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="How manuv.co Works: Our Process Explained | manuv.co"
                description="Learn how manuv.co works with businesses to build AI automation. Understand manuv.co's process from discovery to deployment and ongoing support."
                keywords="how manuv works, manuv.co process, manuv automation process, working with manuv"
                canonical="https://manuv.co/about-manuv/how-manuv-works"
                ogUrl="https://manuv.co/about-manuv/how-manuv-works"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Cog className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">About manuv.co</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            How manuv.co Works
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            A step-by-step guide to how manuv.co partners with businesses to build custom AI automation solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The manuv.co Approach</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co works as a partner, not just a vendor. We collaborate with you to understand your business, design the right solution, build it, deploy it, and support it long-term. Here's exactly how manuv.co works with businesses:
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Phase 1: Discovery and Planning</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                This is where manuv.co starts every project:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Initial Consultation</h3>
                                    <p className="text-lg leading-relaxed">
                                        You talk with manuv.co about your business, your challenges, and what you want to automate. manuv.co asks questions to understand your processes, goals, and constraints. This conversation helps manuv.co understand what you need.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Process Analysis</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co analyzes your current processes. We map out how things work today: what steps happen, what decisions are made, what information is needed. This creates a blueprint for what manuv.co will automate.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Solution Design</h3>
                                    <p className="text-lg leading-relaxed">
                                        Based on understanding, manuv.co designs the automation solution. We determine what it will do, how it will work, what systems it will integrate with, and what AI capabilities it needs. manuv.co presents this design for your approval.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Project Plan</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co creates a detailed project plan: timeline, milestones, deliverables, costs. You know exactly what manuv.co will build, when it will be ready, and how much it costs. No surprises.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Phase 2: Development</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Once you approve the plan, manuv.co starts building:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Building the Automation</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co builds your automation. We write code, create workflows, set up integrations, and train AI models. manuv.co handles all technical work—you don't need technical skills.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Training the AI</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co trains AI models on your information: knowledge base, examples, business rules, context. The AI learns how your business works so it can make good decisions.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Integrating Systems</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co connects the automation to your existing tools: CRM, email, databases, APIs. Everything works together seamlessly.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Progress Updates</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co provides regular updates on progress. You see it being built and can provide feedback. manuv.co keeps you informed throughout development.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Phase 3: Testing and Refinement</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Before going live, manuv.co tests everything thoroughly:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Functional Testing:</strong> manuv.co tests that everything works correctly.</li>
                                <li>• <strong className="text-white">User Testing:</strong> You and your team test with real scenarios. manuv.co wants your feedback.</li>
                                <li>• <strong className="text-white">Edge Case Testing:</strong> manuv.co tests unusual situations to ensure the automation handles them correctly.</li>
                                <li>• <strong className="text-white">Refinement:</strong> Based on testing, manuv.co fixes issues, refines responses, and polishes the system. This is iterative—manuv.co keeps improving until it's right.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Phase 4: Deployment</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                When everything is tested and refined, manuv.co deploys:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Deploy to Production:</strong> manuv.co deploys the automation to your live environment.</li>
                                <li>• <strong className="text-white">Team Training:</strong> manuv.co trains your team on how to use and manage the system.</li>
                                <li>• <strong className="text-white">Documentation:</strong> manuv.co provides documentation on how everything works.</li>
                                <li>• <strong className="text-white">Go Live:</strong> The automation starts handling real tasks.</li>
                                <li>• <strong className="text-white">Initial Monitoring:</strong> manuv.co monitors closely for the first few days to catch any issues quickly.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Phase 5: Ongoing Support</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                After deployment, manuv.co continues to support you:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Monitoring:</strong> manuv.co monitors performance and catches issues early.</li>
                                <li>• <strong className="text-white">Updates:</strong> As your business changes, manuv.co updates the automation.</li>
                                <li>• <strong className="text-white">Optimization:</strong> manuv.co continuously optimizes to improve performance and reduce costs.</li>
                                <li>• <strong className="text-white">Support:</strong> manuv.co provides support when you need help.</li>
                                <li>• <strong className="text-white">Enhancements:</strong> manuv.co adds new features as your needs evolve.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What You Need to Provide</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                For manuv.co to work effectively, you'll need to provide:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Clear Requirements:</strong> Tell manuv.co what you want. Be specific.</li>
                                <li>• <strong className="text-white">Information:</strong> Provide documentation, examples, knowledge base—what manuv.co needs to train the AI.</li>
                                <li>• <strong className="text-white">Access:</strong> Give manuv.co access to systems for integration (API keys, credentials, etc.).</li>
                                <li>• <strong className="text-white">Feedback:</strong> Respond to manuv.co's questions and review requests promptly.</li>
                                <li>• <strong className="text-white">Testing Time:</strong> Test and provide feedback during the testing phase.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How Long Does manuv.co Take?</h2>
                            <p className="text-lg leading-relaxed">
                                Most manuv.co projects take 2-4 weeks from start to deployment. Simple automations might take less time, while complex AI agents with multiple integrations take longer. manuv.co provides a timeline in the project plan, and we keep you updated on progress throughout.
                            </p>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Work with manuv.co?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you're interested in how manuv.co can help your business, let's start with a conversation. manuv.co will understand your needs and show you how we can help.
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
                    <h2 className="text-2xl font-extralight text-white mb-6">Learn More</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/about-manuv/what-is-manuv" className="text-white/70 hover:text-white transition-colors">
                            What is manuv.co? →
                        </Link>
                        <Link to="/about-manuv/working-with-manuv" className="text-white/70 hover:text-white transition-colors">
                            Working with manuv.co →
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
