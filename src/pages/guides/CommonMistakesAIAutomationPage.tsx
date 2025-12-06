import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const CommonMistakesAIAutomationPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Common AI Automation Mistakes | Automation Mistakes to Avoid | manuv.co"
                description="Learn about common AI automation mistakes and how to avoid them. Best practices for successful AI automation implementation."
                keywords="AI automation mistakes, automation mistakes, common automation errors, AI automation pitfalls, automation best practices"
                canonical="https://manuv.co/guides/common-mistakes-ai-automation"
            />
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">Common AI Automation Mistakes</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">Learn about common AI automation mistakes and how to avoid them for successful implementation.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-12 text-white">Common Mistakes to Avoid</h2>
                    <div className="space-y-8">
                        {['Starting Too Complex', 'Ignoring Data Quality', 'Lack of Testing', 'Poor Change Management', 'Not Monitoring Performance'].map((mistake, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-8 items-start">
                                <div className="w-16 h-16 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                    <AlertTriangle className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-2xl font-light text-white mb-3">{mistake}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">Need expert guidance?</h2>
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
