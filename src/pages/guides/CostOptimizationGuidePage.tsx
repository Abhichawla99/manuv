import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const CostOptimizationGuidePage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI Automation Cost Optimization Guide | Reduce Automation Costs | manuv.co"
                description="Complete guide to optimizing AI automation costs. Learn how to reduce automation expenses, improve ROI, and maximize efficiency of your AI agents."
                keywords="automation cost optimization, reduce automation costs, AI automation ROI, automation cost savings, optimize AI costs, automation efficiency, cost-effective automation"
                canonical="https://manuv.co/guides/cost-optimization"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">AI Automation Cost Optimization</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Maximize ROI and minimize costs with strategic AI automation optimization. Learn proven strategies to reduce expenses while improving efficiency.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Cost Optimization Strategies</h2>
                    <div className="space-y-8">
                        {[
                            { 
                                title: 'Right-Size Your Automation', 
                                description: 'Start with high-impact, low-complexity automations. Focus on tasks with the highest ROI first. Avoid over-engineering solutions for simple problems.',
                                savings: '30-50% cost reduction'
                            },
                            { 
                                title: 'Optimize API Usage', 
                                description: 'Cache responses, batch API calls, and use webhooks instead of polling. Monitor API usage and optimize expensive operations.',
                                savings: '40-60% API cost reduction'
                            },
                            { 
                                title: 'Choose Efficient Models', 
                                description: 'Use smaller, faster models for simple tasks. Reserve powerful models for complex operations. Consider fine-tuning for better efficiency.',
                                savings: '50-70% model cost savings'
                            },
                            { 
                                title: 'Automate Monitoring', 
                                description: 'Set up automated monitoring and alerts to catch inefficiencies early. Track costs per task and optimize continuously.',
                                savings: '20-30% operational savings'
                            },
                            { 
                                title: 'Scale Strategically', 
                                description: 'Use auto-scaling only when needed. Implement queue-based processing to handle bursts efficiently. Right-size infrastructure.',
                                savings: '25-40% infrastructure savings'
                            },
                            { 
                                title: 'Reuse and Modularize', 
                                description: 'Build reusable automation components. Share common workflows across use cases. Avoid duplicating automation logic.',
                                savings: '30-50% development cost savings'
                            }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-8 items-start">
                                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <TrendingDown className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1 pt-2">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-2xl font-light text-white">{item.title}</h3>
                                        <span className="text-sm font-light text-primary">{item.savings}</span>
                                    </div>
                                    <p className="text-white/70 font-light leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">ROI Calculation</h2>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                        <p className="text-xl font-light text-white/70 mb-6">
                            Calculate your automation ROI with our comprehensive guide:
                        </p>
                        <Link to="/guides/calculate-roi-automation" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                            Calculate ROI
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Related Guides</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Calculate ROI', link: '/guides/calculate-roi-automation', description: 'Calculate automation ROI' },
                            { title: 'Best Practices', link: '/guides/ai-automation-best-practices', description: 'AI automation best practices' },
                            { title: 'Scaling Automation', link: '/guides/scaling-ai-automation', description: 'Scale automation efficiently' }
                        ].map((item, i) => (
                            <Link key={i} to={item.link} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all group">
                                <h3 className="text-xl font-light text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm font-light text-white/60 mb-4">{item.description}</p>
                                <span className="text-xs font-light text-primary flex items-center gap-2">Learn more <ExternalLink className="w-3 h-3" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Ready to optimize your automation costs?</h2>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Schedule a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
