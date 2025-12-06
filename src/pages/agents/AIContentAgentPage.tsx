import { motion } from 'framer-motion';
import { ArrowRight, Bot, FileText, Calendar, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const AIContentAgentPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI Content Agent | Automated Content Creation & Marketing | manuv.co"
                description="AI content agent that writes, repurposes, schedules, and analyzes multi-platform content automatically. Maintains brand consistency across all channels."
                keywords="AI content agent, automated content creation, content marketing automation, AI writing, social media automation, content repurposing AI, blog writing AI, content scheduling automation, brand voice AI, content strategy automation"
                canonical="https://manuv.co/agents/ai-content-agent"
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
                            AI Content Agent
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Writes, repurposes, schedules, and analyzes multi-platform content automatically. Creates and adapts content for different platforms while maintaining brand consistency.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Multi-Platform Content
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Brand Voice Consistency
                            </div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                                Automated Scheduling
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
                                Content creation is bottlenecked by manual writing
                            </h2>
                            <p className="text-lg font-light text-white/60 leading-relaxed mb-6">
                                Your content team struggles to keep up with demand. Creating content for multiple platforms takes time. Repurposing is manual. Scheduling is tedious. Brand voice consistency suffers.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Content creation takes 4-8 hours per piece',
                                    'Repurposing content manually is time-consuming',
                                    'Inconsistent brand voice across platforms',
                                    'Scheduling and publishing is manual work',
                                    'Limited capacity to scale content output'
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
                                    <span className="text-white/60 font-light">Content Pieces/Week</span>
                                    <span className="text-2xl font-light text-white">5-10</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Time per Piece</span>
                                    <span className="text-2xl font-light text-white">4-8 hours</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Brand Consistency</span>
                                    <span className="text-2xl font-light text-white">70-80%</span>
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
                            Autonomous content agent that scales output
                        </h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl mx-auto">
                            Our AI content agent creates original content, repurposes existing content, maintains brand voice, schedules posts, and analyzes performance—all automatically.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: FileText,
                                title: 'Content Creation',
                                description: 'Writes original blog posts, social media content, emails, and long-form articles'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Content Repurposing',
                                description: 'Adapts existing content for different platforms and formats automatically'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Brand Voice Consistency',
                                description: 'Maintains your brand voice, tone, and style across all content'
                            },
                            {
                                icon: Calendar,
                                title: 'Automated Scheduling',
                                description: 'Schedules and publishes content across platforms at optimal times'
                            },
                            {
                                icon: Bot,
                                title: 'Performance Analysis',
                                description: 'Analyzes engagement, identifies top-performing content, and optimizes strategy'
                            },
                            {
                                icon: FileText,
                                title: 'SEO Optimization',
                                description: 'Optimizes content for search engines and includes relevant keywords'
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
                            End-to-end content automation
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                step: '01',
                                title: 'Content Planning',
                                description: 'Analyzes content calendar, identifies gaps, and plans content based on strategy'
                            },
                            {
                                step: '02',
                                title: 'Content Generation',
                                description: 'Creates original content or repurposes existing content for target platforms'
                            },
                            {
                                step: '03',
                                title: 'Brand Voice Application',
                                description: 'Applies your brand voice, tone, and style guidelines to all content'
                            },
                            {
                                step: '04',
                                title: 'Format Optimization',
                                description: 'Adapts content format for each platform (blog, social, email, etc.)'
                            },
                            {
                                step: '05',
                                title: 'Scheduling & Publishing',
                                description: 'Schedules content at optimal times and publishes across platforms'
                            },
                            {
                                step: '06',
                                title: 'Performance Tracking',
                                description: 'Monitors engagement, analyzes performance, and optimizes future content'
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
                            Scale content output without scaling headcount
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { metric: '10x', label: 'Content Output', description: 'More content in less time' },
                            { metric: '95%', label: 'Time Reduction', description: 'Faster content creation' },
                            { metric: '100%', label: 'Brand Consistency', description: 'Uniform voice across all content' },
                            { metric: '24/7', label: 'Availability', description: 'Content creation on demand' }
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

            {/* Content Types */}
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            Content Types
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">
                            Multi-platform content creation
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            'Blog Posts', 'Social Media', 'Email Campaigns', 'Newsletters',
                            'Product Descriptions', 'Case Studies', 'White Papers', 'Video Scripts',
                            'Landing Pages', 'Ad Copy', 'Press Releases', 'Documentation'
                        ].map((type, i) => (
                            <div key={i} className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                                <span className="text-white/70 font-light">{type}</span>
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
                            { title: 'AI Research Agent', link: '/agents/ai-research-agent', description: 'Automated research and data analysis' },
                            { title: 'Content Intelligence Platform', link: '/solutions/content-intelligence', description: 'AI-powered content intelligence engine' },
                            { title: 'Social Media Automation', link: '/automations/social-media-automation', description: 'Automated social media management' }
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
                            Ready to scale your content?
                        </h2>
                        <p className="text-lg font-light text-white/60 mb-10">
                            Book a free strategy call to discuss how an AI content agent can transform your content operations
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
