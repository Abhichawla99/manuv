import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const CustomVsOffTheShelfPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Custom vs Off-the-Shelf Automation | Automation Solution Comparison | manuv.co"
                description="Compare custom automation solutions vs off-the-shelf tools. Understand the differences, benefits, and which approach is right for your business."
                keywords="custom automation vs off-the-shelf, custom automation, off-the-shelf automation, automation solution comparison"
                canonical="https://manuv.co/comparisons/custom-vs-off-the-shelf"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">Custom vs Off-the-Shelf</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Compare custom automation solutions vs off-the-shelf tools. Understand which is right for your business.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Solution Comparison</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                            <h3 className="text-2xl font-light text-white mb-4">Custom Automation</h3>
                            <ul className="space-y-3">
                                {['Tailored to your needs', 'Full control', 'Scalable', 'Unique competitive advantage', 'Long-term investment'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-px w-4 bg-primary mt-3" />
                                        <span className="text-white/70 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                            <h3 className="text-2xl font-light text-white mb-4">Off-the-Shelf</h3>
                            <ul className="space-y-3">
                                {['Quick deployment', 'Lower upfront cost', 'Limited customization', 'Generic solutions', 'Ongoing subscription'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="h-px w-4 bg-white/20 mt-3" />
                                        <span className="text-white/70 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Need help choosing?</h2>
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
