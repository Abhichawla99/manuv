import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const DoINeedTechnicalSkillsPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Do I Need Technical Skills for AI Automation? | manuv.co"
                description="Learn if you need technical skills to use AI automation. Understand what technical knowledge is required and how to work with AI automation without coding."
                keywords="AI automation technical skills, do I need to code, non-technical automation, business user automation"
                canonical="https://manuv.co/faq/do-i-need-technical-skills"
                ogUrl="https://manuv.co/faq/do-i-need-technical-skills"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <User className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">FAQ</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            Do I Need Technical Skills for AI Automation?
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            The short answer: No. Here's what you actually need to know to successfully implement and use AI automation.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Simple Answer</h2>
                            <p className="text-lg leading-relaxed">
                                You don't need to know how to code or have deep technical skills. What you do need is a clear understanding of your business processes and what you want automated. The technical work is handled by the development team.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What You Actually Need</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                To successfully work with AI automation, you need business knowledge, not technical skills:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Understanding Your Processes</h3>
                                    <p className="text-lg leading-relaxed">
                                        You need to know how your business works: what tasks happen, what decisions are made, what information is needed. This is business knowledge, not technical knowledge.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Clear Communication</h3>
                                    <p className="text-lg leading-relaxed">
                                        You need to be able to explain what you want automated and provide feedback. Think of it like working with a contractor—you don't need to know how to build, but you need to explain what you want built.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Basic Computer Skills</h3>
                                    <p className="text-lg leading-relaxed">
                                        You should be comfortable using your existing business tools (email, CRM, etc.). That's usually enough. The automation will work with tools you already know.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What the Development Team Handles</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                All the technical work is done by the development team:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Coding & Development:</strong> Writing the code, building the workflows, integrating systems.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">AI Training:</strong> Setting up and training the AI models, fine-tuning responses.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Infrastructure:</strong> Setting up servers, databases, APIs, and all the technical infrastructure.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Testing & Debugging:</strong> Making sure everything works correctly and fixing any issues.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How It Works in Practice</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Here's what the process looks like from your perspective:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 1: You Explain What You Want</h3>
                                    <p className="text-lg leading-relaxed">
                                        "I want an AI agent that reads customer emails, understands what they need, and either answers the question or routes it to the right person." You explain in plain business language.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 2: The Team Builds It</h3>
                                    <p className="text-lg leading-relaxed">
                                        The development team handles all the technical work: coding, AI setup, integrations, testing. You don't need to understand how it works under the hood.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 3: You Test and Provide Feedback</h3>
                                    <p className="text-lg leading-relaxed">
                                        You use the system and say things like "This response doesn't sound right" or "It should handle this case differently." The team adjusts based on your feedback.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 4: You Use It Daily</h3>
                                    <p className="text-lg leading-relaxed">
                                        Once it's set up, you use it like any other business tool. You don't need to code or maintain it—you just use it to get work done.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What About Managing It?</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Managing an AI automation system is usually straightforward:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Monitoring:</strong> You check a dashboard to see how it's performing. No technical knowledge needed—just like checking sales numbers.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Updates:</strong> When you want to change something, you explain what you want changed. The team handles the technical implementation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Maintenance:</strong> The development team handles ongoing maintenance. You might have a monthly check-in, but day-to-day maintenance is handled for you.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Real Example</h2>
                            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Sarah runs a marketing agency.</strong> She wanted to automate lead qualification. She doesn't know how to code, but she knows her business:
                                </p>
                                <ul className="space-y-2 text-lg mb-4">
                                    <li>• She explained: "When someone fills out our contact form, I want to know if they're a good fit before I spend time on a call."</li>
                                    <li>• The team built an AI system that researches leads, scores them, and routes good fits to her calendar.</li>
                                    <li>• Sarah now uses it daily—she just checks her calendar for qualified leads. No technical skills needed.</li>
                                </ul>
                                <p className="text-lg leading-relaxed text-white/70">
                                    The technical complexity is hidden. Sarah just gets better leads without doing the research herself.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">When Technical Skills Help (But Aren't Required)</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Having some technical knowledge can be helpful but isn't necessary:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Understanding APIs:</strong> Helpful to know what they are, but you don't need to build them.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Basic Data Concepts:</strong> Understanding how data flows helps, but you don't need to code it.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">System Thinking:</strong> Being able to think about how systems connect is useful, but you don't need to implement it.</span>
                                </li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                These skills help you communicate better with the development team, but the team can work with you even if you don't have them.
                            </p>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Get Started?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                You don't need to be technical to benefit from AI automation. You just need to know your business and what you want to automate. We handle all the technical work.
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
                    <h2 className="text-2xl font-extralight text-white mb-6">Related Topics</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/getting-started/ai-automation-basics" className="text-white/70 hover:text-white transition-colors">
                            Getting started guide →
                        </Link>
                        <Link to="/faq/how-long-does-it-take-to-implement" className="text-white/70 hover:text-white transition-colors">
                            How long does it take? →
                        </Link>
                        <Link to="/guides/how-to-implement-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            Implementation guide →
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
