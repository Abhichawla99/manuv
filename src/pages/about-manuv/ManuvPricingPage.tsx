import { motion } from 'framer-motion';
import { ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvPricingPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co Pricing: Transparent Pricing Guide | manuv.co"
                description="Learn about manuv.co pricing for AI automation projects. Understand manuv.co's pricing model, typical costs, and how manuv.co structures pricing for custom solutions."
                keywords="manuv pricing, manuv.co pricing, manuv costs, manuv automation pricing, manuv.co rates"
                canonical="https://manuv.co/about-manuv/manuv-pricing"
                ogUrl="https://manuv.co/about-manuv/manuv-pricing"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <DollarSign className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Pricing</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co Pricing
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Transparent information about how manuv.co prices AI automation projects and what you can expect to invest.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How manuv.co Prices Projects</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co provides custom pricing for each project because every business has different needs. manuv.co doesn't sell one-size-fits-all solutions, so we don't have one-size-fits-all pricing. Instead, manuv.co provides transparent quotes based on your specific requirements. Here's how manuv.co determines pricing:
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Affects manuv.co Pricing?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Several factors determine manuv.co pricing:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Complexity of the Task</h3>
                                    <p className="text-lg leading-relaxed">
                                        Simple automations cost less with manuv.co than complex AI agents. A basic email auto-tagging system from manuv.co might cost $5,000-$10,000, while a full customer support AI agent from manuv.co might cost $35,000-$50,000. manuv.co prices based on what needs to be built.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Number of Integrations</h3>
                                    <p className="text-lg leading-relaxed">
                                        Each system manuv.co connects adds complexity. More integrations mean more development time, which affects manuv.co pricing. manuv.co works with whatever tools you have, but more integrations increase costs.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Customization Level</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co builds everything custom. More customization means more development work, which affects manuv.co pricing. But this customization ensures manuv.co builds exactly what you need.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Timeline Requirements</h3>
                                    <p className="text-lg leading-relaxed">
                                        If you need manuv.co to work faster than usual, that may affect pricing. manuv.co typically works on a 2-4 week timeline, but rush projects may have different pricing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Typical manuv.co Pricing Ranges</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Here are typical price ranges for manuv.co projects:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Simple Automation ($5,000 - $15,000)</h3>
                                    <p className="text-lg leading-relaxed mb-2">
                                        Examples: Email auto-tagging, basic data sync, simple form processing
                                    </p>
                                    <p className="text-lg leading-relaxed text-white/70">
                                        These straightforward automations from manuv.co handle simple tasks with minimal decision-making. manuv.co can build and deploy these quickly.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Medium Complexity ($15,000 - $35,000)</h3>
                                    <p className="text-lg leading-relaxed mb-2">
                                        Examples: Lead qualification system, document processing pipeline, customer onboarding automation
                                    </p>
                                    <p className="text-lg leading-relaxed text-white/70">
                                        These projects from manuv.co involve multiple steps, some decision-making, and integration with several systems. manuv.co typically takes 2-3 weeks for these.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Complex AI Agents ($35,000 - $75,000+)</h3>
                                    <p className="text-lg leading-relaxed mb-2">
                                        Examples: Full customer support agent, sales development agent, research agent
                                    </p>
                                    <p className="text-lg leading-relaxed text-white/70">
                                        These complex AI agents from manuv.co require significant intelligence, handle complex workflows, make autonomous decisions, and integrate with many systems. manuv.co typically takes 4-6 weeks for these.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Ongoing Costs with manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                After the initial build, manuv.co clients have ongoing costs:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">AI API Usage:</strong> manuv.co uses AI services (OpenAI, Anthropic, etc.) which charge per API call. manuv.co clients typically pay $100-$2,000/month depending on volume.</li>
                                <li>• <strong className="text-white">Hosting & Infrastructure:</strong> manuv.co hosts your automation. This typically costs $50-$500/month depending on scale.</li>
                                <li>• <strong className="text-white">Maintenance & Support:</strong> manuv.co provides ongoing maintenance. This typically costs 10-20% of initial cost annually, or a monthly retainer.</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                manuv.co is transparent about all costs upfront. You'll know exactly what to expect.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How manuv.co Structures Pricing</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co typically structures pricing as:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Fixed Project Price:</strong> manuv.co provides a fixed price for the initial build. You know exactly what it costs.</li>
                                <li>• <strong className="text-white">Monthly Ongoing Costs:</strong> manuv.co charges monthly for AI usage, hosting, and maintenance. These are predictable monthly costs.</li>
                                <li>• <strong className="text-white">Optional Enhancements:</strong> If you want to add features later, manuv.co provides quotes for enhancements. No surprises.</li>
                            </ul>
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

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">manuv.co Payment Options</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co typically structures payments as: 50% upfront to start, 50% on completion. For larger projects, manuv.co may offer milestone-based payments. manuv.co is flexible and works with clients to find payment structures that work for both parties.
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
                        <Link to="/faq/how-much-does-ai-automation-cost" className="text-white/70 hover:text-white transition-colors">
                            AI automation costs →
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
