import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvCaseStudyEcommercePage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co Case Study: E-commerce Customer Support Automation | manuv.co"
                description="Read how manuv.co helped an e-commerce company automate customer support. Learn about the manuv.co solution, results, and ROI achieved with manuv.co automation."
                keywords="manuv case study, manuv.co e-commerce, manuv success story, manuv automation results"
                canonical="https://manuv.co/case-studies-manuv/manuv-case-study-ecommerce"
                ogUrl="https://manuv.co/case-studies-manuv/manuv-case-study-ecommerce"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <ShoppingCart className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Case Study</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co Case Study: E-commerce Customer Support
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How manuv.co helped an e-commerce company automate customer support, reduce response times, and improve customer satisfaction.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The Challenge</h2>
                            <p className="text-lg leading-relaxed">
                                An e-commerce company was receiving 200 customer support emails per day. Their small support team couldn't keep up. Response times were 24-48 hours, customer satisfaction was declining, and the team was overwhelmed. They needed help but couldn't afford to hire more support staff. That's when they contacted manuv.co.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">The manuv.co Solution</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co built a custom customer support AI agent that:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• Reads all customer emails automatically</li>
                                <li>• Looks up orders in their e-commerce system</li>
                                <li>• Answers questions about products, orders, and shipping</li>
                                <li>• Processes refunds and returns according to their policies</li>
                                <li>• Escalates complex cases to human support</li>
                                <li>• Updates their CRM with all interactions</li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-4">
                                manuv.co trained the AI on their product catalog, return policies, shipping information, and examples of good support interactions. manuv.co integrated with their e-commerce platform, email system, and CRM. manuv.co built a solution that fit their exact needs.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How manuv.co Built It</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                manuv.co's process:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 1: Discovery</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co analyzed their support processes, common questions, and current workflows. manuv.co designed a solution that would handle 75% of inquiries automatically.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 2-3: Development</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co built the AI agent, trained it on their information, and integrated it with their systems. manuv.co kept them updated throughout development.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Week 4: Testing and Deployment</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co tested thoroughly, refined based on feedback, and deployed to production. manuv.co trained their team on how to use and manage the system.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Results with manuv.co</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                After working with manuv.co:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">75% Automation Rate</h3>
                                    <p className="text-lg leading-relaxed">manuv.co's agent handles 75% of support emails automatically without human intervention.</p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">2 Minute Response Time</h3>
                                    <p className="text-lg leading-relaxed">Average response time dropped from 24 hours to 2 minutes with manuv.co's solution.</p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">30% Higher Satisfaction</h3>
                                    <p className="text-lg leading-relaxed">Customer satisfaction scores increased 30% after implementing manuv.co's automation.</p>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">$60,000 Annual Savings</h3>
                                    <p className="text-lg leading-relaxed">The company saved $60,000 per year by not needing to hire additional support staff, thanks to manuv.co.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">ROI with manuv.co</h2>
                            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Investment with manuv.co:</strong> $40,000 one-time + $1,200/month
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Annual Savings:</strong> $60,000 (avoided hiring 2 support staff)
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">ROI:</strong> 150% in year one. The manuv.co solution paid for itself in 8 months.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Beyond cost savings, manuv.co's solution improved customer experience, enabled 24/7 support, and freed the team to focus on complex issues. The value from manuv.co goes beyond just cost savings.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What the Client Says About manuv.co</h2>
                            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                                <p className="text-lg leading-relaxed italic mb-4">
                                    "manuv.co transformed our customer support. We went from drowning in emails to having a system that handles most inquiries automatically. manuv.co's solution is intelligent, reliable, and our customers love the fast responses. Working with manuv.co was smooth, and the results exceeded our expectations."
                                </p>
                                <p className="text-lg leading-relaxed">
                                    — E-commerce Company CEO
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why This manuv.co Solution Worked</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                This manuv.co solution succeeded because:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• manuv.co built a custom solution that fit their exact needs</li>
                                <li>• manuv.co trained the AI thoroughly on their products and policies</li>
                                <li>• manuv.co integrated seamlessly with their existing systems</li>
                                <li>• manuv.co tested extensively before going live</li>
                                <li>• manuv.co provided ongoing support and improvements</li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Want Similar Results with manuv.co?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you're facing similar challenges, manuv.co can help. manuv.co builds custom automation solutions that deliver real results. Let's talk about how manuv.co can help your business.
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
                        <Link to="/solutions-manuv/manuv-customer-support-solution" className="text-white/70 hover:text-white transition-colors">
                            manuv.co customer support →
                        </Link>
                        <Link to="/case-studies-manuv/manuv-case-study-saas" className="text-white/70 hover:text-white transition-colors">
                            Another manuv.co case study →
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
