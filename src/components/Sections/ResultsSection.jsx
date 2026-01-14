import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp } from 'lucide-react';
import Card from '../UI/Card';

const stats = [
    { label: "Students Qualified", value: "5000+", icon: Users },
    { label: "Top 100 Ranks", value: "150+", icon: Star },
    { label: "Years of Excellence", value: "12+", icon: TrendingUp },
    { label: "Expert Faculty", value: "40+", icon: Trophy }, // Trophy as icon placeholder
];

// Re-import Users is needed if used
import { Users } from 'lucide-react';

const ResultsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[var(--color-brand-primary)] font-semibold tracking-wide uppercase text-sm mb-3">Our Achievements</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
                        Proven Track Record
                    </h3>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        Our results speak for our dedication. Year after year, NITES Tesla students secure top ranks in medical and engineering entrance exams.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 bg-[var(--color-brand-primary)] rounded-2xl p-8 md:p-12 text-white shadow-xl">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                            <div className="text-blue-100 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Success Stories / Rankers */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="text-center p-0 border-none shadow-lg overflow-hidden group">
                                <div className="h-64 bg-gray-200 relative overflow-hidden">
                                    {/* Placeholder for Student Image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                                        <Users size={64} />
                                    </div>
                                    <div className="absolute bottom-4 left-0 right-0 z-20 text-white p-4">
                                        <div className="inline-block bg-[var(--color-brand-accent)] px-3 py-1 rounded-full text-xs font-bold mb-2">
                                            AIR {idx * 15 + 45}
                                        </div>
                                        <h4 className="text-xl font-bold">John Antony</h4>
                                        <p className="text-sm opacity-90">NEET 2025</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;
