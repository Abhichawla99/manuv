import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const AIAutomationForSmallBusinessPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI Automation for Small Business: Complete Guide | manuv.co"
                description="Learn how small businesses can benefit from AI automation. Understand costs, use cases, and strategies for small businesses to get started with automation."
                keywords="AI automation small business, automation for small business, small business automation, affordable automation, SMB automation"
                canonical="https://manuv.co/getting-started/ai-automation-for-small-business"
                ogUrl="https://manuv.co/getting-started/ai-automation-for-small-business"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Building2 className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">Getting Started</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            AI Automation for Small Business
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How small businesses can leverage AI automation to compete with larger companies, without the enterprise budget.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why Small Businesses Need AI Automation</h2>
                            <p className="text-lg leading-relaxed">
                                Small businesses often have limited resources but need to compete with larger companies. AI automation is the great equalizer—it lets you do more with less. You can provide 24/7 customer service, handle more leads, and operate efficiently without hiring a large team. Automation helps small businesses punch above their weight.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Best Use Cases for Small Businesses</h2>
                            <div className="space-y-4">
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Customer Support</h3>
                                    <p className="text-lg leading-relaxed">
                                        Small businesses can't afford 24/7 support staff, but an AI agent can handle customer questions around the clock. This lets you compete with larger companies on service quality without the cost.
                                    </p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Lead Qualification</h3>
                                    <p className="text-lg leading-relaxed">
                                        An AI agent can research leads, qualify them, and route good prospects to you. This maximizes your limited sales time by focusing on qualified leads instead of researching everyone.
                                    </p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Email Management</h3>
                                    <p className="text-lg leading-relaxed">
                                        Automatically tag, categorize, and route emails. Respond to common questions. This saves hours per week that you can spend on growing your business.
                                    </p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Social Media</h3>
                                    <p className="text-lg leading-relaxed">
                                        AI can help create and schedule social media content, respond to comments, and engage with your audience. This maintains your presence without taking all your time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Affordable Options for Small Businesses</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                You don't need enterprise budgets to get started:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Start Small</h3>
                                    <p className="text-lg leading-relaxed">
                                        Begin with one simple automation. A basic email auto-tagging system might cost $5,000-$10,000. Prove value, then expand. You don't need to automate everything at once.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Use Existing Tools</h3>
                                    <p className="text-lg leading-relaxed">
                                        Work with tools you already have (Gmail, basic CRM, etc.) rather than requiring expensive new systems. This keeps costs down.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Phased Approach</h3>
                                    <p className="text-lg leading-relaxed">
                                        Build a basic version first, then add features over time. This spreads costs and lets you start seeing value quickly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">ROI for Small Businesses</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                For small businesses, ROI often comes from:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Time to focus on growth:</strong> Automation handles routine work, freeing you to focus on strategy and growth.</li>
                                <li>• <strong className="text-white">Avoiding hiring:</strong> One automation might replace the need for a part-time employee, saving $20,000-$40,000 per year.</li>
                                <li>• <strong className="text-white">Better customer service:</strong> 24/7 availability and faster responses improve customer satisfaction and retention.</li>
                                <li>• <strong className="text-white">Scaling without scaling costs:</strong> Handle more customers without proportionally more costs.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Common Small Business Concerns</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">"We're too small for automation"</h3>
                                    <p className="text-lg leading-relaxed">
                                        Not true. Small businesses often benefit more because they have fewer resources. Automation helps you do more with less. You don't need to be big to benefit.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">"We can't afford it"</h3>
                                    <p className="text-lg leading-relaxed">
                                        Many small businesses can't afford NOT to automate. If automation saves you 10 hours per week and you value your time at $50/hour, that's $26,000 per year in value. A $15,000 automation pays for itself in 7 months.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">"We don't have technical skills"</h3>
                                    <p className="text-lg leading-relaxed">
                                        You don't need them. A good development team handles all technical work. You just need to understand your business and what you want automated.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-white mb-2">"Our processes aren't perfect yet"</h3>
                                    <p className="text-lg leading-relaxed">
                                        That's okay. Automation can work with your current processes. You can refine processes as you go. Don't wait for perfection—start with what you have.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Getting Started as a Small Business</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Here's a practical approach:
                            </p>
                            <ol className="space-y-4 list-decimal list-inside text-lg">
                                <li><strong className="text-white">Identify your biggest time drain:</strong> What takes the most time? That's usually the best candidate for automation.</li>
                                <li><strong className="text-white">Start with something simple:</strong> Don't try to automate your entire business. Pick one task.</li>
                                <li><strong className="text-white">Get a quote:</strong> Talk to an automation team about costs. Many offer payment plans or phased approaches.</li>
                                <li><strong className="text-white">Calculate ROI:</strong> If it saves 10 hours/week and you value your time, does it pay for itself?</li>
                                <li><strong className="text-white">Start small, prove value:</strong> Begin with a basic version, see the value, then expand.</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Real Small Business Example</h2>
                            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Sarah runs a consulting business.</strong> She was spending 5 hours per week responding to inquiry emails and qualifying leads. She hired us to build an AI agent that:
                                </p>
                                <ul className="space-y-2 text-lg ml-4 mb-4">
                                    <li>• Reads inquiry emails</li>
                                    <li>• Researches the prospect</li>
                                    <li>• Qualifies them based on her criteria</li>
                                    <li>• Schedules qualified leads on her calendar</li>
                                    <li>• Sends polite "not a fit" responses to others</li>
                                </ul>
                                <div className="border-t border-white/10 pt-4">
                                    <p className="text-white/70 text-sm mb-2">Cost: $12,000 one-time + $300/month</p>
                                    <p className="text-white/70 text-sm mb-2">Time saved: 5 hours/week = 260 hours/year</p>
                                    <p className="text-white/70 text-sm mb-2">Value (at $100/hour): $26,000/year</p>
                                    <p className="text-lg text-white mt-4">
                                        <strong>ROI: 117% in year one</strong> - The system paid for itself in 5 months, and now Sarah focuses on consulting instead of email management.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Tips for Small Business Success</h2>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">✓</span>
                                    <span><strong className="text-white">Start with high-impact, low-complexity tasks:</strong> Email management, lead qualification, basic customer support.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">✓</span>
                                    <span><strong className="text-white">Use tools you already have:</strong> Don't require expensive new systems.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">✓</span>
                                    <span><strong className="text-white">Work with a team that understands small business:</strong> They'll help you get value without overspending.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">✓</span>
                                    <span><strong className="text-white">Measure everything:</strong> Track time saved, costs, and ROI. Prove the value.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">✓</span>
                                    <span><strong className="text-white">Expand gradually:</strong> Start with one automation, prove value, then add more.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Ready to Get Started?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                We work with small businesses all the time. We understand budget constraints and help you get maximum value. If you're a small business owner curious about automation, let's talk about what makes sense for your situation.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Talk to an Expert
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
                        <Link to="/faq/how-much-does-ai-automation-cost" className="text-white/70 hover:text-white transition-colors">
                            How much does it cost? →
                        </Link>
                        <Link to="/how-to/get-started-with-ai-automation" className="text-white/70 hover:text-white transition-colors">
                            Getting started guide →
                        </Link>
                        <Link to="/how-to/measure-ai-automation-roi" className="text-white/70 hover:text-white transition-colors">
                            Measuring ROI →
                        </Link>
                        <Link to="/getting-started/first-ai-automation-project" className="text-white/70 hover:text-white transition-colors">
                            First project guide →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
