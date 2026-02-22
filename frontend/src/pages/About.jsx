import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Building, Target, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
            <Helmet>
                <title>About Us | Aapthi Marketing Solutions</title>
                <meta name="description" content="Learn about Aapthi Marketing Solutions' vision, mission, and core values." />
            </Helmet>

            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-navy-100 rounded-full blur-[100px] opacity-30 pointer-events-none -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-16 mt-8"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-navy-200 bg-white/50 backdrop-blur-sm shadow-sm">
                        <span className="text-navy-600 text-sm font-bold tracking-widest uppercase">Our Identity</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">About <span className="text-orange-600">Aapthi Marketing</span></h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-600 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed font-medium">
                        A legacy of trust, excellence, and enterprise-grade execution.
                    </p>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-24"
                >
                    <motion.div variants={fadeInUp} className="w-full lg:w-1/2 relative group">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-navy-800 to-navy-900 aspect-[4/3] flex items-center justify-center border border-gray-100/10">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20"></div>

                            <div className="relative z-10 flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
                                <div className="w-24 h-24 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center mb-6 shadow-inner border border-white/20">
                                    <Building className="w-12 h-12 text-orange-400" />
                                </div>
                                <h3 className="text-white text-2xl font-bold tracking-widest uppercase">Global Scale</h3>
                                <div className="w-12 h-1 bg-orange-500 rounded-full mt-4"></div>
                            </div>
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-orange-50 rounded-[2rem] -z-10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mr-4">
                                <Building className="w-6 h-6 text-orange-600" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">Company Overview</h2>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Aapthi Marketing Solutions Pvt Ltd is a premier destination for corporate enterprise solutions.
                            We bridge the gap between organizational demands and specialized expertise across IT staffing,
                            digital product development, and intricate backend data operations.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our cross-functional teams engineer resilient architectures and deliver precise execution, ensuring that our partners maintain a strategic competitive advantage in dynamic global markets.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Vision and Mission Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
                >
                    {/* Vision Card */}
                    <motion.div variants={fadeInUp} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
                            <Eye className="w-8 h-8 text-orange-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To be the foremost enabler of digital and operational excellence for global enterprises, recognized
                            for unyielding quality, ethical conduct, and sustainable workforce solutions.
                        </p>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div variants={fadeInUp} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
                            <Target className="w-8 h-8 text-orange-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To empower companies by providing robust IT architectures, agile staffing, and precise non-voice
                            project execution, guaranteeing scalable and measurable impacts on their bottom line.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Core Values Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                    className="bg-navy-900 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden text-white mb-12"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-400/20 mix-blend-overlay"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <ShieldCheck className="w-16 h-16 mx-auto text-orange-400 mb-6" />
                            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Our Core Values</h2>
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto">The foundational principles that guide every interaction, project, and strategic decision.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { title: "Integrity & Transparency", desc: "We operate with complete honesty and build transparent relationships with clients and partners." },
                                { title: "Excellence in Execution", desc: "Every project, regardless of size, is handled with meticulous attention to detail." },
                                { title: "Client-Centricity", desc: "Our strategies and processes are entirely tailored to client outcomes and KPIs." }
                            ].map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { delay: 0.2 * idx } }
                                    }}
                                    className="bg-navy-800/50 backdrop-blur-md p-8 rounded-2xl border border-navy-700/50 hover:bg-navy-800 transition-colors"
                                >
                                    <div className="flex items-center mb-4 text-orange-400">
                                        <CheckCircle2 className="w-6 h-6 mr-3" />
                                        <h3 className="text-xl font-bold text-white">{value.title}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        {value.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default About;
