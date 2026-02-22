import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, ShieldCheck, Zap } from 'lucide-react';

const Awards = () => {
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

    const awards = [
        {
            title: "Asia Infrastructure Digital Excellence Award – 2023",
            category: "Smart Rail Monitoring Innovation",
            presentedBy: "Asia Infrastructure Technology Forum",
            project: "Metro Infrastructure Digital Monitoring System",
            image: "/assets/clients/2023 Asia Infrastructure Digital Excellence Award Certificate.png",
            highlights: [
                "Best Real-Time Monitoring Implementation",
                "Excellence in Construction Data Automation"
            ],
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            color: "yellow"
        },
        {
            title: "Global Construction Tech Innovation Award – 2022",
            category: "ERP Deployment in Large-Scale Infrastructure",
            presentedBy: "International Construction Digital Council",
            project: "Coastal Bridge Construction ERP Implementation",
            image: "/assets/clients/Screenshot 2026-02-22 144418.png",
            highlights: [
                "Outstanding Budget Control Automation",
                "Digital Documentation Transformation Excellence"
            ],
            icon: <Award className="w-8 h-8 text-orange-500" />,
            color: "blue"
        },
        {
            title: "Maritime Digital Transformation Award – 2023",
            category: "Port Operations Optimization",
            presentedBy: "Asia-Pacific Maritime Technology Association",
            project: "Smart Port Digital Operations Platform",
            image: "/assets/clients/Screenshot 2026-02-22 144257.png",
            highlights: [
                "Cargo Turnaround Efficiency Improvement",
                "Integrated Vendor Management System Excellence"
            ],
            icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
            color: "teal"
        },
        {
            title: "Infrastructure Analytics Excellence Award – 2023",
            category: "Smart Highway Monitoring",
            presentedBy: "Global Transport Data Summit",
            project: "National Highway Performance Dashboard",
            image: "/assets/clients/Screenshot 2026-02-22 144342.png",
            highlights: [
                "Data-Driven Maintenance Innovation",
                "Real-Time Field Reporting System Recognition"
            ],
            icon: <Trophy className="w-8 h-8 text-orange-500" />,
            color: "indigo"
        },
        {
            title: "Smart City Innovation Recognition – 2023",
            category: "Urban Digital Governance Platform",
            presentedBy: "International Smart Cities Consortium",
            project: "Smart City Urban Planning & Analytics System",
            image: "/assets/clients/Screenshot 2026-02-22 144448.png",
            highlights: [
                "Unified City Infrastructure Dashboard",
                "Government Workflow Automation Excellence"
            ],
            icon: <Star className="w-8 h-8 text-purple-500" />,
            color: "purple"
        }
    ];

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50 relative overflow-hidden flex flex-col">
            <Helmet>
                <title>Awards & Recognitions | Aapthi Marketing Solutions</title>
                <meta name="description" content="Aapthi Marketing Solutions' industry awards and recognitions for excellence in digital transformation and infrastructure monitoring." />
            </Helmet>

            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-[100px] opacity-40 pointer-events-none translate-y-1/3 translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-24">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-20 mt-8"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-200 bg-yellow-50 shadow-sm">
                        <span className="text-yellow-700 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                            <Trophy className="w-4 h-4" /> Industry Honors
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">
                        Excellence <span className="text-yellow-600">Recognized</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed font-medium">
                        Our commitment to digital transformation has been celebrated by leading global infrastructure and technology forums.
                    </p>
                </motion.div>

                {/* Featured Trophy Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-24 relative rounded-[2.5rem] overflow-hidden bg-navy-950 text-white shadow-2xl border border-white/5"
                >
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz4KPC9zdmc+')] opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.2)] border border-yellow-500/20"
                            >
                                <img
                                    src="/assets/clients/WhatsApp Image 2026-02-22 at 1.39.29 PM.jpeg"
                                    alt="Mindspace Achievement Trophy"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold tracking-widest uppercase">
                                <Award className="w-4 h-4" /> Grand Excellence
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white drop-shadow-sm">
                                <span className="block mb-2 text-white">Mindspace</span>
                                <span className="text-yellow-500">Achievement</span>
                                <span className="block mt-2 text-white">Awards</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl font-medium">
                                Prestigious recognition for overall organizational excellence, technical innovation, and professional accomplishment in the infrastructure digital landscape (2025).
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <div className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-inner">
                                    <p className="text-[10px] text-yellow-500 font-black uppercase tracking-widest mb-1">Presented By</p>
                                    <p className="text-sm font-bold text-white">Mindspace Consortium</p>
                                </div>
                                <div className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-inner">
                                    <p className="text-[10px] text-yellow-500 font-black uppercase tracking-widest mb-1">Year</p>
                                    <p className="text-sm font-bold text-white">2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Awards Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Decorative background glow on hover */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-${award.color}-50 rounded-bl-full -z-10 group-hover:scale-150 group-hover:bg-${award.color}-100/50 transition-all duration-700 ease-out`}></div>

                            <div className="flex items-center justify-between mb-6">
                                <div className={`w-14 h-14 rounded-2xl bg-${award.color}-50 flex items-center justify-center border border-${award.color}-100 group-hover:-translate-y-1 transition-transform duration-300`}>
                                    {award.icon}
                                </div>
                                <span className="text-[10px] font-black tracking-widest uppercase text-gray-400 border border-gray-100 px-3 py-1 rounded-full">
                                    {award.category.split(' ')[0]}
                                </span>
                            </div>

                            {/* Award Image/Certificate */}
                            {award.image && (
                                <div className="mb-6 relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 group-hover:border-orange-200 transition-colors">
                                    <img
                                        src={award.image}
                                        alt={award.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-orange-600 transition-colors">
                                {award.title}
                            </h3>

                            <p className="text-[10px] font-black text-gray-400 mb-4 uppercase tracking-wider">
                                {award.presentedBy}
                            </p>

                            <div className="mb-6 p-4 rounded-xl bg-gray-50 border border-gray-100 flex-grow">
                                <p className="text-[10px] font-black text-orange-600/70 mb-1 uppercase tracking-widest">Project Milestone</p>
                                <p className="text-sm text-gray-600 font-semibold leading-tight">{award.project}</p>
                            </div>

                            <div className="mt-auto">
                                <h4 className="text-xs font-black text-navy-900 mb-3 flex items-center gap-2 uppercase tracking-widest">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                    Recognition Highlights
                                </h4>
                                <ul className="space-y-2.5">
                                    {award.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="flex items-start gap-2 text-xs text-gray-500 font-medium leading-tight">
                                            <ShieldCheck className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Quote Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-24 text-center max-w-3xl mx-auto"
                >
                    <div className="p-1 gap-2 inline-flex items-center mb-6">
                        <Award className="w-6 h-6 text-yellow-500" />
                    </div>
                    <blockquote className="text-2xl font-serif italic text-navy-800 leading-relaxed">
                        "Excellence is not an act, but a habit. These recognitions fuel our passion to further innovate the infrastructure digital landscape."
                    </blockquote>
                    <p className="mt-4 font-bold text-gray-500 uppercase tracking-widest text-xs">— Leadership Team, Aapthi Marketing</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Awards;
