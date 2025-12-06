import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const HowToMeasureAIAutomationROIPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="How to Measure AI Automation ROI: Complete Guide | manuv.co"
                description="Learn how to measure ROI for AI automation projects. Understand what metrics matter, how to calculate returns, and prove the value of automation investments."
                keywords="AI automation ROI, measure automation ROI, automation return on investment, automation metrics, automation value"
                canonical="https://manuv.co/how-to/measure-ai-automation-roi"
                ogUrl="https://manuv.co/how-to/measure-ai-automation-roi"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">How-To Guide</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            How to Measure AI Automation ROI
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            A practical guide to measuring the return on investment for your AI automation projects. Learn what to track and how to calculate real value.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why Measuring ROI Matters</h2>
                            <p className="text-lg leading-relaxed">
                                Measuring ROI isn't just about justifying the investment—it helps you understand what's working, what's not, and where to invest next. Good measurement shows real value and helps you make better decisions about future automation projects.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Basic ROI Formula</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                ROI is calculated as:
                            </p>
                            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-4">
                                <p className="text-2xl font-light text-white text-center mb-2">
                                    ROI = (Gains - Costs) / Costs × 100%
                                </p>
                            </div>
                            <p className="text-lg leading-relaxed">
                                But the challenge is accurately measuring both gains and costs. Let's break this down.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Counts as "Gains"?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Gains come in several forms. Here's what to measure:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Time Saved</h3>
                                    <p className="text-lg leading-relaxed mb-2">
                                        This is usually the biggest gain. Calculate it like this:
                                    </p>
                                    <ul className="space-y-2 text-lg ml-4">
                                        <li>• Hours saved per week × hourly cost × 52 weeks</li>
                                        <li>• Example: 20 hours/week × $50/hour × 52 = $52,000/year</li>
                                    </ul>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Errors Reduced</h3>
                                    <p className="text-lg leading-relaxed mb-2">
                                        Mistakes cost money. Measure:
                                    </p>
                                    <ul className="space-y-2 text-lg ml-4">
                                        <li>• Cost per error × reduction in errors</li>
                                        <li>• Example: $100/error × 50 fewer errors/month = $5,000/month = $60,000/year</li>
                                    </ul>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Revenue Impact</h3>
                                    <p className="text-lg leading-relaxed mb-2">
                                        Automation can increase revenue by:
                                    </p>
                                    <ul className="space-y-2 text-lg ml-4">
                                        <li>• Handling more customers (scale without hiring)</li>
                                        <li>• Faster response times (better conversion)</li>
                                        <li>• Better lead qualification (higher close rates)</li>
                                    </ul>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Opportunity Cost</h3>
                                    <p className="text-lg leading-relaxed">
                                        What can your team do now that they're not doing repetitive work? This is harder to measure but often the most valuable gain—enabling strategic work instead of tactical tasks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Counts as "Costs"?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Make sure you capture all costs, not just the obvious ones:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Initial Development:</strong> The cost to build and deploy the automation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">AI API Costs:</strong> Monthly costs for AI services (OpenAI, Anthropic, etc.).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Hosting & Infrastructure:</strong> Servers, databases, cloud services.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Maintenance:</strong> Ongoing support, updates, bug fixes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Training Time:</strong> Time your team spends learning to use the system.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Change Management:</strong> Time spent updating processes and workflows.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Real Example Calculation</h2>
                            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 mb-4">
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Scenario:</strong> Customer Support AI Agent
                                </p>
                                <div className="space-y-3 mb-4">
                                    <div>
                                        <p className="text-white/70 mb-1">Costs:</p>
                                        <ul className="text-lg ml-4">
                                            <li>• Development: $40,000 (one-time)</li>
                                            <li>• Monthly AI costs: $1,000</li>
                                            <li>• Hosting: $200/month</li>
                                            <li>• Maintenance: $500/month</li>
                                            <li>• Year 1 total: $40,000 + ($1,700 × 12) = $60,400</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-white/70 mb-1">Gains:</p>
                                        <ul className="text-lg ml-4">
                                            <li>• Handles 70% of tickets (previously 2 FTEs)</li>
                                            <li>• 2 employees × $60,000/year = $120,000 saved</li>
                                            <li>• Errors reduced: $10,000/year</li>
                                            <li>• Year 1 total gains: $130,000</li>
                                        </ul>
                                    </div>
                                    <div className="border-t border-white/10 pt-3">
                                        <p className="text-xl font-light text-white">
                                            ROI = ($130,000 - $60,400) / $60,400 × 100% = <strong className="text-primary">115%</strong>
                                        </p>
                                        <p className="text-lg text-white/70 mt-2">
                                            The system pays for itself in about 6 months and generates $69,600 in value in year one.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Key Metrics to Track</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Beyond ROI, track these metrics to understand performance:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                                    <h3 className="text-lg font-light text-white mb-2">Automation Rate</h3>
                                    <p className="text-sm text-white/70">% of tasks handled automatically</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                                    <h3 className="text-lg font-light text-white mb-2">Time to Resolution</h3>
                                    <p className="text-sm text-white/70">How fast tasks are completed</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                                    <h3 className="text-lg font-light text-white mb-2">Error Rate</h3>
                                    <p className="text-sm text-white/70">Mistakes per 100 tasks</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                                    <h3 className="text-lg font-light text-white mb-2">Cost per Task</h3>
                                    <p className="text-sm text-white/70">Total cost / tasks handled</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Measuring Intangible Benefits</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Some benefits are harder to measure but still valuable:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Employee Satisfaction:</strong> Teams are happier when they're not doing repetitive work. Survey before and after.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Customer Experience:</strong> Faster responses and fewer errors improve satisfaction. Track NPS or satisfaction scores.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Scalability:</strong> Can you handle 10x more work without 10x more people? This is huge but hard to quantify.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Competitive Advantage:</strong> Being faster and more efficient than competitors is valuable but intangible.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Common Mistakes to Avoid</h2>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span><strong className="text-white">Only measuring obvious savings:</strong> Don't forget opportunity cost and intangible benefits.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span><strong className="text-white">Ignoring ongoing costs:</strong> Initial cost is just part of the picture.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span><strong className="text-white">Not tracking before/after:</strong> You need baseline metrics to measure improvement.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span><strong className="text-white">Measuring too early:</strong> Give it time to stabilize before measuring ROI.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Need Help Measuring ROI?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                We help businesses set up proper measurement from the start. We'll identify the right metrics, set up tracking, and help you prove the value of automation.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Get ROI Help
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
                        <Link to="/guides/calculate-roi-automation" className="text-white/70 hover:text-white transition-colors">
                            ROI calculator guide →
                        </Link>
                        <Link to="/faq/how-much-does-ai-automation-cost" className="text-white/70 hover:text-white transition-colors">
                            Automation costs →
                        </Link>
                        <Link to="/guides/cost-optimization" className="text-white/70 hover:text-white transition-colors">
                            Cost optimization →
                        </Link>
                        <Link to="/getting-started/ai-automation-basics" className="text-white/70 hover:text-white transition-colors">
                            Getting started →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
