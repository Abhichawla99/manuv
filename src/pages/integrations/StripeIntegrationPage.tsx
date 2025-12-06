import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const StripeIntegrationPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Stripe Integration | AI Payment Automation | manuv.co"
                description="Automate payment processing, subscription management, and financial workflows with Stripe integration. AI-powered payment automation for seamless transactions."
                keywords="Stripe integration, Stripe automation, payment automation, Stripe AI, subscription automation, payment processing automation, Stripe API integration"
                canonical="https://manuv.co/integrations/stripe"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">Stripe Integration</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Automate payment processing, subscription management, and financial workflows with AI-powered Stripe integration. Streamline transactions and reduce manual work.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">The Problem</h2>
                    <p className="text-xl font-light text-white/70 mb-8 leading-relaxed max-w-4xl">
                        Managing payments, subscriptions, and financial workflows manually is time-consuming and error-prone. Teams struggle with payment processing delays, subscription renewals, invoice generation, and financial reporting. Manual reconciliation and customer payment inquiries consume valuable resources.
                    </p>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">The Solution</h2>
                    <p className="text-xl font-light text-white/70 mb-12 leading-relaxed max-w-4xl">
                        AI-powered Stripe integration automates payment processing, subscription management, invoice generation, and financial workflows. Our automation systems handle payment events, subscription renewals, failed payment retries, and financial reporting automatically.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Payment Processing', description: 'Automated payment processing, retries, and reconciliation' },
                            { title: 'Subscription Management', description: 'Automated subscription renewals, upgrades, and cancellations' },
                            { title: 'Invoice Automation', description: 'Auto-generate and send invoices based on payment events' },
                            { title: 'Financial Reporting', description: 'Automated financial reports and analytics from Stripe data' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                <h3 className="text-xl font-light text-white mb-3">{item.title}</h3>
                                <p className="text-sm font-light text-white/60">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Stripe Automation Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Finance Automation', link: '/use-cases/finance-automation', description: 'Automate financial workflows with Stripe' },
                            { title: 'Data Sync Automation', link: '/automations/data-sync-automation', description: 'Sync Stripe data across systems' },
                            { title: 'AI Operations Agent', link: '/agents/ai-operations-agent', description: 'Automate payment operations' }
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
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">How It Works</h2>
                    <div className="space-y-8">
                        {[
                            { step: '1', title: 'Connect Stripe', description: 'Integrate with your Stripe account via secure API connection' },
                            { step: '2', title: 'Configure Workflows', description: 'Set up automation rules for payments, subscriptions, and invoices' },
                            { step: '3', title: 'Automate Processing', description: 'AI agents handle payment events, retries, and notifications automatically' },
                            { step: '4', title: 'Sync & Report', description: 'Automatically sync data to your CRM and generate financial reports' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6">
                                <div className="text-4xl font-extralight text-primary">{item.step}</div>
                                <div>
                                    <h3 className="text-2xl font-light text-white mb-2">{item.title}</h3>
                                    <p className="text-white/70 font-light">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Results</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { metric: '95%', description: 'Reduction in payment processing time' },
                            { metric: '100%', description: 'Automated subscription renewals' },
                            { metric: '24/7', description: 'Payment processing availability' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                                <div className="text-5xl font-extralight text-primary mb-3">{item.metric}</div>
                                <div className="text-white/70 font-light">{item.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Ready to automate with Stripe?</h2>
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
