import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
    // We assume images are copied to /assets/services/ in the public directory
    const servicesList = [
        {
            id: 'staffing',
            image: '/assets/services/it_staffing_service.png',
            title: 'IT Staffing Solutions',
            description: 'Acquire highly skilled IT professionals tailored to your precise technological stacks and corporate culture.',
            features: ['Contract Staffing', 'Permanent Hiring', 'Onsite & Remote Deployment', 'Executive Search'],
        },
        {
            id: 'development',
            image: '/assets/services/web_development_service.png',
            title: 'Website Designing & Development',
            description: 'Engaging, fast, and secure digital platforms architected to elevate your brand presence and user conversions.',
            features: ['Corporate Websites', 'E-commerce Platforms', 'Custom Web Applications', 'UI/UX Revamps'],
        },
        {
            id: 'xml',
            image: '/assets/services/data_processing_service.png',
            title: 'XML & Non-Voice Projects',
            description: 'Seamless back-office transitions with guaranteed SLA adherence for intensive data operations.',
            features: ['Data Conversion & Structuring', 'Backend Processing', 'Data Entry & Validation', 'Precision XML Tagging'],
        },
        {
            id: 'partnerships',
            image: '/assets/services/enterprise_partnership_service.png',
            title: 'Subscription / Partner Projects',
            description: 'Scalable multi-client execution models designed for enduring enterprise collaborations.',
            features: ['Ongoing Enterprise Collaborations', 'SLA-driven Delivery', 'Dedicated Project Management', 'B2B Integrations'],
        },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const imageReveal = {
        hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
            <Helmet>
                <title>Premium IT Services | Aapthi Marketing Solutions</title>
                <meta name="description" content="Discover our enterprise IT staffing, elite web development, and secure data processing services." />
            </Helmet>

            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-20 mt-8"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-navy-200 bg-white/50 backdrop-blur-sm shadow-sm">
                        <span className="text-navy-600 text-sm font-bold tracking-widest uppercase">Expertise</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">Our Premium <span className="text-orange-600">Services</span></h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-600 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed font-medium">
                        Tailored enterprise solutions engineered to accelerate your growth, optimize your workforce, and elevate your digital operational efficiency.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {servicesList.map((service, index) => (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            key={service.id}
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <motion.div variants={imageReveal} className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/3] flex items-center justify-center border border-gray-100">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/5 to-transparent z-10 mix-blend-overlay"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                        }}
                                    />
                                </motion.div>

                                {/* Decorative elements behind image */}
                                <div className={`absolute -inset-4 bg-gradient-to-r ${index % 2 === 0 ? 'from-orange-100 to-orange-50' : 'from-orange-50 to-orange-100'} rounded-[2rem] -z-10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            </div>

                            {/* Content Side */}
                            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col justify-center">
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 mb-6 tracking-tight leading-tight">{service.title}</h2>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center text-gray-800 font-semibold bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100/50 hover:border-orange-100 hover:shadow-md transition-all">
                                            <div className="w-2 h-2 rounded-full bg-orange-600 mr-3 flex-shrink-0"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <Link
                                        to={`/contact?service=${service.id}`}
                                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-navy-800 hover:bg-orange-600 hover:shadow-lg active:scale-95 transition-all group"
                                    >
                                        Inquire Now
                                        <span className="ml-2 transition-transform group-hover:translate-x-1">Ã¢â€ â€™</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
