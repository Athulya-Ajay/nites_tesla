import { motion } from 'framer-motion';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="bg-gray-900 text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-gray-400">We'd love to hear from you</p>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[var(--color-brand-primary)] shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-gray-600">
                                        NITES Tesla Entrance Academy<br />
                                        Main Campus, 2nd Floor, City Center,<br />
                                        Trivandrum, Kerala - 695001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[var(--color-brand-primary)] shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[var(--color-brand-primary)] shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <p className="text-gray-600">admissions@nitestesla.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15785.493976214373!2d76.942735!3d8.48937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8 lg:p-12">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent outline-none transition-shadow" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent outline-none transition-shadow" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent outline-none transition-shadow" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent outline-none transition-shadow" placeholder="+91 9876543210" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent outline-none transition-shadow" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button className="w-full flex items-center justify-center gap-2 py-4 text-lg">
                                Send Message <Send size={18} />
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
