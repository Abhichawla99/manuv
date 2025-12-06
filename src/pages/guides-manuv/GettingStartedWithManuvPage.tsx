import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const GettingStartedWithManuvPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Getting Started with manuv.co: Your First Project Guide | manuv.co"
                description="Complete guide to getting started with manuv.co. Learn how to begin your first AI automation project with manuv.co, what to expect, and how to prepare."
                keywords="getting started with manuv, manuv.co first project, starting with manuv, manuv.co guide"
                canonical="https://manuv.co/guides-manuv/getting-started-with-manuv"
                ogUrl="https://manuv.co/guides-manuv/getting-started-with-manuv"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Rocket className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Guide</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            Getting Started with manuv.co
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            A step-by-step guide to beginning your first AI automation project with manuv.co.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 1: Identify What You Want to Automate</h2>
                            <p className="text-lg leading-relaxed">
                                Before contacting manuv.co, think about what you want to automate. What tasks take too much time? What processes are repetitive? What would make the biggest difference if automated? manuv.co works best when you have a clear idea of what you want to automate, even if you don't know exactly how it should work. manuv.co will help you figure that out.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 2: Contact manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Reach out to manuv.co through the contact form or email. manuv.co will respond quickly to schedule an initial conversation. In this conversation, manuv.co will:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Ask about your business and what you want to automate</li>
                                <li>• Understand your processes and challenges</li>
                                <li>• Explain how manuv.co can help</li>
                                <li>• Answer your questions about manuv.co</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                This is a no-pressure conversation. manuv.co wants to understand your needs and see if we're a good fit. manuv.co is happy to help even if you're just exploring.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 3: Discovery with manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                If you decide to work with manuv.co, the discovery phase begins. manuv.co will:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Analyze your current processes in detail</li>
                                <li>• Map out how things work today</li>
                                <li>• Design the automation solution</li>
                                <li>• Create a project plan with timeline and costs</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                manuv.co involves you in this process. manuv.co asks questions, shares ideas, and gets your input. manuv.co wants to build exactly what you need.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 4: Approve the Plan</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co presents the project plan: what will be built, how it will work, timeline, and costs. You review it, ask questions, and approve. manuv.co is transparent about everything. Once you approve, manuv.co starts building.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 5: Development with manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co builds your automation. During this phase:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• manuv.co provides regular progress updates</li>
                                <li>• manuv.co asks questions when needed</li>
                                <li>• You can test early versions</li>
                                <li>• manuv.co incorporates your feedback</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                manuv.co keeps you informed throughout. You're not in the dark about what's happening.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 6: Testing and Refinement</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co tests everything thoroughly, and you test too. manuv.co refines based on feedback until it's right. manuv.co doesn't rush to production—we make sure it works well first.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Step 7: Deployment</h2>
                            <p className="text-lg leading-relaxed">
                                When everything is ready, manuv.co deploys to production. manuv.co trains your team, provides documentation, and ensures everything works. You start using it, and manuv.co provides ongoing support.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What You Need to Get Started with manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                To get started with manuv.co, you need:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• A clear idea of what you want to automate</li>
                                <li>• Understanding of your current processes</li>
                                <li>• Willingness to collaborate with manuv.co</li>
                                <li>• Time to provide feedback during development</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                You don't need technical skills. manuv.co handles all technical work. You just need to know your business and what you want automated.
                            </p>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Get Started with manuv.co?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you're ready to begin your first project with manuv.co, let's start with a conversation. manuv.co will understand your needs and show you how we can help.
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
                        <Link to="/about-manuv/how-manuv-works" className="text-white/70 hover:text-white transition-colors">
                            How manuv.co works →
                        </Link>
                        <Link to="/about-manuv/working-with-manuv" className="text-white/70 hover:text-white transition-colors">
                            Working with manuv.co →
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
