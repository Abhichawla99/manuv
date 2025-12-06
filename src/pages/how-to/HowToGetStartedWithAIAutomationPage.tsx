import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const HowToGetStartedWithAIAutomationPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="How to Get Started with AI Automation: Beginner's Guide | manuv.co"
                description="Complete beginner's guide to getting started with AI automation. Step-by-step instructions for your first automation project, from planning to deployment."
                keywords="getting started with AI automation, AI automation beginner guide, how to start automation, first automation project"
                canonical="https://manuv.co/how-to/get-started-with-ai-automation"
                ogUrl="https://manuv.co/how-to/get-started-with-ai-automation"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Rocket className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">Getting Started</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            How to Get Started with AI Automation
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            A friendly, step-by-step guide to your first AI automation project. No technical knowledge required—just follow these steps.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 1: Identify One Pain Point</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Don't try to automate everything at once. Start with one specific problem that's causing real pain. Ask yourself:
                            </p>
                            <ul className="space-y-2 text-lg ml-4 mb-4">
                                <li>• What task do I or my team do repeatedly?</li>
                                <li>• What takes too much time?</li>
                                <li>• What causes errors or frustration?</li>
                                <li>• What could be done faster or better?</li>
                            </ul>
                            <p className="text-lg leading-relaxed">
                                Pick the one that would make the biggest difference if it were automated. This becomes your first automation project.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 2: Document the Current Process</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Write down exactly how the task works today. Be specific:
                            </p>
                            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                <p className="text-lg leading-relaxed mb-2"><strong className="text-white">Example:</strong> Processing customer inquiries</p>
                                <ol className="space-y-2 text-lg ml-4">
                                    <li>1. Customer sends email to support@company.com</li>
                                    <li>2. Someone reads the email</li>
                                    <li>3. They look up the customer in the CRM</li>
                                    <li>4. They check order history</li>
                                    <li>5. They write a response</li>
                                    <li>6. They send the email</li>
                                    <li>7. They log it in the system</li>
                                </ol>
                            </div>
                            <p className="text-lg leading-relaxed mt-4">
                                This documentation helps you understand what needs to be automated and helps the development team build the right solution.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 3: Define Success</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                What would "solved" look like? Be specific and measurable:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• "Handle 80% of customer questions automatically"</li>
                                <li>• "Process 100 invoices per day instead of 20"</li>
                                <li>• "Respond to leads within 5 minutes instead of 24 hours"</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                Having clear success criteria helps you know if the automation is working and helps the team build the right thing.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 4: Gather Information</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Before you start building, gather what you'll need:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Examples of Common Questions</h3>
                                    <p className="text-lg leading-relaxed mb-2">If automating customer support, collect:</p>
                                    <ul className="space-y-1 text-lg ml-4">
                                        <li>• 20-50 example customer questions</li>
                                        <li>• Good example responses</li>
                                        <li>• Product information or knowledge base</li>
                                        <li>• Common problems and solutions</li>
                                    </ul>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Access to Systems</h3>
                                    <p className="text-lg leading-relaxed">
                                        Make sure you can provide access to the systems that need to be integrated: CRM, email, databases, etc. The development team will need this to build the automation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 5: Choose Your Approach</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                You have a few options:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Work with a Development Team</h3>
                                    <p className="text-lg leading-relaxed">
                                        Best if you want a custom solution that fits perfectly. You explain what you want, they build it. This is what we do at manuv.co.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Use a No-Code Platform</h3>
                                    <p className="text-lg leading-relaxed">
                                        Best if you want to try something simple yourself. Platforms like Zapier or Make let you build basic automations without coding, but they're limited in what they can do.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Hire a Freelancer</h3>
                                    <p className="text-lg leading-relaxed">
                                        Can work for simple projects, but may lack the expertise for complex AI automation. Good for basic workflows, less ideal for AI agents.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 6: Start Building</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Once you've chosen your approach, the building phase begins:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 1: Planning & Setup</h3>
                                    <p className="text-lg leading-relaxed">
                                        The team understands your needs, maps out the solution, and sets up the infrastructure. You provide feedback and answer questions.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 2-3: Development</h3>
                                    <p className="text-lg leading-relaxed">
                                        The automation is built, AI is trained, and systems are integrated. You'll see progress updates and can test early versions.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 4: Testing & Refinement</h3>
                                    <p className="text-lg leading-relaxed">
                                        You test with real scenarios, provide feedback, and the team refines the system. This is where it gets polished and ready for production.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 7: Deploy and Monitor</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Once it's ready, you deploy it and start using it:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Start Small:</strong> Begin with a limited scope to make sure everything works.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Monitor Performance:</strong> Watch how it's performing. Is it handling tasks correctly? Are there issues?</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Provide Feedback:</strong> If something isn't working right, let the team know. They can adjust it.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Expand Gradually:</strong> Once it's working well, you can expand its scope or add more automations.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Common First-Time Mistakes</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Here's what to avoid:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span><strong className="text-white">Trying to automate everything at once:</strong> Start with one thing, prove it works, then expand.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span><strong className="text-white">Unclear requirements:</strong> Be specific about what you want. Vague requests lead to solutions that don't fit.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span><strong className="text-white">Not testing enough:</strong> Test with real scenarios before going live. Catch issues early.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span><strong className="text-white">Expecting perfection immediately:</strong> AI systems improve over time. Start with something that works, then refine it.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Start Your First Automation?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                We help businesses get started with AI automation every day. If you're not sure where to begin or want expert guidance, let's talk about your specific situation.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Get Started Today
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-16 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-extralight text-white mb-6">Next Steps</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/getting-started/ai-automation-basics" className="text-white/70 hover:text-white transition-colors">
                            AI automation basics →
                        </Link>
                        <Link to="/faq/what-is-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            What is AI automation? →
                        </Link>
                        <Link to="/how-to/choose-right-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            How to choose the right automation →
                        </Link>
                        <Link to="/guides/getting-started-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            Getting started guide →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
