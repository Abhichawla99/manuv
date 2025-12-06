import { motion } from 'framer-motion';
import { ArrowRight, Target, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const LeadQualificationRoutingPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Lead Qualification & Routing Automation | Automated Lead Scoring | manuv.co"
                description="Automated lead qualification and routing system that auto-tags, scores, enriches, and sends leads to the right pipeline based on qualification criteria."
                keywords="lead qualification automation, lead routing automation, lead scoring automation, CRM lead automation, sales automation, lead management automation, automated lead routing, lead enrichment automation, sales pipeline automation"
                canonical="https://manuv.co/automations/lead-qualification-routing"
            />

            {/* Hero Section */}
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-2 text-primary mb-6">
                            <Target className="w-5 h-5" />
                            <span className="text-xs font-light uppercase tracking-[0.2em]">Automation</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            Lead Qualification & Routing
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Auto-tags, scores, enriches, and sends leads to the right pipeline based on qualification criteria. Ensures every lead reaches the right sales rep at the right time.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Automated Scoring
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Smart Routing
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Real-Time Processing
                            </div>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                        >
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                                The Problem
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">
                                Manual lead qualification is slow and inconsistent
                            </h2>
                            <p className="text-lg font-light text-white/60 leading-relaxed mb-6">
                                Leads come in from multiple sources. Manual qualification takes time. Leads get assigned to the wrong reps. High-quality leads sit uncontacted. Sales team wastes time on unqualified leads.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Manual qualification takes 2-4 hours per lead',
                                    'Inconsistent qualification criteria application',
                                    'Leads assigned to wrong sales reps',
                                    'High-quality leads go uncontacted',
                                    'Sales team wastes time on unqualified leads'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-px w-4 bg-white/20 mt-3" />
                                        <span className="text-white/70 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Qualification Time</span>
                                    <span className="text-2xl font-light text-white">2-4 hours</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Response Rate</span>
                                    <span className="text-2xl font-light text-white">40-60%</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Conversion Rate</span>
                                    <span className="text-2xl font-light text-white">5-10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            The Solution
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">
                            Automated lead qualification and routing
                        </h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl mx-auto">
                            Our automation system automatically qualifies leads, scores them, enriches data, and routes them to the right sales rep or pipeline—all in real-time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: Target,
                                title: 'Automated Scoring',
                                description: 'Scores leads based on fit, intent, engagement, and custom criteria'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Data Enrichment',
                                description: 'Automatically enriches leads with company data and contact information'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Smart Routing',
                                description: 'Routes leads to appropriate sales rep or pipeline based on criteria'
                            },
                            {
                                icon: Target,
                                title: 'Tagging & Categorization',
                                description: 'Automatically tags and categorizes leads for easy filtering and reporting'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Real-Time Processing',
                                description: 'Processes and routes leads instantly as they come in'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Pipeline Management',
                                description: 'Automatically moves leads through pipeline stages based on activity'
                            }
                        ].map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                                >
                                    <Icon className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-xl font-light text-white mb-3">{feature.title}</h3>
                                    <p className="text-sm font-light text-white/60">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            How It Works
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">
                            Automated qualification workflow
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                step: '01',
                                title: 'Lead Capture',
                                description: 'Captures leads from multiple sources (forms, website, email, APIs, etc.)'
                            },
                            {
                                step: '02',
                                title: 'Data Enrichment',
                                description: 'Enriches lead data with company information, contact details, and firmographics'
                            },
                            {
                                step: '03',
                                title: 'Qualification Scoring',
                                description: 'Scores leads based on fit criteria, intent signals, and engagement data'
                            },
                            {
                                step: '04',
                                title: 'Tagging & Categorization',
                                description: 'Automatically tags leads with relevant categories and attributes'
                            },
                            {
                                step: '05',
                                title: 'Routing Decision',
                                description: 'Determines appropriate sales rep or pipeline based on routing rules'
                            },
                            {
                                step: '06',
                                title: 'Assignment & Notification',
                                description: 'Assigns lead to sales rep, updates CRM, and sends notifications'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-8 items-start"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary font-light text-xl">{item.step}</span>
                                    </div>
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-2xl font-light text-white mb-3">{item.title}</h3>
                                    <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            Results
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">
                            Faster, more accurate lead processing
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { metric: '< 5 min', label: 'Processing Time', description: 'Instant qualification' },
                            { metric: '3x', label: 'Response Rate', description: 'Faster lead contact' },
                            { metric: '2x', label: 'Conversion Rate', description: 'Better qualified leads' },
                            { metric: '100%', label: 'Consistency', description: 'Uniform qualification' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center"
                            >
                                <div className="text-5xl font-light text-primary mb-3">{item.metric}</div>
                                <div className="text-lg font-light text-white mb-2">{item.label}</div>
                                <div className="text-sm font-light text-white/50">{item.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-extralight tracking-tight mb-6 text-white">
                            Related Solutions
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'AI SDR Agent', link: '/agents/ai-sdr-agent', description: 'Automated outbound and inbound sales development' },
                            { title: 'CRM Enrichment Engine', link: '/automations/crm-enrichment-engine', description: 'Auto-enrich leads with complete profiles' },
                            { title: 'Inbox to CRM Automation', link: '/automations/inbox-crm-ingestion', description: 'Automatically sync emails to CRM' }
                        ].map((item, i) => (
                            <Link
                                key={i}
                                to={item.link}
                                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all group"
                            >
                                <h3 className="text-xl font-light text-white mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-light text-white/60 mb-4">{item.description}</p>
                                <span className="text-xs font-light text-primary flex items-center gap-2">
                                    Learn more <ExternalLink className="w-3 h-3" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">
                            Ready to automate lead qualification?
                        </h2>
                        <p className="text-lg font-light text-white/60 mb-10">
                            Book a free strategy call to discuss how automated lead qualification can transform your sales process
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                        >
                            Schedule a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
