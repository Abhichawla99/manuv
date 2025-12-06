import { motion } from 'framer-motion';
import { ArrowRight, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const SecurityBestPracticesPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI Automation Security Best Practices | Security Guide | manuv.co"
                description="Complete guide to AI automation security best practices. Learn how to secure your AI agents, protect data, and implement secure automation workflows."
                keywords="AI automation security, automation security best practices, AI agent security, data protection automation, secure automation, AI security guide, automation security"
                canonical="https://manuv.co/guides/security-best-practices"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">AI Automation Security Best Practices</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Essential security practices for AI automation. Protect your data, secure your agents, and implement safe automation workflows.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Security Best Practices</h2>
                    <div className="space-y-8">
                        {[
                            { title: 'Data Encryption', description: 'Encrypt all data in transit and at rest. Use strong encryption standards for sensitive information processed by AI agents.' },
                            { title: 'Access Control', description: 'Implement role-based access control (RBAC) and principle of least privilege. Limit AI agent permissions to only what is necessary.' },
                            { title: 'API Security', description: 'Secure all API endpoints with authentication, rate limiting, and input validation. Use API keys and OAuth tokens securely.' },
                            { title: 'Audit Logging', description: 'Maintain comprehensive audit logs of all AI agent actions. Monitor and alert on suspicious activities.' },
                            { title: 'Data Privacy', description: 'Comply with GDPR, CCPA, and other privacy regulations. Implement data anonymization and retention policies.' },
                            { title: 'Secure Integrations', description: 'Use secure connection methods for third-party integrations. Validate and sanitize all external data inputs.' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-8 items-start">
                                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-2xl font-light text-white mb-3">{item.title}</h3>
                                    <p className="text-white/70 font-light leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Related Guides</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'AI Automation Best Practices', link: '/guides/ai-automation-best-practices', description: 'General best practices for AI automation' },
                            { title: 'Getting Started', link: '/guides/getting-started-ai-automation', description: 'Getting started with AI automation' },
                            { title: 'Common Mistakes', link: '/guides/common-mistakes-ai-automation', description: 'Avoid common AI automation mistakes' }
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
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Need help securing your automation?</h2>
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
