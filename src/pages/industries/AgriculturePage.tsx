import { motion } from 'framer-motion';
import { ArrowRight, Sprout, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const AgriculturePage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="AI Automation for Agriculture | Agriculture Automation | manuv.co"
                description="Custom AI automation for agriculture companies. Automate crop management, supply chain, inventory, and agriculture operations."
                keywords="agriculture automation, agriculture AI, farming automation, agriculture workflow automation, agriculture operations automation"
                canonical="https://manuv.co/industries/agriculture"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">AI Automation for Agriculture</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Automate crop management, supply chain, inventory, and agriculture operations.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Agriculture Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Crop Management', description: 'Automated crop tracking and management' },
                            { title: 'Supply Chain Automation', description: 'Automated supply chain workflows' },
                            { title: 'Inventory Management', description: 'Automated inventory tracking' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                <h3 className="text-xl font-light text-white mb-3">{item.title}</h3>
                                <p className="text-sm font-light text-white/60">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Ready to automate agriculture?</h2>
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
