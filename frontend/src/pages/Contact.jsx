import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        // EmailJS config from environment (Vite exposes vars as import.meta.env)
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const emailParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        try {
            // Send email (if configured) and persist to backend in parallel
            const emailPromise = (serviceId && templateId && publicKey)
                ? emailjs.send(serviceId, templateId, emailParams, publicKey)
                : Promise.resolve(null);

            const backendPromise = fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const [emailResult, backendResult] = await Promise.allSettled([emailPromise, backendPromise]);

            const backendOk = backendResult.status === 'fulfilled' && backendResult.value && backendResult.value.ok;
            const emailOk = emailResult.status === 'fulfilled' && emailResult.value !== null;

            if (backendOk || emailOk) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-white">
            <Helmet>
                <title>Contact Us | Aapthi Marketing Solutions</title>
                <meta name="description" content="Get in touch with Aapthi Marketing Solutions for enterprise IT projects and staffing." />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-navy-900 sm:text-5xl mb-4">Contact Us</h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600">
                        Let's discuss how we can empower your business with our tailored solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Information & Map */}
                    <div>
                        <div className="bg-navy-900 rounded-2xl p-8 text-white shadow-xl mb-8">
                            <h2 className="text-2xl font-bold mb-8">Our Locations</h2>

                            <div className="space-y-6">
                                {/* MAIN BRANCH */}
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-orange-400 mr-4 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1 flex items-center">
                                            Main Branch (Indore)
                                            <span className="ml-3 text-xs bg-orange-500/20 text-orange-300 border border-orange-400/30 px-2 py-0.5 rounded-full font-bold">HQ</span>
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-2">PR2W+2RH, Nai Duniya, Revenue Colony, <br />Indira Gandhi Nagar, Indore, Madhya Pradesh 452009</p>
                                        <a href="https://maps.app.goo.gl/JoUc5QzwKrm1hUNm8?g_st=aw" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm font-medium inline-flex items-center transition-colors">
                                            Get Directions &rarr;
                                        </a>
                                    </div>
                                </div>

                                {/* HYDERABAD BRANCH */}
                                <div className="flex items-start border-t border-navy-700/50 pt-6">
                                    <MapPin className="h-5 w-5 text-gray-400 mr-4 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-base mb-1 text-gray-200">Hyderabad Branch</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">3rd Floor, Image Hospitals Ln, Pratap Nagar,<br />Nagarjuna Nagar colony, Yella Reddy Guda, Telangana 500073</p>
                                    </div>
                                </div>

                                {/* NOIDA BRANCH */}
                                <div className="flex items-start pb-6 border-b border-navy-700/50">
                                    <MapPin className="h-5 w-5 text-gray-400 mr-4 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-base mb-1 text-gray-200">Noida Branch</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">Hotel white castle, Dadri Main Rd, Bhangel,<br />Sector 82, Noida, Uttar Pradesh 201304</p>
                                    </div>
                                </div>

                                <div className="flex items-center pt-2">
                                    <Mail className="h-6 w-6 text-orange-400 mr-4 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Official Email</h3>
                                        <p className="text-gray-300">hr@aapthisolutions.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Clock className="h-6 w-6 text-orange-400 mr-4 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                                        <p className="text-gray-300">Monday - Saturday <br /> 9:00 AM to 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed Placeholder */}
                        <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200 border border-gray-100 relative group">
                            <iframe
                                src="https://maps.google.com/maps?q=Nai%20Duniya,%20Revenue%20Colony,%20Indira%20Gandhi%20Nagar,%20Indore&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                                className="absolute inset-0 z-0"
                            ></iframe>
                            <div className="absolute inset-0 bg-navy-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-navy-900 mb-6">Send an Inquiry</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500 bg-white p-3 border"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500 bg-white p-3 border"
                                        placeholder="mobile number "
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500 bg-white p-3 border"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500 bg-white p-3 border"
                                    placeholder="Tell us about your project requirements..."
                                />
                            </div>

                            {status === 'success' && (
                                <div className="flex items-center text-green-700 bg-green-50 p-4 rounded-md border border-green-200">
                                    <CheckCircle className="w-5 h-5 mr-3 shrink-0" />
                                    <p>Inquiry sent successfully! Our team will contact you soon.</p>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="flex items-center text-red-700 bg-red-50 p-4 rounded-md border border-red-200">
                                    <AlertCircle className="w-5 h-5 mr-3 shrink-0" />
                                    <p>There was an error sending your message. Please try again or call us.</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-navy-800 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-colors disabled:bg-navy-400"
                            >
                                {status === 'sending' ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
