import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Rahul Krishnan",
        role: "MBBS Student, Govt. Medical College",
        text: "The faculty at NITES Tesla are incredible. They cleared my doubts instantly and the test series helped me improve my time management. Highly recommended!",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "Anjali Menon",
        role: "IIT Madras, Computer Science",
        text: "The simplified teaching methods for Physics and Maths made tough concepts easy to understand. I owe my JEE Advanced rank to this academy.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        name: "Dr. Suresh Kumar",
        role: "Parent",
        text: "Discipline and individual attention are the key highlights of NITES Tesla. They kept us informed about our son's progress regularly.",
        image: "https://randomuser.me/api/portraits/men/64.jpg"
    }
];

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-primary)] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[var(--color-brand-accent)] font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        What Parents & Students Say
                    </h3>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl relative"
                        >
                            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-[var(--color-brand-primary)] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                                <Quote size={32} className="text-white fill-current" />
                            </div>

                            <p className="text-lg md:text-xl text-gray-300 italic mb-8 leading-relaxed">
                                "{testimonials[current].text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonials[current].image}
                                    alt={testimonials[current].name}
                                    className="w-14 h-14 rounded-full border-2 border-[var(--color-brand-primary)]"
                                />
                                <div>
                                    <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                                    <p className="text-sm text-[var(--color-brand-primary)]">{testimonials[current].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full bg-gray-800 hover:bg-[var(--color-brand-primary)] flex items-center justify-center transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full bg-gray-800 hover:bg-[var(--color-brand-primary)] flex items-center justify-center transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
