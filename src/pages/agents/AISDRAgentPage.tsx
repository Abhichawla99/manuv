import { motion } from 'framer-motion';
import { ArrowRight, Bot, Target, Mail, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const AISDRAgentPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI SDR Agent | Automated Sales Development & Lead Generation | manuv.co"
                description="AI-powered SDR agent that prospects, enriches leads, writes personalized outreach, and updates CRM automatically. Scale your sales development without hiring."
                keywords="AI SDR agent, automated SDR, sales development automation, AI lead generation, outbound sales automation, inbound SDR agent, sales prospecting AI, CRM automation sales, personalized outreach AI, sales development agent"
                canonical="https://manuv.co/agents/ai-sdr-agent"
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
                            <Bot className="w-5 h-5" />
                            <span className="text-xs font-light uppercase tracking-[0.2em]">AI Agent</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            AI SDR / Outbound Agent
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Prospects, enriches leads, writes personalized outreach, and updates CRM automatically. Generates qualified leads and sends personalized outreach at scale while maintaining quality.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Automated Prospecting
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Personalized Outreach
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                CRM Integration
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
                                Manual prospecting is slow and inconsistent
                            </h2>
                            <p className="text-lg font-light text-white/60 leading-relaxed mb-6">
                                Your SDR team spends hours researching leads, writing emails, and updating CRMs. Volume is limited by headcount. Quality varies between reps. You're paying for repetitive work that AI can do better.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Manual research consumes 60% of SDR time',
                                    'Inconsistent email quality across team',
                                    'Low response rates from generic outreach',
                                    'CRM updates lag behind actual activity',
                                    'Scaling requires expensive hiring'
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
                                    <span className="text-white/60 font-light">Leads Researched/Day</span>
                                    <span className="text-2xl font-light text-white">20-30</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Response Rate</span>
                                    <span className="text-2xl font-light text-white">2-5%</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Cost per Qualified Lead</span>
                                    <span className="text-2xl font-light text-white">$150-300</span>
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
                            Autonomous SDR agent that works 24/7
                        </h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl mx-auto">
                            Our AI SDR agent handles the entire sales development workflow: prospecting, research, enrichment, personalized outreach, and CRM updates—all automatically.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: Target,
                                title: 'Intelligent Prospecting',
                                description: 'Identifies and qualifies leads based on your ideal customer profile and criteria'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Data Enrichment',
                                description: 'Automatically enriches leads with company data, contact info, and firmographics'
                            },
                            {
                                icon: Mail,
                                title: 'Personalized Outreach',
                                description: 'Writes contextually relevant emails using your brand voice and best practices'
                            },
                            {
                                icon: CheckCircle,
                                title: 'CRM Automation',
                                description: 'Updates CRM in real-time with lead status, notes, and activity tracking'
                            },
                            {
                                icon: Bot,
                                title: 'Response Handling',
                                description: 'Processes replies, qualifies interest, and schedules meetings automatically'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Performance Optimization',
                                description: 'Continuously improves based on response rates and conversion data'
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
                            End-to-end sales development automation
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                step: '01',
                                title: 'Lead Discovery',
                                description: 'Scans databases, LinkedIn, and web sources to identify prospects matching your ICP'
                            },
                            {
                                step: '02',
                                title: 'Data Enrichment',
                                description: 'Enriches leads with company info, contact details, technographics, and intent signals'
                            },
                            {
                                step: '03',
                                title: 'Qualification Scoring',
                                description: 'Scores leads based on fit, intent, and engagement signals to prioritize outreach'
                            },
                            {
                                step: '04',
                                title: 'Personalized Email Generation',
                                description: 'Writes customized emails using prospect research, company context, and your messaging'
                            },
                            {
                                step: '05',
                                title: 'Outreach Execution',
                                description: 'Sends emails at optimal times, follows up automatically, and tracks engagement'
                            },
                            {
                                step: '06',
                                title: 'Response Processing',
                                description: 'Handles replies, qualifies interest, books meetings, and updates CRM accordingly'
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
                            Scale sales development without scaling headcount
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { metric: '10x', label: 'Lead Volume', description: 'Process more leads than human SDRs' },
                            { metric: '3-5x', label: 'Response Rate', description: 'Higher quality personalized outreach' },
                            { metric: '80%', label: 'Cost Reduction', description: 'Lower cost per qualified lead' },
                            { metric: '24/7', label: 'Availability', description: 'Never stops prospecting' }
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

            {/* Integrations */}
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            Integrations
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">
                            Works with your sales stack
                        </h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl">
                            Seamlessly integrates with your CRM, email tools, and sales platforms
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            'HubSpot', 'Salesforce', 'Pipedrive', 'Outreach.io',
                            'LinkedIn', 'Apollo', 'ZoomInfo', 'Clearbit',
                            'Email APIs', 'Calendar Systems', 'Meeting Schedulers', 'Sales Intelligence'
                        ].map((tool, i) => (
                            <div key={i} className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                                <span className="text-white/70 font-light">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-extralight tracking-tight mb-6 text-white">
                            Related Solutions
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'AI Customer Support Agent', link: '/agents/ai-customer-support-agent', description: 'Automated 24/7 customer support' },
                            { title: 'Lead Qualification Automation', link: '/automations/lead-qualification-routing', description: 'Auto-qualify and route leads' },
                            { title: 'CRM Enrichment Engine', link: '/automations/crm-enrichment-engine', description: 'Auto-enrich leads with complete data' }
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
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">
                            Ready to scale your SDR operations?
                        </h2>
                        <p className="text-lg font-light text-white/60 mb-10">
                            Book a free strategy call to discuss how an AI SDR agent can transform your sales development
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
