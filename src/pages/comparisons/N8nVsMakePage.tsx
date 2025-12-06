import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const N8nVsMakePage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="N8n vs Make | Workflow Automation Comparison | manuv.co"
                description="Compare N8n vs Make (Integromat). Understand the differences, features, pricing, and which workflow automation platform is right for your business."
                keywords="N8n vs Make, N8n vs Integromat, workflow automation comparison, N8n comparison, Make comparison, automation platform comparison, workflow tools"
                canonical="https://manuv.co/comparisons/n8n-vs-make"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">N8n vs Make</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Compare N8n and Make (Integromat) workflow automation platforms. Find the right solution for your automation needs.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Platform Comparison</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                            <h3 className="text-2xl font-light text-white mb-6">N8n</h3>
                            <ul className="space-y-4">
                                {[
                                    { feature: 'Open Source', description: 'Self-hostable, open-source platform with community edition' },
                                    { feature: 'Pricing', description: 'Free self-hosted option, paid cloud plans available' },
                                    { feature: 'Customization', description: 'Highly customizable with code nodes and custom functions' },
                                    { feature: 'Deployment', description: 'Can be self-hosted on your infrastructure for full control' },
                                    { feature: 'Workflow Builder', description: 'Visual workflow builder with code execution capabilities' },
                                    { feature: 'Integrations', description: 'Extensive integrations with ability to create custom nodes' }
                                ].map((item, i) => (
                                    <li key={i} className="flex flex-col gap-2">
                                        <span className="text-white font-light">{item.feature}</span>
                                        <span className="text-white/60 text-sm font-light">{item.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                            <h3 className="text-2xl font-light text-white mb-6">Make (Integromat)</h3>
                            <ul className="space-y-4">
                                {[
                                    { feature: 'Cloud-Based', description: 'Fully cloud-based SaaS platform, no self-hosting option' },
                                    { feature: 'Pricing', description: 'Subscription-based pricing with usage limits' },
                                    { feature: 'Ease of Use', description: 'User-friendly interface with pre-built templates' },
                                    { feature: 'Deployment', description: 'Managed cloud service, no infrastructure management' },
                                    { feature: 'Workflow Builder', description: 'Visual scenario builder with drag-and-drop interface' },
                                    { feature: 'Integrations', description: 'Large library of pre-built app integrations' }
                                ].map((item, i) => (
                                    <li key={i} className="flex flex-col gap-2">
                                        <span className="text-white font-light">{item.feature}</span>
                                        <span className="text-white/60 text-sm font-light">{item.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">When to Choose Each</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                            <h3 className="text-2xl font-light text-white mb-6">Choose N8n For:</h3>
                            <ul className="space-y-3">
                                {[
                                    'Self-hosting and data control requirements',
                                    'Custom development and code execution needs',
                                    'Cost-effective solutions with free self-hosted option',
                                    'Advanced customization and integration requirements',
                                    'Enterprise deployments with specific compliance needs',
                                    'Open-source flexibility and community support'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-px w-4 bg-primary mt-3" />
                                        <span className="text-white/70 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                            <h3 className="text-2xl font-light text-white mb-6">Choose Make For:</h3>
                            <ul className="space-y-3">
                                {[
                                    'Quick setup without infrastructure management',
                                    'User-friendly interface for non-technical users',
                                    'Pre-built templates and integrations',
                                    'Managed cloud service with automatic updates',
                                    'Standard workflow automation needs',
                                    'Teams without technical infrastructure expertise'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-px w-4 bg-white/20 mt-3" />
                                        <span className="text-white/70 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Related Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'N8n Integration', link: '/integrations/n8n', description: 'Learn about N8n integration' },
                            { title: 'Make Integration', link: '/integrations/make', description: 'Learn about Make integration' },
                            { title: 'Workflow Automation', link: '/automations/workflow-automation', description: 'Workflow automation solutions' }
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
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Need help choosing a platform?</h2>
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
