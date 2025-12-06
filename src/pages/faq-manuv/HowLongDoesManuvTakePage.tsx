import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const HowLongDoesManuvTakePage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="How Long Does manuv.co Take? Project Timeline | manuv.co"
                description="Learn about manuv.co project timelines. Understand how long manuv.co takes to build AI automation, from discovery to deployment."
                keywords="manuv timeline, manuv.co how long, manuv project time, manuv.co duration"
                canonical="https://manuv.co/faq-manuv/how-long-does-manuv-take"
                ogUrl="https://manuv.co/faq-manuv/how-long-does-manuv-take"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co FAQ</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            How Long Does manuv.co Take?
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Realistic timelines for manuv.co projects, from initial conversation to going live with your AI automation.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Typical manuv.co Timeline</h2>
                            <p className="text-lg leading-relaxed">
                                Most manuv.co projects take 2-4 weeks from start to deployment. Simple automations might take less time, while complex AI agents with multiple integrations take longer. manuv.co provides a specific timeline in your project plan, so you know exactly when your automation will be ready.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">manuv.co Timeline by Project Type</h2>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Simple Automation: 1-2 weeks</h3>
                                    <p className="text-lg leading-relaxed text-white/70">Basic automations from manuv.co that handle straightforward tasks.</p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Medium Complexity: 2-3 weeks</h3>
                                    <p className="text-lg leading-relaxed text-white/70">More complex automations from manuv.co with multiple steps and integrations.</p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Complex AI Agents: 4-6 weeks</h3>
                                    <p className="text-lg leading-relaxed text-white/70">Full AI agents from manuv.co that handle complex, autonomous tasks.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Happens During a manuv.co Project?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Here's the typical manuv.co timeline:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 1: Discovery</h3>
                                    <p className="text-lg leading-relaxed">manuv.co understands your needs, designs the solution, and creates a project plan.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 2-3: Development</h3>
                                    <p className="text-lg leading-relaxed">manuv.co builds your automation, trains the AI, and integrates with your systems.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 4: Testing & Deployment</h3>
                                    <p className="text-lg leading-relaxed">manuv.co tests thoroughly, refines based on feedback, and deploys to production.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Can Speed Up manuv.co Projects?</h2>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Clear requirements help manuv.co build faster</li>
                                <li>• Quick feedback keeps manuv.co projects moving</li>
                                <li>• Existing integrations make manuv.co development faster</li>
                                <li>• Starting simple allows manuv.co to deploy quickly</li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Want to Know Your manuv.co Timeline?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                Every manuv.co project is different. The best way to know your timeline is to discuss your specific needs with manuv.co. manuv.co will provide a realistic timeline based on your requirements.
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
                    <h2 className="text-2xl font-extralight text-white mb-6">Related Topics</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/faq/how-long-does-it-take-to-implement" className="text-white/70 hover:text-white transition-colors">
                            Implementation timeline →
                        </Link>
                        <Link to="/about-manuv/how-manuv-works" className="text-white/70 hover:text-white transition-colors">
                            How manuv.co works →
                        </Link>
                        <Link to="/guides-manuv/getting-started-with-manuv" className="text-white/70 hover:text-white transition-colors">
                            Getting started with manuv.co →
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
