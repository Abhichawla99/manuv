import { motion } from 'framer-motion';
import { ArrowRight, Bot, Clock, TrendingUp, Shield, Zap, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const AICustomerSupportAgentPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI Customer Support Agent | Automated 24/7 Support Solutions | manuv.co"
                description="Deploy an AI customer support agent that resolves 70-90% of tickets automatically. 24/7 availability, CRM integration, knowledge base powered. Built by manuv.co experts."
                keywords="AI customer support agent, automated support, AI chatbot, customer service automation, support ticket automation, AI helpdesk, 24/7 support agent, CRM integration support, knowledge base AI, support automation platform"
                canonical="https://manuv.co/agents/ai-customer-support-agent"
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
                            AI Customer Support Agent
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Resolves 70-90% of support tickets automatically. 24/7 availability. CRM integration. Knowledge base powered. Zero human intervention for routine inquiries.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                70-90% Automation Rate
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                24/7 Availability
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
                                Support tickets pile up faster than humans can respond
                            </h2>
                            <p className="text-lg font-light text-white/60 leading-relaxed mb-6">
                                Your support team is overwhelmed. Common questions repeat endlessly. Response times suffer. Customer satisfaction drops. You're paying for headcount to answer the same questions over and over.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'High ticket volume overwhelms support staff',
                                    'Repetitive questions consume valuable time',
                                    'Slow response times hurt customer satisfaction',
                                    'After-hours support requires expensive staffing',
                                    'Knowledge scattered across team members'
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
                                    <span className="text-white/60 font-light">Average Response Time</span>
                                    <span className="text-2xl font-light text-white">4-8 hours</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Ticket Resolution Rate</span>
                                    <span className="text-2xl font-light text-white">60-70%</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Cost per Ticket</span>
                                    <span className="text-2xl font-light text-white">$15-25</span>
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
                            Autonomous AI agent that handles support 24/7
                        </h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl mx-auto">
                            Our AI customer support agent automatically triages, researches, and responds to customer inquiries with contextual understanding. It integrates with your CRM, knowledge base, and ticketing system.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: Bot,
                                title: 'Intelligent Triage',
                                description: 'Automatically categorizes and prioritizes tickets based on urgency and complexity'
                            },
                            {
                                icon: Shield,
                                title: 'Knowledge Base Integration',
                                description: 'Pulls answers from your documentation, FAQs, and past ticket resolutions'
                            },
                            {
                                icon: Zap,
                                title: 'CRM Lookups',
                                description: 'Retrieves customer history, order status, and account details in real-time'
                            },
                            {
                                icon: Clock,
                                title: '24/7 Availability',
                                description: 'Handles inquiries instantly, any time of day, without breaks or delays'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Continuous Learning',
                                description: 'Improves responses over time by learning from successful resolutions'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Smart Escalation',
                                description: 'Automatically escalates complex issues to human agents when needed'
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
                            Multi-step autonomous workflow
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                step: '01',
                                title: 'Ticket Ingestion',
                                description: 'Agent receives ticket from your support system (Zendesk, Intercom, email, etc.) and extracts key information'
                            },
                            {
                                step: '02',
                                title: 'Context Retrieval',
                                description: 'Queries knowledge base, CRM, and past tickets to gather relevant context about the customer and issue'
                            },
                            {
                                step: '03',
                                title: 'Intelligent Analysis',
                                description: 'AI analyzes the inquiry, determines intent, and identifies the best resolution approach'
                            },
                            {
                                step: '04',
                                title: 'Response Generation',
                                description: 'Generates personalized, accurate response using your brand voice and knowledge base content'
                            },
                            {
                                step: '05',
                                title: 'Action Execution',
                                description: 'Performs actions like updating CRM, creating follow-up tasks, or processing refunds when appropriate'
                            },
                            {
                                step: '06',
                                title: 'Escalation Logic',
                                description: 'Automatically escalates complex issues to human agents with full context and suggested solutions'
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
                            Measurable business impact
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { metric: '70-90%', label: 'Ticket Resolution Rate', description: 'Automated without human intervention' },
                            { metric: '< 1 min', label: 'Average Response Time', description: 'Instant responses vs hours' },
                            { metric: '75%', label: 'Cost Reduction', description: 'Lower support costs per ticket' },
                            { metric: '24/7', label: 'Availability', description: 'Never miss a customer inquiry' }
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
                            Works with your existing tools
                        </h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl">
                            Our AI customer support agent integrates seamlessly with your current tech stack
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            'Zendesk', 'Intercom', 'HubSpot', 'Salesforce',
                            'Slack', 'Notion', 'Airtable', 'Email',
                            'Knowledge Base APIs', 'CRM Systems', 'Ticketing Platforms', 'Documentation Tools'
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
                            { title: 'AI SDR Agent', link: '/agents/ai-sdr-agent', description: 'Automated outbound and inbound sales development' },
                            { title: 'CRM Enrichment Automation', link: '/automations/crm-enrichment-engine', description: 'Auto-enrich leads with complete profiles' },
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
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">
                            Ready to automate your support?
                        </h2>
                        <p className="text-lg font-light text-white/60 mb-10">
                            Book a free strategy call to discuss how an AI customer support agent can transform your operations
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
