import { motion } from 'framer-motion';
import { ArrowRight, Bot, Database, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const AIDataAgentPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI Data Agent | Automated Data Processing & Management | manuv.co"
                description="AI data agent that cleans, structures, and moves data between systems automatically. Ensures data consistency and availability across your entire tech stack."
                keywords="AI data agent, data automation, data processing AI, data integration, data cleaning automation, data migration AI, data synchronization, ETL automation, data pipeline AI, data management automation"
                canonical="https://manuv.co/agents/ai-data-agent"
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
                            AI Data Agent
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Cleans, structures, and moves data between systems automatically. Ensures data consistency and availability across your entire tech stack.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Data Integration
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Automated Cleaning
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Real-Time Sync
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
                                Data lives in silos across systems
                            </h2>
                            <p className="text-lg font-light text-white/60 leading-relaxed mb-6">
                                Your data is scattered across multiple systems. Manual data entry creates errors. Data becomes stale and inconsistent. Moving data between systems is time-consuming and error-prone.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Data scattered across 5-10+ systems',
                                    'Manual data entry causes errors and delays',
                                    'Inconsistent data formats and structures',
                                    'Data becomes stale without regular updates',
                                    'Limited visibility into data quality issues'
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
                                    <span className="text-white/60 font-light">Data Systems</span>
                                    <span className="text-2xl font-light text-white">5-10+</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Data Accuracy</span>
                                    <span className="text-2xl font-light text-white">70-85%</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Sync Frequency</span>
                                    <span className="text-2xl font-light text-white">Daily/Weekly</span>
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
                            Autonomous data management agent
                        </h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl mx-auto">
                            Our AI data agent automatically extracts, cleans, transforms, and syncs data across all your systems. Ensures data consistency, quality, and real-time availability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: Database,
                                title: 'Data Extraction',
                                description: 'Extracts data from multiple sources including APIs, databases, files, and web scraping'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Data Cleaning',
                                description: 'Cleans, validates, and standardizes data to ensure quality and consistency'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Data Transformation',
                                description: 'Transforms data formats and structures to match target system requirements'
                            },
                            {
                                icon: Database,
                                title: 'Data Synchronization',
                                description: 'Syncs data across systems in real-time or on schedule to keep everything up-to-date'
                            },
                            {
                                icon: Bot,
                                title: 'Data Quality Monitoring',
                                description: 'Monitors data quality, identifies issues, and automatically fixes common problems'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Data Mapping',
                                description: 'Intelligently maps fields between systems and handles schema differences'
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
                            End-to-end data pipeline
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                step: '01',
                                title: 'Data Source Connection',
                                description: 'Connects to all data sources including databases, APIs, files, and cloud services'
                            },
                            {
                                step: '02',
                                title: 'Data Extraction',
                                description: 'Extracts data from sources using appropriate methods (queries, API calls, file parsing)'
                            },
                            {
                                step: '03',
                                title: 'Data Cleaning & Validation',
                                description: 'Cleans data, removes duplicates, validates formats, and fixes common errors'
                            },
                            {
                                step: '04',
                                title: 'Data Transformation',
                                description: 'Transforms data structure and format to match target system schemas'
                            },
                            {
                                step: '05',
                                title: 'Data Loading',
                                description: 'Loads transformed data into target systems with proper error handling'
                            },
                            {
                                step: '06',
                                title: 'Monitoring & Maintenance',
                                description: 'Monitors data quality, sync status, and automatically handles errors and retries'
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
                            Unified, consistent data
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { metric: '95%', label: 'Data Accuracy', description: 'Higher quality data' },
                            { metric: 'Real-time', label: 'Sync Speed', description: 'Instant data updates' },
                            { metric: '90%', label: 'Time Reduction', description: 'Faster data processing' },
                            { metric: '100%', label: 'System Coverage', description: 'All systems connected' }
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
                            Connects all your data sources
                        </h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl">
                            Works with databases, CRMs, APIs, files, and cloud services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            'PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake',
                            'HubSpot', 'Salesforce', 'Airtable', 'Notion',
                            'REST APIs', 'GraphQL', 'CSV/Excel', 'Google Sheets',
                            'AWS S3', 'Google Cloud', 'Azure', 'Webhooks'
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
                            { title: 'CRM Enrichment Engine', link: '/automations/crm-enrichment-engine', description: 'Auto-enrich CRM data with external sources' },
                            { title: 'Document Processing Pipeline', link: '/automations/document-processing-pipeline', description: 'Extract and process data from documents' },
                            { title: 'AI Research Agent', link: '/agents/ai-research-agent', description: 'Automated research and data analysis' }
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
                            Ready to unify your data?
                        </h2>
                        <p className="text-lg font-light text-white/60 mb-10">
                            Book a free strategy call to discuss how an AI data agent can connect and synchronize all your systems
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
