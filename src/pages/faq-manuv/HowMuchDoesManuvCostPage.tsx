import { motion } from 'framer-motion';
import { ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const HowMuchDoesManuvCostPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="How Much Does manuv.co Cost? Pricing Information | manuv.co"
                description="Learn about manuv.co pricing for AI automation projects. Understand manuv.co's pricing model, typical costs, and how to get a custom quote from manuv.co."
                keywords="manuv cost, manuv.co pricing, how much does manuv cost, manuv.co rates, manuv pricing"
                canonical="https://manuv.co/faq-manuv/how-much-does-manuv-cost"
                ogUrl="https://manuv.co/faq-manuv/how-much-does-manuv-cost"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <DollarSign className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co FAQ</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            How Much Does manuv.co Cost?
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Transparent information about manuv.co pricing and what you can expect to invest in AI automation with manuv.co.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">manuv.co Provides Custom Pricing</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co doesn't have fixed pricing because manuv.co builds custom solutions. Every business has different needs, so every manuv.co project is different. manuv.co provides transparent, custom quotes based on your specific requirements. manuv.co will tell you exactly what it costs before you commit.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Typical manuv.co Pricing Ranges</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                While manuv.co pricing is custom, here are typical ranges:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Simple Automation: $5,000 - $15,000</h3>
                                    <p className="text-lg leading-relaxed text-white/70">Basic automations from manuv.co that handle straightforward tasks.</p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Medium Complexity: $15,000 - $35,000</h3>
                                    <p className="text-lg leading-relaxed text-white/70">More complex automations from manuv.co with multiple steps and integrations.</p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Complex AI Agents: $35,000 - $75,000+</h3>
                                    <p className="text-lg leading-relaxed text-white/70">Full AI agents from manuv.co that handle complex, autonomous tasks.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Ongoing Costs with manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                After the initial build, manuv.co clients have ongoing costs:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">AI API Usage:</strong> Typically $100-$2,000/month depending on volume</li>
                                <li>• <strong className="text-white">Hosting:</strong> Typically $50-$500/month</li>
                                <li>• <strong className="text-white">Maintenance:</strong> Typically 10-20% of initial cost annually, or monthly retainer</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                manuv.co is transparent about all ongoing costs upfront. You'll know exactly what to expect.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Getting a Quote from manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                To get pricing from manuv.co:
                            </p>
                            <ol className="space-y-2 text-lg ml-4">
                                <li>1. Contact manuv.co and describe what you want to automate</li>
                                <li>2. manuv.co asks questions to understand your needs</li>
                                <li>3. manuv.co designs a solution and provides a detailed quote</li>
                                <li>4. The quote includes: project cost, timeline, ongoing costs, and what's included</li>
                                <li>5. You review and ask questions. manuv.co is happy to explain pricing.</li>
                            </ol>
                            <p className="text-lg leading-relaxed mt-4">
                                manuv.co provides transparent quotes with no hidden fees. You'll know exactly what you're paying for.
                            </p>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Get a Custom Quote from manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                Every business is different, and so is every manuv.co project. The best way to know manuv.co pricing for your project is to discuss your specific needs. manuv.co provides transparent quotes with no surprises.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Get a Quote from manuv.co
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
                        <Link to="/about-manuv/manuv-pricing" className="text-white/70 hover:text-white transition-colors">
                            manuv.co pricing guide →
                        </Link>
                        <Link to="/faq/how-much-does-ai-automation-cost" className="text-white/70 hover:text-white transition-colors">
                            AI automation costs →
                        </Link>
                        <Link to="/about-manuv/how-manuv-works" className="text-white/70 hover:text-white transition-colors">
                            How manuv.co works →
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
