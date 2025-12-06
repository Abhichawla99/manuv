import { motion } from 'framer-motion';
import { ArrowRight, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ComplianceAutomationPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Compliance Automation | AI-Powered Compliance Automation Solutions | manuv.co"
                description="Complete compliance automation solutions. Automate regulatory compliance, document verification, audit preparation, and compliance monitoring with AI-powered agents."
                keywords="compliance automation, AI compliance automation, regulatory compliance automation, compliance monitoring, audit automation, compliance AI agents, regulatory reporting"
                canonical="https://manuv.co/use-cases/compliance-automation"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">Compliance Automation</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Automate compliance monitoring, regulatory reporting, and audit preparation with AI-powered automation systems.</p>
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
                        Compliance teams struggle to keep up with constantly changing regulations, manual document verification, audit preparation, and monitoring requirements. Manual compliance processes are error-prone, time-consuming, and expose organizations to regulatory risks.
                    </p>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">The Solution</h2>
                    <p className="text-xl font-light text-white/70 mb-12 leading-relaxed max-w-4xl">
                        AI-powered compliance automation monitors regulatory changes, verifies documents, prepares audit reports, tracks compliance status, and generates regulatory filings. Our AI agents can analyze documents for compliance, monitor regulatory updates, and flag potential violations automatically.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Regulatory Monitoring', description: 'Automated monitoring of regulatory changes and compliance requirements' },
                            { title: 'Document Verification', description: 'AI-powered verification of documents for compliance standards' },
                            { title: 'Audit Preparation', description: 'Automated collection and organization of audit documentation' },
                            { title: 'Compliance Reporting', description: 'Automated generation of compliance reports and regulatory filings' }
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
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Compliance Automation Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Document Processing', link: '/automations/document-processing-pipeline', description: 'Process compliance documents automatically' },
                            { title: 'Automated Reporting', link: '/automations/automated-reporting-system', description: 'Generate compliance reports automatically' },
                            { title: 'AI Research Agent', link: '/agents/ai-research-agent', description: 'Monitor regulatory changes and research compliance' }
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
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Results</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { metric: '90%', description: 'Reduction in compliance errors' },
                            { metric: '70%', description: 'Time saved on audit preparation' },
                            { metric: '24/7', description: 'Compliance monitoring' }
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
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Ready to automate compliance?</h2>
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
