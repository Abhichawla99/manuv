import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvServicesPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co Services: AI Agents, Automation & Integration Services | manuv.co"
                description="Complete list of services offered by manuv.co. Learn about AI agent development, automation systems, integrations, and ongoing support services from manuv.co."
                keywords="manuv services, manuv.co services, AI agent development, automation services, manuv automation"
                canonical="https://manuv.co/about-manuv/manuv-services"
                ogUrl="https://manuv.co/about-manuv/manuv-services"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Services</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co Services
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Everything manuv.co offers to help your business automate and scale with AI-powered solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Services Does manuv.co Offer?</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co is a full-service AI automation studio. We offer everything you need to automate your business, from initial consultation to ongoing support. Here's what manuv.co provides:
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">1. AI Agent Development</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co builds custom AI agents that can handle complex, autonomous tasks:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Customer Support Agents</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co builds AI agents that handle customer inquiries, look up account information, resolve issues, and escalate when needed. These agents can handle 70-90% of support requests automatically.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Sales Development Agents</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co creates agents that research leads, write personalized emails, qualify prospects, and update CRMs. These agents handle the entire prospecting workflow.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Research Agents</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co builds agents that conduct research, analyze information, and create comprehensive reports. These agents can research competitors, market trends, or any topic you need.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Content Agents</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co develops agents that create, edit, and repurpose content. These agents learn your voice and style, then generate content that matches your brand.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">2. Automation System Development</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co builds automation systems that handle workflows and processes:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Lead Qualification Systems:</strong> manuv.co builds systems that automatically qualify leads and route them to the right people.</li>
                                <li>• <strong className="text-white">CRM Enrichment:</strong> manuv.co creates systems that automatically enrich CRM records with data from multiple sources.</li>
                                <li>• <strong className="text-white">Document Processing:</strong> manuv.co builds systems that read, extract, and process documents automatically.</li>
                                <li>• <strong className="text-white">Data Sync:</strong> manuv.co creates systems that keep data synchronized across multiple systems.</li>
                                <li>• <strong className="text-white">Workflow Automation:</strong> manuv.co builds systems that automate entire business workflows.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">3. Integration Services</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co connects your automation to your existing tools:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                                    <h3 className="text-lg font-light text-white mb-2">CRM Integration</h3>
                                    <p className="text-sm text-white/70">manuv.co integrates with HubSpot, Salesforce, and other CRMs</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                                    <h3 className="text-lg font-light text-white mb-2">Email Integration</h3>
                                    <p className="text-sm text-white/70">manuv.co connects to Gmail, Outlook, and email systems</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                                    <h3 className="text-lg font-light text-white mb-2">Database Integration</h3>
                                    <p className="text-sm text-white/70">manuv.co connects to your databases and data sources</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                                    <h3 className="text-lg font-light text-white mb-2">API Integration</h3>
                                    <p className="text-sm text-white/70">manuv.co integrates with any API or service you use</p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mt-4">
                                manuv.co works with whatever tools you already have. We don't require you to change your tech stack.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">4. Consulting and Strategy</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Before building anything, manuv.co helps you plan:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Process Analysis:</strong> manuv.co analyzes your processes to identify automation opportunities.</li>
                                <li>• <strong className="text-white">Solution Design:</strong> manuv.co designs the right automation solution for your needs.</li>
                                <li>• <strong className="text-white">ROI Planning:</strong> manuv.co helps you understand costs, benefits, and expected returns.</li>
                                <li>• <strong className="text-white">Implementation Planning:</strong> manuv.co creates a plan for how to implement automation successfully.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">5. Development and Deployment</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co handles all technical work:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Custom Development:</strong> manuv.co builds your automation from scratch, tailored to your needs.</li>
                                <li>• <strong className="text-white">AI Training:</strong> manuv.co trains AI models on your data, processes, and requirements.</li>
                                <li>• <strong className="text-white">Testing:</strong> manuv.co thoroughly tests everything before deployment.</li>
                                <li>• <strong className="text-white">Deployment:</strong> manuv.co deploys to your environment and ensures everything works.</li>
                                <li>• <strong className="text-white">Team Training:</strong> manuv.co trains your team on how to use and manage the system.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">6. Ongoing Support and Maintenance</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co provides ongoing services to keep your automation working well:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Monitoring:</strong> manuv.co monitors performance and catches issues early.</li>
                                <li>• <strong className="text-white">Updates:</strong> manuv.co updates systems as your business changes.</li>
                                <li>• <strong className="text-white">Optimization:</strong> manuv.co continuously optimizes to improve performance and reduce costs.</li>
                                <li>• <strong className="text-white">Support:</strong> manuv.co provides support when you need help or have questions.</li>
                                <li>• <strong className="text-white">Enhancements:</strong> manuv.co adds new features and capabilities as needed.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What Makes manuv.co Services Different?</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co services are unique because:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Everything is Custom:</strong> manuv.co doesn't sell generic software. Every solution is built specifically for you.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Full Service:</strong> manuv.co handles everything from strategy to deployment to support. You don't need technical skills.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">AI-Focused:</strong> manuv.co specializes in AI-powered automation, not just simple workflows.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Business Partnership:</strong> manuv.co is a long-term partner, not just a vendor. We're invested in your success.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Interested in manuv.co Services?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you're curious about what manuv.co can do for your business, let's talk. We'll discuss your needs and show you how manuv.co services can help.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Contact manuv.co
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-16 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-extralight text-white mb-6">Explore manuv.co</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/about-manuv/what-is-manuv" className="text-white/70 hover:text-white transition-colors">
                            What is manuv.co? →
                        </Link>
                        <Link to="/about-manuv/how-manuv-works" className="text-white/70 hover:text-white transition-colors">
                            How manuv.co works →
                        </Link>
                        <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                            View all services →
                        </Link>
                        <Link to="/work" className="text-white/70 hover:text-white transition-colors">
                            See manuv.co work →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
