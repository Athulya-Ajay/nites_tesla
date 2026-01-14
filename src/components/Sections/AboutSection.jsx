import { motion } from 'framer-motion';
import Button from '../UI/Button';
import { Target, Lightbulb, Users } from 'lucide-react';
import Card from '../UI/Card';

const AboutSection = () => {
    const features = [
        {
            icon: Target,
            title: "Result Oriented",
            desc: "Our curriculum is strictly focused on securing high ranks in entrance exams."
        },
        {
            icon: Lightbulb,
            title: "Concept Clarity",
            desc: "We focus on building strong fundamentals rather than just rote learning."
        },
        {
            icon: Users,
            title: "Personal Mentorship",
            desc: "Individual attention to every student to track progress and clear doubts."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[var(--color-brand-primary)] font-semibold tracking-wide uppercase text-sm mb-3">About Us</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
                        Excellence in Entrance Coaching
                    </h3>
                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                        NITES Tesla Entrance Academy is committed to transforming students into future professionals.
                        With years of experience and a team of dedicated faculty, we provide the best environment for cracking tough competitive exams.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full border-t-4 border-t-[var(--color-brand-primary)] text-center p-8">
                                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-[var(--color-brand-primary)] mb-6">
                                    <feature.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                                <p className="text-gray-600">{feature.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
