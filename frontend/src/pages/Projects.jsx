import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Cloud, Globe, ShieldCheck, Database, Layout, Monitor, Route, Anchor } from 'lucide-react';

const Projects = () => {
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

    const projects = [
        {
            category: "Metro Infrastructure",
            title: "Digital Monitoring System",
            client: "Metro Transport Authority – Philippines",
            year: "2023",
            description: "Designed and deployed a centralized digital monitoring platform (Aapthi InfraFlow 360 & StructoWatch AI Suite) for metro rail construction zones, enabling real-time structural data tracking and milestone verification.",
            impact: "22% faster reporting cycle across 14 zones",
            icon: <Monitor className="w-8 h-8 text-orange-500" />,
            color: "blue"
        },
        {
            category: "Maritime Infrastructure",
            title: "Coastal Bridge ERP",
            client: "Cebu Coastal Development Corporation",
            year: "2022",
            description: "Implementation of Aapthi BuildTrack Pro & DocuStruct XML Engine to manage BOQ, contractor billing, and financial tracking for major coastal bridge developments.",
            impact: "30% reduction in manual documentation",
            icon: <Layout className="w-8 h-8 text-amber-500" />,
            color: "teal"
        },
        {
            category: "Port Operations",
            title: "Smart Port Platform",
            client: "Philippine Regional Ports Authority",
            year: "2023",
            description: "Development of Aapthi PortLink Digital & InfraGov Portal for multi-port modernization, integrating cargo tracking and contract lifecycle management.",
            impact: "18% improvement in cargo turnaround time",
            icon: <Anchor className="w-8 h-8 text-orange-500" />,
            color: "indigo"
        },
        {
            category: "Civic Infrastructure",
            title: "National Highway Dashboard",
            client: "Luzon Highway Development Group",
            year: "2022–2023",
            description: "Built the RoadPulse Monitor & CivicBuild Suite for real-time highway performance analytics, field reporting, and automated maintenance scheduling.",
            impact: "Live monitoring for 120+ km highway stretch",
            icon: <Route className="w-8 h-8 text-rose-500" />,
            color: "rose"
        },
        {
            category: "Urban Development",
            title: "Smart City Analytics",
            client: "Clark Urban Development Authority",
            year: "2023",
            description: "Delivered an integrated urban planning dashboard (Aapthi UrbanPlan Digital & CityGrid Connect) combining zoning visualization and approval workflow automation.",
            impact: "Streamlined infrastructure approvals & coordination",
            icon: <Globe className="w-8 h-8 text-orange-500" />,
            color: "orange"
        }
    ];

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50 relative overflow-hidden flex flex-col">
            <Helmet>
                <title>Enterprise Projects | Aapthi Marketing Solutions</title>
                <meta name="description" content="Explore our ongoing enterprise projects in premium IT staffing, XML processing, and scalable web development." />
            </Helmet>

            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-100/50 rounded-full blur-[100px] opacity-40 pointer-events-none translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-24">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-20 mt-8"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-navy-200 bg-white/50 backdrop-blur-sm shadow-sm">
                        <span className="text-navy-600 text-sm font-bold tracking-widest uppercase">Case Studies</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">Our <span className="text-orange-600">Enterprise Projects</span></h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-600 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed font-medium">
                        Showcasing our capacity to engineer resilient architectures and deliver high-impact outcomes across diverse international industry domains.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Decorative background glow on hover */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-${project.color}-50 rounded-bl-full -z-10 group-hover:scale-150 group-hover:bg-${project.color}-100/50 transition-all duration-700 ease-out`}></div>

                            <div className="flex items-center justify-between mb-6">
                                <div className={`w-14 h-14 rounded-2xl bg-${project.color}-50 flex items-center justify-center border border-${project.color}-100 group-hover:-translate-y-1 transition-transform duration-300`}>
                                    {project.icon}
                                </div>
                                <span className="text-xs font-bold tracking-wider uppercase text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
                                    {project.category.split(' ')[0]} {/* Takes just 'IT', 'XML', 'Digital' */}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-navy-900 mb-1 group-hover:text-orange-600 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-xs font-bold text-orange-600/70 mb-4 tracking-wide uppercase">
                                {project.client} • {project.year}
                            </p>

                            <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-sm">
                                {project.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <p className="text-sm font-semibold text-navy-800 flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                                    Impact: <span className="text-gray-600 font-normal ml-1">{project.impact}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Matrix for Projects */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-24 lg:mt-32 max-w-5xl mx-auto"
                >
                    <div className="relative rounded-3xl overflow-hidden bg-navy-900 border border-navy-800 shadow-2xl flex flex-col md:flex-row items-center justify-between p-10 lg:p-14">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPgo8L3N2Zz4=')] opacity-30"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent"></div>

                        <div className="relative z-10 md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
                            <h2 className="text-3xl font-extrabold text-white mb-4">Have a similar project in mind?</h2>
                            <p className="text-gray-300 text-lg">Let's discuss how our elite teams can architect and execute your next enterprise milestone.</p>
                        </div>

                        <div className="relative z-10 md:w-1/3 flex justify-center md:justify-end">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-navy-900 bg-white hover:bg-gray-50 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all group"
                            >
                                Start a Conversation
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
