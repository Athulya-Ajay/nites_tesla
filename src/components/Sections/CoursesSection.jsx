import { motion } from 'framer-motion';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { Book, Clock, Calendar, CheckCircle } from 'lucide-react';

const courses = [
    {
        title: "NEET Coaching",
        type: "Medical",
        duration: "2 Years",
        features: ["Deep Concept Coverage", "Daily Worksheets", "Botany & Zoology Special", "NCERT Focus"],
        color: "bg-green-50 text-green-600"
    },
    {
        title: "JEE Main & Adv",
        type: "Engineering",
        duration: "2 Years",
        features: ["Advanced Problem Solving", "Previous Year Papers", "Maths Shorts & Tricks", "All India Test Series"],
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "KEAM Reformer",
        type: "Engineering",
        duration: "1 Year",
        features: ["State Syllabus Focus", "Speed Enhancement", "Rank Booster Tests", "Detailed Analysis"],
        color: "bg-purple-50 text-purple-600"
    },
    {
        title: "Crash Course",
        type: "Short Term",
        duration: "2 Months",
        features: ["Fast Track Revision", "Important Topics", "Mock Tests", "Doubt Clearance"],
        color: "bg-orange-50 text-orange-600"
    }
];

const CoursesSection = () => {
    return (
        <section className="py-20 bg-[var(--color-bg-light)]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-[var(--color-brand-primary)] font-semibold tracking-wide uppercase text-sm mb-3">Our Programs</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
                            Courses Designed for Success
                        </h3>
                    </div>
                    <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white">
                        View All Courses
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full flex flex-col relative group">
                                <div className={`absolute top-0 left-0 w-full h-1 ${course.color.split(' ')[0].replace('bg-', 'bg-')}`}></div>

                                <div className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold mb-4 ${course.color}`}>
                                    {course.type}
                                </div>

                                <h4 className="text-xl font-bold mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">
                                    {course.title}
                                </h4>

                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                                    <Clock size={16} />
                                    <span>{course.duration}</span>
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {course.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-600">
                                            <CheckCircle size={16} className="text-[var(--color-brand-accent)] mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="w-full justify-center">Know More</Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
