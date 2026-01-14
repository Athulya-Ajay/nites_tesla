import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../UI/Button';
import clsx from 'clsx';
import teslogo from '../../assets/teslogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Results', path: '/results' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
                    : 'bg-white py-4'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img src = {teslogo}
                        alt="Logo"
                        className="h-10"
                    />
                    {/* <div className="w-10 h-10 bg-[var(--color-brand-primary)] rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
                        N
                    </div> */}
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] leading-none">
                            NITES Tesla
                        </span>
                        <span className="text-xs font-medium text-[var(--color-text-secondary)] tracking-wider">
                            ENTRANCE ACADEMY
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    'text-sm font-medium transition-colors hover:text-[var(--color-brand-primary)]',
                                    location.pathname === link.path
                                        ? 'text-[var(--color-brand-primary)]'
                                        : 'text-[var(--color-text-secondary)]'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="!px-4 !py-2 text-sm border-gray-300 text-gray-700 hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)]">
                            Log In
                        </Button>
                        <Button className="!px-4 !py-2 text-sm flex items-center gap-2">
                            <UserPlus size={16} />
                            Enroll Now
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={clsx(
                                        'text-base font-medium py-2 px-2 rounded-lg hover:bg-gray-50',
                                        location.pathname === link.path
                                            ? 'text-[var(--color-brand-primary)] bg-blue-50/50'
                                            : 'text-[var(--color-text-secondary)]'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-gray-100">
                                <Button variant="secondary" className="w-full justify-center">
                                    Student Login
                                </Button>
                                <Button className="w-full justify-center gap-2">
                                    <UserPlus size={18} />
                                    Enroll Now
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
