import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp, Users } from 'lucide-react';
import Card from '../UI/Card';


// Ranker images
import ranker1 from '../../assets/ranker1.jpg';
import ranker2 from '../../assets/ranker2.jpg';
import ranker3 from '../../assets/ranker3.jpg';

const stats = [
    { label: "Students Qualified", value: "5000+" },
    { label: "Top 100 Ranks", value: "150+" },
    { label: "Years of Excellence", value: "12+" },
    { label: "Expert Faculty", value: "40+" },
];

const rankers = [
    {
        id: 1,
        name: "Arjun Krishnan",
        exam: "NEET 2025",
        rank: "AIR 48",
        image: ranker1,
    },
    {
        id: 2,
        name: "Ananya Menon",
        exam: "JEE Advanced 2025",
        rank: "AIR 72",
        image: ranker3,
    },
    {
        id: 3,
        name: "Rahul Suresh",
        exam: "KEAM 2025",
        rank: "State Rank 12",
        image: ranker2,
    },
];

const ResultsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[var(--color-brand-primary)] font-semibold tracking-wide uppercase text-sm mb-3">
                        Our Achievements
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        Proven Track Record
                    </h3>
                    <p className="text-lg text-gray-600">
                        Our results speak for our dedication. Year after year, NITES Tesla students secure top ranks.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 bg-[var(--color-brand-primary)] rounded-2xl p-8 md:p-12 text-white shadow-xl">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-blue-100 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rankers */}
                <div className="grid md:grid-cols-3 gap-8">
                    {rankers.map((ranker, idx) => (
                        <motion.div
                            key={ranker.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <Card className="p-0 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                                
                                {/* Image */}
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={ranker.image}
                                        alt={ranker.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 p-6 text-white text-left">
                                        <span className="inline-block bg-[var(--color-brand-accent)] px-3 py-1 rounded-full text-xs font-bold mb-2">
                                            {ranker.rank}
                                        </span>
                                        <h4 className="text-xl font-bold">
                                            {ranker.name}
                                        </h4>
                                        <p className="text-sm opacity-90">
                                            {ranker.exam}
                                        </p>
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
