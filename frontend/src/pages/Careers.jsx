import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle, AlertCircle, Briefcase, MapPin, Clock, ArrowRight, FileText } from 'lucide-react';

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [name, setName] = useState('');
    const [resume, setResume] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null); // 'success', 'error', 'uploading'
    const [uploadMessage, setUploadMessage] = useState('');
    const [selectedJob, setSelectedJob] = useState('General Application');

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

    useEffect(() => {
        // Mocking data for now since backend might not be running during UI dev
        setTimeout(() => {
            setJobs([
                { id: 1, title: 'Senior React Developer', type: 'Full-time', location: 'Remote', department: 'Engineering', description: 'Looking for an experienced React developer to lead enterprise SaaS projects.' },
                { id: 2, title: 'IT Technical Recruiter', type: 'Contract', location: 'New York, NY', department: 'Human Resources', description: 'Experienced recruiter needed to source talent for our banking sector clients.' },
                { id: 3, title: 'XML Data Specialist', type: 'Full-time', location: 'Onsite', department: 'Data Operations', description: 'Detail-oriented professional specializing in high-volume XML data tagging.' }
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setUploadStatus('error');
                setUploadMessage('File size exceeds 5MB limit.');
                setResume(null);
            } else {
                setResume(file);
                setUploadStatus(null);
                setUploadMessage('');
            }
        }
    };

    const handleApplyClick = (jobTitle) => {
        setSelectedJob(jobTitle);
        document.getElementById('resume-upload-section').scrollIntoView({ behavior: 'smooth' });
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!name || !resume) {
            setUploadStatus('error');
            setUploadMessage('Please provide your name and attach a resume.');
            return;
        }

        setUploadStatus('uploading');
        setUploadMessage('');

        const formData = new FormData();
        formData.append('name', name);
        formData.append('position', selectedJob);
        formData.append('resume', resume);

        try {
            const response = await fetch('http://localhost:5000/api/careers/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setUploadStatus('success');
                setUploadMessage('Resume uploaded successfully! HR will review it shortly.');
                setName('');
                setResume(null);
                setSelectedJob('General Application');
                document.getElementById('file-upload').value = '';
            } else {
                const errorData = await response.json();
                setUploadStatus('error');
                setUploadMessage(errorData.error || 'Failed to upload resume.');
            }
        } catch (error) {
            console.warn("Backend not running, simulating upload success");
            setTimeout(() => {
                setUploadStatus('success');
                setUploadMessage('Application submitted successfully! (Simulated)');
                setName('');
                setResume(null);
                setSelectedJob('General Application');
                document.getElementById('file-upload').value = '';
            }, 1500);
        }
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50 relative overflow-hidden flex flex-col">
            <Helmet>
                <title>Careers | Aapthi Marketing Solutions</title>
                <meta name="description" content="Join Aapthi Marketing Solutions. Explore open IT and non-voice positions or submit your resume." />
            </Helmet>

            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-x-1/2"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCA0MEwwIDAiIHN0cm9rZT0icmdiYSgwLCAwLCAxMjgsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz4KPHBhdGggZD0iTTAgNDBMNDAgNDAiIHN0cm9rZT0icmdiYSgwLCAwLCAxMjgsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)] opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-20 mt-8"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-navy-200 bg-white/50 backdrop-blur-sm shadow-sm">
                        <span className="text-navy-600 text-sm font-bold tracking-widest uppercase">Careers at Aapthi</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6">Shape the Future of <span className="text-orange-600">Enterprise Tech</span></h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-600 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed font-medium">
                        Join an elite team engineering resilient architectures, managing high-performance IT resources, and driving critical corporate operations globally.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Job Listings Column */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                            <h2 className="text-3xl font-extrabold text-navy-900 flex items-center gap-3">
                                <Briefcase className="w-8 h-8 text-orange-600" />
                                Open Positions
                            </h2>
                            <span className="bg-orange-100 text-orange-800 text-sm font-bold px-3 py-1 rounded-full">{jobs.length} roles</span>
                        </div>

                        {loading ? (
                            <div className="space-y-6">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="animate-pulse bg-white h-40 rounded-3xl shadow-sm border border-gray-100 p-8"></div>
                                ))}
                            </div>
                        ) : jobs.length > 0 ? (
                            jobs.map((job) => (
                                <motion.div
                                    variants={fadeInUp}
                                    key={job.id}
                                    className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-orange-100 transition-all duration-500 relative overflow-hidden"
                                >
                                    {/* Hover gradient effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                                            <div>
                                                <span className="text-xs font-bold tracking-wider uppercase text-orange-600 mb-2 block">{job.department}</span>
                                                <h3 className="text-2xl font-bold text-navy-900 group-hover:text-orange-600 transition-colors">{job.title}</h3>
                                            </div>
                                            <button
                                                onClick={() => handleApplyClick(job.title)}
                                                className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-navy-200 rounded-lg text-sm font-bold text-navy-700 bg-white hover:bg-navy-50 hover:border-navy-300 transition-colors shrink-0"
                                            >
                                                Apply Now
                                            </button>
                                        </div>

                                        <div className="flex flex-wrap gap-4 mb-6">
                                            <div className="flex items-center text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                                                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                                {job.type}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                                                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                                {job.location}
                                            </div>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed max-w-2xl">{job.description}</p>

                                        <button
                                            onClick={() => handleApplyClick(job.title)}
                                            className="mt-6 sm:hidden w-full inline-flex items-center justify-center px-4 py-2 border border-navy-200 rounded-lg text-sm font-bold text-navy-700 bg-white hover:bg-navy-50 transition-colors"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center text-gray-500">
                                <Briefcase className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                                <h3 className="text-xl font-bold text-navy-900 mb-2">No specific openings right now</h3>
                                <p>We are always on the lookout for top talent. Submit a general application below.</p>
                            </div>
                        )}

                        <motion.div variants={fadeInUp} className="mt-12 bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl shadow-lg border border-navy-700 p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-400/30">
                                        <FileText className="w-5 h-5 text-orange-400" />
                                    </span>
                                    Graduate Internship Program
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    We continually look for bright graduates eager to learn and grow in IT Development, Data Operations, and HR domains. Launch your enterprise career with Aapthi.
                                </p>
                                <button
                                    onClick={() => handleApplyClick('Internship Program')}
                                    className="text-orange-400 font-bold hover:text-orange-300 flex items-center transition-colors group"
                                >
                                    Apply for Internship <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Application Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5"
                        id="resume-upload-section"
                    >
                        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 lg:p-10 sticky top-32">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-extrabold text-navy-900 mb-2">Submit Your Profile</h2>
                                <p className="text-gray-500 text-sm">Join the ranks of premium tech professionals.</p>
                            </div>

                            <form onSubmit={handleUpload} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Applying For</label>
                                    <select
                                        value={selectedJob}
                                        onChange={(e) => setSelectedJob(e.target.value)}
                                        className="block w-full rounded-xl border-gray-200 bg-gray-50/50 p-3.5 text-gray-700 focus:border-orange-500 focus:ring-orange-500 focus:bg-white transition-colors"
                                    >
                                        <option value="General Application">General Application</option>
                                        <option value="Internship Program">Internship Program</option>
                                        {jobs.map(job => (
                                            <option key={job.id} value={job.title}>{job.title}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Jane Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="block w-full rounded-xl border-gray-200 bg-gray-50/50 p-3.5 placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 focus:bg-white transition-colors border"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center justify-between">
                                        <span>Resume Document</span>
                                        <span className="text-xs font-normal text-gray-400">PDF/DOC, Max 5MB</span>
                                    </label>
                                    <div
                                        className={`mt-1 flex justify-center px-6 pt-8 pb-8 border-2 border-dashed rounded-2xl transition-all duration-200 cursor-pointer ${resume ? 'border-orange-500 bg-orange-50/30' : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400'}`}
                                        onClick={() => document.getElementById('file-upload').click()}
                                    >
                                        <div className="space-y-2 text-center">
                                            {resume ? (
                                                <div className="flex flex-col items-center">
                                                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-3">
                                                        <CheckCircle className="w-6 h-6" />
                                                    </div>
                                                    <span className="text-sm font-bold text-navy-800">{resume.name}</span>
                                                    <span className="text-xs text-gray-500 mt-1">{(resume.size / 1024 / 1024).toFixed(2)} MB - Click to change</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="w-14 h-14 bg-white border border-gray-200 text-gray-400 shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                        <Upload className="h-6 w-6" />
                                                    </div>
                                                    <div className="flex text-sm text-gray-600 justify-center">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer bg-transparent rounded-md font-bold text-orange-600 hover:text-orange-500 focus-within:outline-none"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                                                        </label>
                                                        <span className="pl-1">or drag and drop</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {uploadStatus === 'error' && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex items-center text-red-600 text-sm bg-red-50 p-4 rounded-xl border border-red-100">
                                            <AlertCircle className="w-5 h-5 mr-3 shrink-0" /> {uploadMessage}
                                        </motion.div>
                                    )}

                                    {uploadStatus === 'success' && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex items-center text-green-700 text-sm bg-green-50 p-4 rounded-xl border border-green-100">
                                            <CheckCircle className="w-5 h-5 mr-3 shrink-0" /> {uploadMessage}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={uploadStatus === 'uploading'}
                                    className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-navy-900 hover:bg-navy-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center">
                                        {uploadStatus === 'uploading' ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application
                                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>

                            <div className="mt-6 text-center text-sm font-medium text-gray-500">
                                Need help? Email <a href="mailto:hr@aapthimarketing.com" className="text-orange-600 hover:underline">hr@aapthimarketing.com</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
