import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../UI/Button';
import logo from '../../assets/logo_white.png';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="NITES Tesla Entrance Academy"
                                className="h-21 object-contain"
                            />
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering students to achieve their dreams in Engineering and Medical fields through disciplined coaching and personalized mentorship.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[var(--color-brand-primary)] hover:text-white transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[var(--color-brand-primary)]">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Courses', path: '/courses' },
                                { name: 'Faculty', path: '/about' },
                                { name: 'Testimonials', path: '/results' },
                                { name: 'Contact Us', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 bg-[var(--color-brand-primary)] rounded-full"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[var(--color-brand-primary)]">Our Courses</h3>
                        <ul className="space-y-3">
                            {[
                                'NEET Coaching',
                                'JEE Main & Advanced',
                                'KEAM Preparation',
                                'Foundation (Class 8-10)',
                                'Crash Courses',
                            ].map((course) => (
                                <li key={course}>
                                    <Link
                                        to="/courses"
                                        className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 bg-[var(--color-brand-primary)] rounded-full"></span>
                                        {course}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[var(--color-brand-primary)]">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="min-w-5 text-[var(--color-brand-primary)] mt-0.5" />
                                <span>
                                    <p>
                                        NITES Tesla Entrance Academy<br />
                                        Main Campus, 2nd Floor, City Center,<br />
                                        Trivandrum, Kerala - 695001
                                    </p>
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={18} className="text-[var(--color-brand-primary)]" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={18} className="text-[var(--color-brand-primary)]" />
                                <span>info@nitestesla.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Clock size={18} className="text-[var(--color-brand-primary)]" />
                                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        © {currentYear} NITES Tesla Entrance Academy. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
                        <Link to="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
                        <Link to="#" className="text-gray-500 hover:text-white text-xs transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
