import { motion } from 'framer-motion';
import Button from '../UI/Button';
import { ChevronRight, Award, BookOpen, Users } from 'lucide-react';
import banner from '../../assets/banner.jpg';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-top-right" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-brand-accent)]/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[var(--color-brand-primary)] text-sm font-semibold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-primary)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-primary)]"></span>
                            </span>
                            Admissions Open for 2026–27
                        </div>

                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-[var(--color-text-primary)]">
                            Shaping Future <br />
                            <span className="text-[var(--color-brand-primary)]">Engineers</span> &{' '}
                            <span className="text-[var(--color-brand-accent)]">Doctors</span>
                        </h1>

                        <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-lg leading-relaxed">
                            Join NITES Tesla Entrance Academy for expert coaching in NEET, JEE, and KEAM.
                            Learn from experienced faculty with proven results and focused mentorship.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Button className="text-lg px-8 py-3 shadow-xl shadow-blue-200">
                                Enroll Now
                            </Button>
                            <Button
                                variant="outline"
                                className="text-lg px-8 py-3 !border-gray-300 !text-gray-700 hover:!border-[var(--color-brand-primary)] hover:!text-[var(--color-brand-primary)]"
                            >
                                Contact Us
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <Award className="text-[var(--color-brand-primary)]" size={20} />
                                <span>Top Ranks</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="text-[var(--color-brand-primary)]" size={20} />
                                <span>Expert Faculty</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen className="text-[var(--color-brand-primary)]" size={20} />
                                <span>Proven Material</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image / Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl">
                            <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                                {/* Academy Image */}
                                <img
                                    src={banner}
                                    alt="NITES Tesla Entrance Academy"
                                    className="w-full h-full object-cover"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                                {/* Floating Stats Card */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-xl p-5 shadow-lg flex justify-between text-center"
                                >
                                    <div>
                                        <p className="text-xs text-gray-500">Success Rate</p>
                                        <p className="text-xl font-bold text-gray-800">98%</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Selections</p>
                                        <p className="text-xl font-bold text-gray-800">500+</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Experience</p>
                                        <p className="text-xl font-bold text-gray-800">10+ Years</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative Dots */}
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 text-blue-200 opacity-50">
                            <svg width="100%" height="100%">
                                <pattern
                                    id="dots"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <circle cx="2" cy="2" r="2" fill="currentColor" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#dots)" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
