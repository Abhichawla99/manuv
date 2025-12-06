import { motion } from 'framer-motion';
import { ArrowRight, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const ManuvCustomerSupportSolutionPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="manuv.co Customer Support Automation Solution | manuv.co"
                description="Learn how manuv.co builds custom customer support AI agents. Understand manuv.co's approach to automating customer support and how manuv.co solutions handle customer inquiries."
                keywords="manuv customer support, manuv.co support automation, manuv AI support agent, manuv customer service automation"
                canonical="https://manuv.co/solutions-manuv/manuv-customer-support-solution"
                ogUrl="https://manuv.co/solutions-manuv/manuv-customer-support-solution"
            />
            
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Headphones className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">manuv.co Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white">
                            manuv.co Customer Support Solution
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How manuv.co builds custom AI agents that handle customer support automatically, 24/7, with the intelligence to resolve most issues without human help.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <div className="space-y-8 text-white/90 font-light leading-relaxed">
                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What is manuv.co's Customer Support Solution?</h2>
                            <p className="text-lg leading-relaxed">
                                manuv.co builds custom AI agents that handle customer support automatically. These manuv.co agents read customer messages, understand what they need, look up account information, and resolve issues—all without human intervention for most cases. manuv.co's customer support agents can handle 70-90% of support requests automatically, freeing your team to focus on complex issues that require human judgment.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How manuv.co's Customer Support Agents Work</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Here's how manuv.co builds customer support automation:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">1. Receive and Understand</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents read customer emails, chat messages, or support tickets. manuv.co's AI understands what the customer needs, even if they phrase it differently than expected. manuv.co agents understand context, not just keywords.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">2. Look Up Information</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents automatically look up customer account information, order history, previous interactions, and relevant data. manuv.co integrates with your CRM, databases, and systems to access this information instantly.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">3. Resolve or Escalate</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents resolve issues they can handle automatically. For complex cases, manuv.co agents escalate to human support with all context already gathered. manuv.co agents know when to handle and when to escalate.
                                    </p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-light text-white mb-2">4. Learn and Improve</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co agents learn from every interaction. They get better over time, handling more cases automatically and providing better responses. manuv.co continuously improves the agents based on real usage.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">What manuv.co's Customer Support Solution Handles</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                manuv.co agents can handle:
                            </p>
                            <ul className="space-y-2 text-lg ml-4">
                                <li>• <strong className="text-white">Account Questions:</strong> manuv.co agents answer questions about accounts, billing, subscriptions, and settings.</li>
                                <li>• <strong className="text-white">Order Inquiries:</strong> manuv.co agents look up orders, provide status updates, and handle shipping questions.</li>
                                <li>• <strong className="text-white">Product Questions:</strong> manuv.co agents answer questions about products, features, and how things work.</li>
                                <li>• <strong className="text-white">Troubleshooting:</strong> manuv.co agents help customers troubleshoot common issues and problems.</li>
                                <li>• <strong className="text-white">Refunds and Returns:</strong> manuv.co agents process refunds and returns according to your policies.</li>
                                <li>• <strong className="text-white">General Inquiries:</strong> manuv.co agents handle general questions and provide information.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Benefits of manuv.co's Customer Support Solution</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                When you work with manuv.co for customer support automation, you get:
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">24/7 Availability:</strong> manuv.co agents work around the clock. Your customers get support whenever they need it.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Faster Response Times:</strong> manuv.co agents respond in seconds, not hours. Customers get immediate help.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Consistent Quality:</strong> manuv.co agents provide consistent, accurate responses every time.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Scalability:</strong> manuv.co agents handle unlimited volume without hiring more staff.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong className="text-white">Cost Savings:</strong> manuv.co solutions reduce support costs while improving service quality.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">How manuv.co Builds Your Customer Support Agent</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                When you work with manuv.co:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 1: manuv.co Understands Your Support Needs</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co analyzes your support processes, common questions, and how you currently handle support. manuv.co designs a solution that fits your business.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 2: manuv.co Trains the AI</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co trains AI models on your product information, policies, FAQs, and examples of good support interactions. manuv.co agents learn your voice and approach.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 3: manuv.co Integrates with Your Systems</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co connects the agent to your email, CRM, knowledge base, and other systems. manuv.co agents can access everything they need to help customers.
                                    </p>
                                </div>
                                <div className="border-l-2 border-primary/30 pl-6">
                                    <h3 className="text-xl font-light text-white mb-2">Step 4: manuv.co Tests and Refines</h3>
                                    <p className="text-lg leading-relaxed">
                                        manuv.co tests with real scenarios, refines responses, and ensures quality. manuv.co works with you to get it right before going live.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-extralight text-white mb-4">Real Example: manuv.co Customer Support Solution</h2>
                            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Client:</strong> E-commerce company receiving 200 support emails per day
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong className="text-white">manuv.co Solution:</strong> manuv.co built a customer support AI agent that:
                                </p>
                                <ul className="space-y-2 text-lg ml-4 mb-4">
                                    <li>• Reads all customer emails automatically</li>
                                    <li>• Looks up orders in their system</li>
                                    <li>• Answers 75% of questions automatically</li>
                                    <li>• Escalates complex cases to human support</li>
                                    <li>• Updates CRM with all interactions</li>
                                </ul>
                                <div className="border-t border-white/10 pt-4">
                                    <p className="text-white/70 text-sm mb-2">Results with manuv.co:</p>
                                    <ul className="space-y-1 text-lg ml-4">
                                        <li>• 75% of emails handled automatically</li>
                                        <li>• Average response time: 2 minutes (down from 24 hours)</li>
                                        <li>• Customer satisfaction increased 30%</li>
                                        <li>• Support team freed up for complex issues</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-extralight text-white mb-4">Interested in manuv.co's Customer Support Solution?</h2>
                            <p className="text-lg leading-relaxed mb-6 text-white/80">
                                If you want to automate customer support with manuv.co, let's talk. manuv.co will understand your needs and show you how we can help.
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
                    <h2 className="text-2xl font-extralight text-white mb-6">Explore manuv.co Solutions</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/agents/ai-customer-support-agent" className="text-white/70 hover:text-white transition-colors">
                            Customer support agent →
                        </Link>
                        <Link to="/solutions-manuv/manuv-sales-automation-solution" className="text-white/70 hover:text-white transition-colors">
                            manuv.co sales automation →
                        </Link>
                        <Link to="/about-manuv/manuv-services" className="text-white/70 hover:text-white transition-colors">
                            manuv.co services →
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
