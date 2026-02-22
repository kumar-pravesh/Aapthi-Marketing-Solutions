import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Awards', path: '/awards' },
        { name: 'Careers', path: '/careers' },
        { name: 'Clients', path: '/clients' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-sm py-0 border-b border-gray-100'
                : 'bg-white/70 backdrop-blur-sm py-2'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0 flex items-center"
                    >
                        <Link to="/" className="flex items-center group py-2">
                            <Logo className="w-auto h-12 md:h-14 transition-transform group-hover:scale-105 duration-300" />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-1 lg:space-x-4">
                        {navLinks.map((link, i) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-colors ${isActive ? 'text-navy-800' : 'text-gray-600 hover:text-navy-600'
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy-800 rounded-full"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:flex items-center"
                    >
                        <Link
                            to="/contact"
                            className="relative overflow-hidden group bg-navy-800 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Contact Us
                            </span>
                            <div className="absolute inset-0 h-full w-full bg-navy-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300" />
                        </Link>
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-navy-800 focus:outline-none p-2"
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                        <X className="h-7 w-7" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                        <Menu className="h-7 w-7" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${location.pathname === link.path
                                            ? 'bg-navy-50 text-navy-800'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                                <Link
                                    to="/contact"
                                    className="block w-full text-center mt-6 bg-navy-800 text-white px-4 py-4 rounded-xl font-bold shadow-md active:scale-95 transition-transform"
                                >
                                    Get In Touch
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
