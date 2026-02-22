import { Helmet } from 'react-helmet-async';
import { ArrowRight, Monitor, Users, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <>
            <Helmet>
                <title>Aapthi Marketing Solutions Pvt Ltd | Premium IT & Workforce</title>
                <meta name="description" content="Empowering Businesses with Smart IT & Workforce Solutions. Premium IT staffing, advanced web development, and XML data processing." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden flex items-center bg-navy-900">
                {/* Deep Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-blue-950"></div>

                {/* Architectural Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCA0MEwwIDAiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjxwYXRoIGQ9Ik0wIDQwTDQwIDQwIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)] opacity-60"></div>

                {/* Animated Glowing Orbs */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none"
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Left Column - Text Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="w-full lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-900/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                                <span className="text-orange-300 text-xs font-bold tracking-widest uppercase">Versatile Enterprise Solutions</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                                Aapthi Marketing <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-amber-300">
                                    Solutions Pvt Ltd
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="max-w-xl mx-auto lg:mx-0 text-xl text-gray-400 mb-10 leading-relaxed font-light">
                                A diversified company delivering services across Real Estate, Construction Coordination, Software Development, and Business Process Services.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link
                                    to="/contact"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-navy-900 bg-white overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                                >
                                    <span className="relative z-10 flex items-center">
                                        Work With Us
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white border border-gray-600/60 bg-navy-800/50 backdrop-blur-md hover:bg-white/10 hover:border-white/60 transition-all"
                                >
                                    Explore Services
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Visual Graphic */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="w-full lg:w-1/2 lg:block relative hidden"
                        >
                            <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
                                {/* Dashboard/Platform Abstract */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-teal-400/5 rounded-full blur-3xl"></div>

                                {/* Main floating element */}
                                <motion.div
                                    animate={{ y: [-15, 15, -15] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-20 w-4/5 h-3/5 bg-navy-800/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
                                >
                                    {/* Abstract Window Header */}
                                    <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                                    </div>
                                    {/* Abstract content */}
                                    <div className="p-6 flex-grow flex flex-col gap-4">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                                                <Database className="w-6 h-6 text-orange-400" />
                                            </div>
                                            <div className="flex-grow flex flex-col gap-2 justify-center">
                                                <div className="h-3 w-3/4 bg-white/10 rounded-full"></div>
                                                <div className="h-3 w-1/2 bg-white/5 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex-grow rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 relative overflow-hidden">
                                            {/* decorative lines */}
                                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-500/20 to-transparent"></div>
                                            <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                                <path d="M0 100 L20 60 L40 80 L60 40 L80 60 L100 20 L100 100 Z" fill="rgba(59,130,246,0.2)" />
                                                <path d="M0 100 L20 60 L40 80 L60 40 L80 60 L100 20" fill="none" stroke="rgba(59,130,246,0.8)" strokeWidth="1" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Background floating elements */}
                                <motion.div
                                    animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute right-0 top-1/4 z-30 w-32 h-32 bg-amber-900/60 backdrop-blur-lg border border-amber-500/30 rounded-xl shadow-2xl flex items-center justify-center transform translate-x-8"
                                >
                                    <Monitor className="w-12 h-12 text-amber-400" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [-10, 10, -10], rotate: [0, -5, 0] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute left-0 bottom-1/4 z-10 w-40 h-24 bg-orange-900/60 backdrop-blur-lg border border-orange-500/30 rounded-xl shadow-2xl flex items-center justify-center transform -translate-x-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <Users className="w-8 h-8 text-orange-400" />
                                        <div className="flex flex-col gap-1">
                                            <div className="h-2 w-12 bg-orange-300/50 rounded-full"></div>
                                            <div className="h-2 w-8 bg-orange-300/30 rounded-full"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-navy-100 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl font-extrabold text-navy-900 sm:text-5xl tracking-tight">Our Core Segments</h2>
                        <div className="mt-6 w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    >
                        {/* Construction & Real Estate */}
                        <motion.div variants={scaleIn} className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-10 border border-gray-100">
                            <h3 className="text-2xl font-bold text-navy-900 mb-4">Construction & Real Estate</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                From residential to commercial developments, we focus on structured project coordination, construction coordination, and marketing support with clear timelines.
                            </p>
                        </motion.div>

                        {/* IT Division */}
                        <motion.div variants={scaleIn} className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-10 border border-gray-100">
                            <h3 className="text-2xl font-bold text-navy-900 mb-4">Software & IT Division</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Specializing in Web Development, customized software, and high-performance applications tailored to drive business growth and scalability.
                            </p>
                        </motion.div>

                        {/* Non-Voice BPS */}
                        <motion.div variants={scaleIn} className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-10 border border-gray-100">
                            <h3 className="text-2xl font-bold text-navy-900 mb-4">Non-Voice BPS Services</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Business support solutions including back-office operations and precision data processing to enhance organizational efficiency and productivity.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-navy-900 sm:text-4xl lg:text-5xl mb-6 leading-tight">
                                Our <span className="text-orange-600">Commitment to Quality</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-10 leading-relaxed">
                                We are committed to quality execution, structured processes, and building long-term business relationships based on trust and results.
                            </motion.p>

                            <ul className="space-y-8">
                                {[
                                    { title: "Structured Processes", desc: "Result-oriented execution with professional standards and clear delivery timelines." },
                                    { title: "Scalable Solutions", desc: "Build secure, performance-driven applications and process systems tailored for growth." },
                                    { title: "Business Support", desc: "Dedicated support solutions that improve organizational efficiency and productivity." }
                                ].map((item, index) => (
                                    <motion.li variants={fadeInUp} key={index} className="flex group">
                                        <div className="ml-0">
                                            <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                                            <p className="mt-2 text-base text-gray-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mt-16 lg:mt-0"
                        >
                            <div className="relative bg-navy-900 rounded-3xl p-12 overflow-hidden shadow-2xl">
                                <h3 className="text-3xl font-bold text-white mb-6">Execution Excellence</h3>
                                <p className="text-orange-200 opacity-80 text-lg leading-relaxed mb-8">
                                    Aapthi Marketing Solutions Pvt Ltd maintains the highest professional standards across all our diversified segments.
                                </p>
                                <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
