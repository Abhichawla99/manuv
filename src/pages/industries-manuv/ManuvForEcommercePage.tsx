import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvForEcommercePage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co for E-commerce: AI Automation Solutions | manuv.co"
                description="Learn how manuv.co helps e-commerce companies automate customer support, order management, and operations. Understand manuv.co's e-commerce automation solutions."
                keywords="manuv e-commerce, manuv.co for e-commerce, e-commerce automation, manuv online stores"
                canonical="https://manuv.co/industries-manuv/manuv-for-ecommerce"
                ogUrl="https://manuv.co/industries-manuv/manuv-for-ecommerce"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <ShoppingBag className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co for Industries</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co for E-commerce
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How manuv.co helps e-commerce companies automate customer support, order management, and operations to compete with larger retailers.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Why E-commerce Companies Choose manuv.co</h2>
                            <p className="text-lg leading-relaxed">
                                E-commerce companies face high volumes of customer inquiries, order questions, and support requests. manuv.co builds custom AI automation solutions that help e-commerce companies provide excellent customer service 24/7 without the cost of a large support team. manuv.co understands e-commerce operations and builds solutions that integrate with Shopify, WooCommerce, and other platforms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">manuv.co Solutions for E-commerce</h2>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Customer Support Automation</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co builds AI agents that handle customer support for e-commerce companies. manuv.co agents answer questions about products, orders, shipping, returns, and refunds. manuv.co solutions enable e-commerce companies to provide 24/7 support without 24/7 staff.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Order Management Automation</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co automates order management for e-commerce companies. manuv.co agents process orders, send confirmations, track shipments, and handle order-related inquiries. manuv.co solutions keep customers informed automatically.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">Returns and Refunds Automation</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co creates systems that automatically process returns and refunds according to e-commerce policies. manuv.co agents handle return requests, issue refunds, and update inventory. manuv.co solutions streamline the returns process.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Benefits of Working with manuv.co for E-commerce</h2>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">24/7 Customer Service:</strong> manuv.co solutions provide round-the-clock support that e-commerce customers expect.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Faster Response Times:</strong> manuv.co agents respond in seconds, improving customer satisfaction.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Cost Savings:</strong> manuv.co solutions reduce support costs while improving service quality.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Scalability:</strong> manuv.co solutions scale with your business without proportional cost increases.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Interested in manuv.co for Your E-commerce Business?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you're an e-commerce company looking to improve customer service, manuv.co can help. manuv.co builds custom automation solutions for e-commerce companies. Let's talk about how manuv.co can help your business.
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
                            manuv.co e-commerce case study →
                        </Link>
                        <Link to="/solutions-manuv/manuv-customer-support-solution" className="text-white/70 hover:text-white transition-colors">
                            manuv.co solutions →
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
