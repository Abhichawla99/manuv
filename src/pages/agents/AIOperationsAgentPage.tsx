import { motion } from 'framer-motion';
import { ArrowRight, Bot, Settings, CheckCircle, TrendingUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const AIOperationsAgentPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI Operations Agent | Automated Internal Operations & Workflows | manuv.co"
                description="AI operations agent that automates SOPs, approvals, routing, escalations, and internal requests. Handles routine operational tasks without human intervention."
                keywords="AI operations agent, operations automation, internal automation, workflow automation, SOP automation, approval automation, operations AI, internal process automation, business operations AI, operational efficiency"
                canonical="https://manuv.co/agents/ai-operations-agent"
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
                            AI Operations Agent
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Automates SOPs, approvals, routing, escalations, and internal requests. Handles routine operational tasks and ensures processes run smoothly without human intervention.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                SOP Automation
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Approval Workflows
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Smart Routing
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
                                Internal requests slow down operations
                            </h2>
                            <p className="text-lg font-light text-white/60 leading-relaxed mb-6">
                                Your operations team is bogged down by routine tasks, approvals, routing, and internal requests. Manual processes create bottlenecks. SOPs aren't consistently followed. Operations don't scale.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Routine tasks consume 40-60% of operations time',
                                    'Approval workflows create delays and bottlenecks',
                                    'Inconsistent SOP execution across team',
                                    'Manual routing leads to errors and delays',
                                    'Limited visibility into operational processes'
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
                                    <span className="text-white/60 font-light">Request Processing Time</span>
                                    <span className="text-2xl font-light text-white">2-5 days</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">SOP Compliance</span>
                                    <span className="text-2xl font-light text-white">70-80%</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Manual Tasks</span>
                                    <span className="text-2xl font-light text-white">40-60%</span>
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
                            Autonomous operations agent
                        </h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl mx-auto">
                            Our AI operations agent automates standard operating procedures, handles approvals, routes requests intelligently, and manages internal workflows—all automatically.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: Settings,
                                title: 'SOP Automation',
                                description: 'Executes standard operating procedures consistently and accurately every time'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Approval Workflows',
                                description: 'Manages multi-step approval processes and routes to appropriate stakeholders'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Smart Routing',
                                description: 'Intelligently routes requests and tasks to the right team members or systems'
                            },
                            {
                                icon: Bot,
                                title: 'Request Processing',
                                description: 'Processes internal requests, extracts information, and takes appropriate actions'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Escalation Management',
                                description: 'Automatically escalates issues when thresholds are met or exceptions occur'
                            },
                            {
                                icon: Settings,
                                title: 'Process Monitoring',
                                description: 'Tracks process performance and identifies bottlenecks and optimization opportunities'
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
                            Automated operations workflow
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                step: '01',
                                title: 'Request Intake',
                                description: 'Receives and processes internal requests from various channels (email, Slack, forms, etc.)'
                            },
                            {
                                step: '02',
                                title: 'Request Analysis',
                                description: 'Analyzes request type, extracts key information, and determines required actions'
                            },
                            {
                                step: '03',
                                title: 'SOP Execution',
                                description: 'Executes relevant standard operating procedures based on request type'
                            },
                            {
                                step: '04',
                                title: 'Approval Routing',
                                description: 'Routes requests through approval workflows when required, tracking status'
                            },
                            {
                                step: '05',
                                title: 'Task Completion',
                                description: 'Completes tasks, updates systems, and notifies relevant stakeholders'
                            },
                            {
                                step: '06',
                                title: 'Monitoring & Optimization',
                                description: 'Monitors process performance and identifies opportunities for improvement'
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
                            Streamlined operations
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { metric: '80%', label: 'Time Reduction', description: 'Faster request processing' },
                            { metric: '100%', label: 'SOP Compliance', description: 'Consistent execution' },
                            { metric: '90%', label: 'Automation Rate', description: 'Most tasks automated' },
                            { metric: '24/7', label: 'Availability', description: 'Always processing requests' }
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

            {/* Use Cases */}
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            Use Cases
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">
                            Operations across departments
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Vendor Onboarding',
                            'Expense Approvals',
                            'Access Requests',
                            'Document Processing',
                            'Compliance Checks',
                            'Resource Allocation',
                            'Incident Management',
                            'Change Requests',
                            'Performance Reviews'
                        ].map((useCase, i) => (
                            <div key={i} className="rounded-lg border border-white/10 bg-white/[0.02] p-6">
                                <span className="text-white/70 font-light">{useCase}</span>
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
                            { title: 'Client Onboarding Automation', link: '/automations/client-onboarding-flow', description: 'Automated client onboarding workflows' },
                            { title: 'Document Processing Pipeline', link: '/automations/document-processing-pipeline', description: 'Automated document processing' },
                            { title: 'AI Data Agent', link: '/agents/ai-data-agent', description: 'Automated data processing and management' }
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
                            Ready to automate operations?
                        </h2>
                        <p className="text-lg font-light text-white/60 mb-10">
                            Book a free strategy call to discuss how an AI operations agent can streamline your internal processes
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
