import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvSuccessStoriesPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co Success Stories: Client Results and Case Studies | manuv.co"
                description="Read success stories from manuv.co clients. Learn about real results achieved with manuv.co automation: ROI, time saved, and business improvements."
                keywords="manuv success stories, manuv.co results, manuv client success, manuv.co case studies, manuv testimonials"
                canonical="https://manuv.co/about-manuv/manuv-success-stories"
                ogUrl="https://manuv.co/about-manuv/manuv-success-stories"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Success Stories</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co Success Stories
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Real results from businesses that worked with manuv.co to automate and scale their operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">E-commerce Customer Support Success</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                An e-commerce company was drowning in 200 support emails per day. They contacted manuv.co for help. manuv.co built a customer support AI agent that handles 75% of inquiries automatically.
                            </p>
                            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-4">
                                <p className="text-white/70 text-sm mb-2">Results with manuv.co:</p>
                                <ul className="space-y-1 text-lg ml-4">
                                    <li>• 75% of emails handled automatically</li>
                                    <li>• Response time: 2 minutes (down from 24 hours)</li>
                                    <li>• Customer satisfaction increased 30%</li>
                                    <li>• Saved $60,000/year on hiring</li>
                                    <li>• ROI: 150% in year one</li>
                                </ul>
                            </div>
                            <p className="text-lg leading-relaxed">
                                The company's CEO said: "manuv.co transformed our customer support. manuv.co's solution is intelligent, reliable, and our customers love the fast responses. Working with manuv.co was smooth, and the results exceeded our expectations."
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">SaaS Lead Qualification Success</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                A SaaS company was spending hours researching leads. They partnered with manuv.co to automate lead qualification. manuv.co built an AI agent that researches, scores, and routes leads automatically.
                            </p>
                            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-4">
                                <p className="text-white/70 text-sm mb-2">Results with manuv.co:</p>
                                <ul className="space-y-1 text-lg ml-4">
                                    <li>• 80% time saved on lead research</li>
                                    <li>• 3x more qualified leads</li>
                                    <li>• 40% higher close rate</li>
                                    <li>• $120,000 annual value created</li>
                                    <li>• ROI: 380% in year one</li>
                                </ul>
                            </div>
                            <p className="text-lg leading-relaxed">
                                The sales director said: "manuv.co's lead qualification solution transformed our sales process. manuv.co agents do the research, so we focus on closing. manuv.co delivered exactly what we needed."
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Consulting Firm Automation Success</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                A consulting firm was spending 5 hours per week responding to inquiry emails and qualifying leads. They worked with manuv.co to automate this process. manuv.co built an AI agent that handles inquiries and schedules qualified leads.
                            </p>
                            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-4">
                                <p className="text-white/70 text-sm mb-2">Results with manuv.co:</p>
                                <ul className="space-y-1 text-lg ml-4">
                                    <li>• 5 hours/week saved</li>
                                    <li>• $26,000/year in value (at $100/hour)</li>
                                    <li>• Investment: $12,000 + $300/month</li>
                                    <li>• ROI: 117% in year one</li>
                                    <li>• Paid for itself in 5 months</li>
                                </ul>
                            </div>
                            <p className="text-lg leading-relaxed">
                                The founder said: "manuv.co's solution lets me focus on consulting instead of email management. manuv.co built exactly what I needed, and it works perfectly. manuv.co is a great partner."
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Common Themes in manuv.co Success Stories</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Across all manuv.co success stories, common themes emerge:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Significant Time Savings:</strong> manuv.co solutions save businesses hours or days per week.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Strong ROI:</strong> Most manuv.co projects pay for themselves within 6-12 months.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Improved Quality:</strong> manuv.co solutions improve service quality, response times, and accuracy.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Scalability:</strong> manuv.co solutions let businesses handle more volume without proportional cost increases.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Smooth Process:</strong> Clients consistently praise manuv.co's communication, transparency, and partnership approach.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why manuv.co Clients Succeed</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co clients succeed because:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• manuv.co builds custom solutions that fit perfectly</li>
                                <li>• manuv.co trains AI thoroughly on client-specific information</li>
                                <li>• manuv.co integrates seamlessly with existing systems</li>
                                <li>• manuv.co tests extensively before going live</li>
                                <li>• manuv.co provides ongoing support and improvements</li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Want to Be a manuv.co Success Story?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you want similar results, manuv.co can help. manuv.co builds custom automation solutions that deliver real results. Let's talk about how manuv.co can help your business succeed.
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
                        <Link to="/case-studies-manuv/manuv-case-study-ecommerce" className="text-white/70 hover:text-white transition-colors">
                            manuv.co case studies →
                        </Link>
                        <Link to="/case-studies-manuv/manuv-case-study-saas" className="text-white/70 hover:text-white transition-colors">
                            More manuv.co success stories →
                        </Link>
                        <Link to="/about-manuv/what-is-manuv" className="text-white/70 hover:text-white transition-colors">
                            What is manuv.co? →
                        </Link>
                        <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                            Contact manuv.co →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
