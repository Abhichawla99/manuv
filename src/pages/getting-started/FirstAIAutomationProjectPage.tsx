import { motion } from 'framer-motion';
import { ArrowRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const FirstAIAutomationProjectPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Your First AI Automation Project: Complete Guide | manuv.co"
                description="Step-by-step guide to planning and executing your first AI automation project. Learn what to expect, how to prepare, and how to ensure success."
                keywords="first AI automation project, starting automation, first automation, automation project guide, beginner automation"
                canonical="https://manuv.co/getting-started/first-ai-automation-project"
                ogUrl="https://manuv.co/getting-started/first-ai-automation-project"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Target className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">Getting Started</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            Your First AI Automation Project
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            A friendly, step-by-step guide to planning and executing your first AI automation project successfully.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Starting Your First Project</h2>
                            <p className="text-lg leading-relaxed">
                                Your first AI automation project is exciting but can feel overwhelming. This guide walks you through everything step by step, so you know exactly what to expect and how to prepare.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 1: Choose the Right First Project</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Your first project should be:
                            </p>
                            <ul className="space-y-2 text-lg ml-4 mb-4">
                                <li>• <strong className="text-white">High impact:</strong> Something that will make a noticeable difference</li>
                                <li>• <strong className="text-white">Manageable scope:</strong> Not too complex, but not too simple</li>
                                <li>• <strong className="text-white">Clear success criteria:</strong> You can easily tell if it's working</li>
                                <li>• <strong className="text-white">Stable process:</strong> The process doesn't change constantly</li>
                            </ul>
                            <p className="text-lg leading-relaxed">
                                Good first projects: customer support automation, lead qualification, document processing, email auto-tagging. Avoid: complex multi-system workflows, processes that are still being figured out, or tasks that require deep human judgment.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 2: Document Your Current Process</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Before automating, understand exactly how the process works today:
                            </p>
                            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                <p className="text-lg leading-relaxed mb-2"><strong className="text-white">Write down:</strong></p>
                                <ul className="space-y-2 text-lg ml-4">
                                    <li>• Every step that happens (be specific)</li>
                                    <li>• What information is needed at each step</li>
                                    <li>• What decisions are made and how</li>
                                    <li>• What systems are involved</li>
                                    <li>• How long each step takes</li>
                                    <li>• Where errors commonly occur</li>
                                </ul>
                            </div>
                            <p className="text-lg leading-relaxed mt-4">
                                This documentation helps you understand what needs to be automated and helps the development team build the right solution.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 3: Gather Information</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Collect everything the AI will need:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Knowledge Base</h3>
                                    <p className="text-lg leading-relaxed">
                                        Product information, policies, FAQs, documentation—anything the AI needs to know to do its job correctly.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Examples</h3>
                                    <p className="text-lg leading-relaxed">
                                        Real examples of good interactions, responses, or outcomes. These show the AI what "good" looks like.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Business Rules</h3>
                                    <p className="text-lg leading-relaxed">
                                        The rules and policies the AI should follow. Be specific: "Always check account status before processing refunds."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 4: Choose Your Approach</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                You have options for your first project:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Work with a Development Team</h3>
                                    <p className="text-lg leading-relaxed">
                                        Best for: Custom solutions, complex tasks, when you want expert guidance. You explain what you want, they build it. This is what we do at manuv.co.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Use a No-Code Platform</h3>
                                    <p className="text-lg leading-relaxed">
                                        Best for: Simple workflows, when you want to try it yourself, basic automations. Limited in what they can do, but good for learning.
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mt-4">
                                For your first project, working with a team is often better—you get expert guidance and avoid common mistakes.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 5: Set Expectations</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Have realistic expectations:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• It will take 2-4 weeks to build (depending on complexity)</li>
                                <li>• It won't be perfect immediately—expect 70-80% accuracy initially</li>
                                <li>• You'll need to test and provide feedback</li>
                                <li>• It will improve over time with refinement</li>
                                <li>• There will be ongoing costs (AI APIs, hosting, maintenance)</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                Realistic expectations prevent disappointment and help you plan properly.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 6: Prepare Your Team</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Get your team ready:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Explain what you're automating and why</li>
                                <li>• Show how it helps them (less repetitive work)</li>
                                <li>• Involve them in planning—they know the process best</li>
                                <li>• Plan for training on how to use and manage the system</li>
                                <li>• Address concerns about job security (automation helps, doesn't replace)</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                Team buy-in is crucial for success. If they resist, the project will struggle.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 7: During Development</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                While the automation is being built:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Respond quickly to questions—delays slow down the project</li>
                                <li>• Review progress updates and provide feedback</li>
                                <li>• Test early versions when available</li>
                                <li>• Don't change requirements mid-project (unless necessary)</li>
                                <li>• Trust the process—experienced teams know what they're doing</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 8: Testing Phase</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Testing is critical. Don't rush it:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Test with real scenarios, not just ideal cases</li>
                                <li>• Test edge cases and unusual situations</li>
                                <li>• Have your team test—they'll catch things you might miss</li>
                                <li>• Provide detailed feedback on what works and what doesn't</li>
                                <li>• Don't go live until you're confident it works well</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 9: Going Live</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                When it's time to deploy:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Start with limited scope—don't turn on everything at once</li>
                                <li>• Monitor closely for the first few days</li>
                                <li>• Be available to handle issues quickly</li>
                                <li>• Gather feedback from users</li>
                                <li>• Plan for refinements—things will need adjustment</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 10: After Launch</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                The work continues after launch:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Monitor performance regularly</li>
                                <li>• Track metrics: automation rate, error rate, time saved</li>
                                <li>• Gather user feedback</li>
                                <li>• Make refinements based on real usage</li>
                                <li>• Update knowledge as your business changes</li>
                                <li>• Plan your next automation project</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Success Looks Like</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                A successful first project:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Handles the intended tasks automatically</li>
                                <li>• Saves significant time (measurable hours per week)</li>
                                <li>• Reduces errors</li>
                                <li>• Your team finds it useful</li>
                                <li>• Provides clear ROI</li>
                                <li>• Sets you up for more automation projects</li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Start Your First Project?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                We help businesses with their first AI automation projects every day. We know what works, what doesn't, and how to set you up for success. If you're ready to start, let's talk about your project.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Start Your First Project
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-16 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-extralight text-white mb-6">Related Resources</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/getting-started/ai-automation-basics" className="text-white/70 hover:text-white transition-colors">
                            Automation basics →
                        </Link>
                        <Link to="/how-to/get-started-with-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            Getting started guide →
                        </Link>
                        <Link to="/best-practices/ai-automation-mistakes-to-avoid" className="text-white/70 hover:text-white transition-colors">
                            Mistakes to avoid →
                        </Link>
                        <Link to="/faq/what-is-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            What is AI automation? →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
