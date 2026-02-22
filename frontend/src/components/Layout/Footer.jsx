import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-navy-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center mb-6">
                            <Logo
                                className="w-auto h-14 md:h-16 transition-transform hover:scale-105 duration-300"
                                dark={true}
                            />

                        </Link>
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                            Empowering Businesses with Smart IT & Workforce Solutions. We deliver premium IT staffing, digital development, and non-voice projects globally.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors text-sm">Services</Link></li>
                            <li><Link to="/projects" className="hover:text-white transition-colors text-sm">Projects</Link></li>
                            <li><Link to="/awards" className="hover:text-white transition-colors text-sm">Awards & Recognitions</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors text-sm">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Our Services</h3>
                        <ul className="space-y-2">
                            <li><Link to="/services" className="hover:text-white transition-colors text-sm">IT Staffing Solutions</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors text-sm">Website Development</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors text-sm">XML & Non-Voice Projects</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors text-sm">Enterprise Partnerships</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">PR2W+2RH, Nai Duniya, Revenue Colony, Indore, MP 452009</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                                <span className="text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                                <span className="text-sm">hr@aapthisolutions.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Aapthi Marketing Solutions Pvt Ltd. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
