import { motion } from 'framer-motion';
import { ArrowRight, FileText, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const DocumentProcessingPipelinePage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Document Processing Pipeline | Automated Document Processing | manuv.co"
                description="Document processing pipeline that parses PDFs, extracts data, validates with AI, and sends to appropriate systems without human review. Automated document processing."
                keywords="document processing automation, PDF processing automation, document extraction automation, automated document parsing, AI document processing, document OCR automation, document data extraction"
                canonical="https://manuv.co/automations/document-processing-pipeline"
            />

            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-2 text-primary mb-6">
                            <FileText className="w-5 h-5" />
                            <span className="text-xs font-light uppercase tracking-[0.2em]">Automation</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">Document Processing Pipeline</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Parses PDFs, extracts data, validates with AI, sends to appropriate systems without human review. Process documents at scale automatically.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">AI Extraction</div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">Data Validation</div>
                            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">Auto-Routing</div>
                        </div>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">The Problem</span>
                            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">Manual document processing is slow</h2>
                            <p className="text-lg font-light text-white/60 leading-relaxed mb-6">Documents pile up. Manual extraction takes time. Errors occur. Data entry is tedious.</p>
                            <ul className="space-y-3">
                                {['Processing takes 10-30 min per document', 'Manual data entry errors', 'Documents pile up unprocessed', 'Inconsistent extraction quality', 'Limited scalability'].map((item, i) => (
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
                                    <span className="text-white/60 font-light">Processing Time</span>
                                    <span className="text-2xl font-light text-white">10-30 min</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Accuracy</span>
                                    <span className="text-2xl font-light text-white">80-85%</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-white/60 font-light">Volume/Day</span>
                                    <span className="text-2xl font-light text-white">10-20</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">The Solution</span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">Automated document processing</h2>
                        <p className="text-lg font-light text-white/60 max-w-3xl mx-auto">Our pipeline automatically processes documents, extracts data, validates it, and routes to appropriate systems.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { icon: FileText, title: 'Document Parsing', description: 'Extracts text and data from PDFs and documents' },
                            { icon: CheckCircle, title: 'AI Validation', description: 'Validates extracted data using AI' },
                            { icon: TrendingUp, title: 'Auto-Routing', description: 'Routes processed data to appropriate systems' }
                        ].map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                    <Icon className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-xl font-light text-white mb-3">{feature.title}</h3>
                                    <p className="text-sm font-light text-white/60">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">Results</span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-white">Process documents at scale</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { metric: '< 1 min', label: 'Processing Time', description: 'Fast extraction' },
                            { metric: '95%', label: 'Accuracy', description: 'High quality' },
                            { metric: '100x', label: 'Volume', description: 'Scale processing' },
                            { metric: '100%', label: 'Automation', description: 'Zero manual work' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
                                <div className="text-5xl font-light text-primary mb-3">{item.metric}</div>
                                <div className="text-lg font-light text-white mb-2">{item.label}</div>
                                <div className="text-sm font-light text-white/50">{item.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Ready to automate document processing?</h2>
                        <p className="text-lg font-light text-white/60 mb-10">Book a free strategy call to discuss automated document processing</p>
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
