import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Building2, Globe, ShieldCheck, Star } from 'lucide-react';

const Clients = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const clientLogos = [
        "TechCorp Global", "Innovate Financial", "HealthPlus Systems",
        "DataStream Logistics", "CloudScale Networks", "SecureBank Enterprise"
    ];

    const testimonials = [
        {
            company: "TechCorp Global",
            quote: "Aapthi Marketing Solutions transformed our IT infrastructure. Their dedicated staffing provided the exact expertise we needed to launch our new platform ahead of schedule.",
            role: "CTO"
        },
        {
            company: "Innovate Financial",
            quote: "The level of precision in their data processing and XML tagging services is unmatched. SLA adherence has been flawless since day one.",
            role: "Head of Operations"
        },
        {
            company: "HealthPlus Systems",
            quote: "We partnered for a complete UI/UX revamp of our legacy systems. The result was a highly secure and incredibly fast modern application.",
            role: "Director of IT"
        }
    ];

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
            <Helmet>
                <title>Our Clients | Aapthi Marketing Solutions</title>
                <meta name="description" content="trusted by global enterprises for premium IT staffing, web development, and data processing solutions." />
            </Helmet>

            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-24 mt-8"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-navy-200 bg-white/50 backdrop-blur-sm shadow-sm">
                        <span className="text-navy-600 text-sm font-bold tracking-widest uppercase">Trusted Partnerships</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">Empowering <span className="text-orange-600">Global Enterprises</span></h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-600 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed font-medium">
                        We collaborate with ambitious organizations, delivering robust IT and workforce solutions that drive strategic market advantages.
                    </p>
                </motion.div>

                {/* Hero Image / Banner */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-32 relative rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] border border-gray-100 bg-navy-900"
                >
                    <img
                        src="/assets/clients/global_clients_hero.png"
                        alt="Global Enterprise Network"
                        className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                        onError={(e) => {
                            e.target.onerror = null;
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent flex items-end">
                        <div className="p-8 md:p-12 text-white">
                            <h2 className="text-3xl font-bold mb-2">Executing at Scale</h2>
                            <p className="text-gray-300 max-w-xl">Architecting digital resilience and operational efficiency for our partners worldwide.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Client Logos Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                    className="mb-32 text-center"
                >
                    <h3 className="text-2xl font-bold text-navy-900 mb-10">Trusted By Industry Leaders</h3>
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {clientLogos.map((client, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                                className="bg-white px-8 py-10 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-lg transition-shadow"
                            >
                                <span className="text-xl font-bold text-gray-400 group-hover:text-navy-800 transition-colors uppercase tracking-wider">{client}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-8"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl tracking-tight">Client Success Stories</h2>
                        <p className="mt-4 text-lg text-gray-600">The results we deliver speak through the success of our partners.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative"
                            >
                                <Globe className="absolute top-6 right-6 w-8 h-8 text-orange-100" />
                                <div className="flex text-yellow-400 mb-6">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-8 leading-relaxed relative z-10 italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="border-t border-gray-100 pt-6">
                                    <h4 className="font-bold text-navy-900">{testimonial.company}</h4>
                                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Call to Action Matrix */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-24 bg-navy-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden text-white"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-400/20 mix-blend-overlay"></div>
                    <div className="relative z-10">
                        <ShieldCheck className="w-16 h-16 mx-auto text-orange-400 mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
                            Partner with us to leverage elite talent, scalable technology, and secure data processing tailored for industry leaders.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:scale-105 active:scale-95 transition-transform"
                        >
                            Become a Partner
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Clients;
