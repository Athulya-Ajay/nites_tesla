import { motion } from 'framer-motion';
import AboutSection from '../components/Sections/AboutSection';
import Card from '../components/UI/Card';
import { Target, Eye } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20">
            <div className="bg-gray-900 text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About NITES Tesla</h1>
                <p className="text-xl text-gray-400">Building Careers, Shaping Futures</p>
            </div>

            <AboutSection />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 h-full border-l-4 border-l-[var(--color-brand-primary)]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[var(--color-brand-primary)]">
                                        <Eye size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold">Our Vision</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To be the most trusted and result-oriented coaching institute in India, providing world-class education and mentorship to aspiring medical and engineering professionals.
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 h-full border-l-4 border-l-[var(--color-brand-accent)]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[var(--color-brand-accent)]">
                                        <Target size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold">Our Mission</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To empower students with conceptual clarity, problem-solving skills, and the right attitude to crack competitive exams like NEET, JEE, and KEAM.
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Meet Our Expert Faculty</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <Card key={i} className="p-4">
                                <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
                                <h3 className="text-lg font-bold">Faculty Name</h3>
                                <p className="text-sm text-[var(--color-brand-primary)]">Subject Expert</p>
                                <p className="text-xs text-gray-500 mt-2">10+ Years Exp.</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
