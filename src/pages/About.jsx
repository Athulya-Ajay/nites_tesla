// import { motion } from 'framer-motion';
// import AboutSection from '../components/Sections/AboutSection';
// import Card from '../components/UI/Card';
// import { Target, Eye } from 'lucide-react';

// const About = () => {
//     return (
//         <div className="pt-20">
//             <div className="bg-gray-900 text-white py-20 text-center">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-4">About NITES Tesla</h1>
//                 <p className="text-xl text-gray-400">Building Careers, Shaping Futures</p>
//             </div>

//             <AboutSection />

//             <section className="py-20 bg-gray-50">
//                 <div className="container mx-auto px-4 md:px-6">
//                     <div className="grid md:grid-cols-2 gap-12">
//                         <motion.div
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                         >
//                             <Card className="p-8 h-full border-l-4 border-l-[var(--color-brand-primary)]">
//                                 <div className="flex items-center gap-4 mb-6">
//                                     <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[var(--color-brand-primary)]">
//                                         <Eye size={24} />
//                                     </div>
//                                     <h2 className="text-2xl font-bold">Our Vision</h2>
//                                 </div>
//                                 <p className="text-gray-600 leading-relaxed">
//                                     To be the most trusted and result-oriented coaching institute in India, providing world-class education and mentorship to aspiring medical and engineering professionals.
//                                 </p>
//                             </Card>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, x: 20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                         >
//                             <Card className="p-8 h-full border-l-4 border-l-[var(--color-brand-accent)]">
//                                 <div className="flex items-center gap-4 mb-6">
//                                     <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[var(--color-brand-accent)]">
//                                         <Target size={24} />
//                                     </div>
//                                     <h2 className="text-2xl font-bold">Our Mission</h2>
//                                 </div>
//                                 <p className="text-gray-600 leading-relaxed">
//                                     To empower students with conceptual clarity, problem-solving skills, and the right attitude to crack competitive exams like NEET, JEE, and KEAM.
//                                 </p>
//                             </Card>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-20">
//                 <div className="container mx-auto px-4 md:px-6 text-center">
//                     <h2 className="text-3xl font-bold mb-12">Meet Our Expert Faculty</h2>
//                     <div className="grid md:grid-cols-4 gap-8">
//                         {[1, 2, 3, 4].map((i) => (
//                             <Card key={i} className="p-4">
//                                 <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
//                                 <h3 className="text-lg font-bold">Faculty Name</h3>
//                                 <p className="text-sm text-[var(--color-brand-primary)]">Subject Expert</p>
//                                 <p className="text-xs text-gray-500 mt-2">10+ Years Exp.</p>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default About;
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import { Target } from 'lucide-react';

// Correct imports from src/assets folder
import faculty1 from '../assets/faculty1.jpg';
import faculty2 from '../assets/faculty2.jpg';
import faculty3 from '../assets/faculty3.jpg';
import faculty4 from '../assets/faculty4.jpg';

// Faculty data array
const facultyData = [
    { id: 1, name: "Dr. Arjun Menon", subject: "Physics", experience: "12+ Years Exp.", image: faculty3 },
    { id: 2, name: "Dr. Priya Nair", subject: "Chemistry", experience: "10+ Years Exp.", image: faculty2 },
    { id: 3, name: "Mr. Rahul Varma", subject: "Mathematics", experience: "15+ Years Exp.", image: faculty4 },
    { id: 4, name: "Dr. Sneha Pillai", subject: "Biology", experience: "11+ Years Exp.", image: faculty1 },
];

const About = () => {
    return (
        <div className="pt-20">

            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About NITES Tesla</h1>
                <p className="text-xl text-gray-400">Building Careers, Shaping Futures</p>
            </div>

            {/* Vision & Mission Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Vision */}
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <Card className="p-8 h-full border-l-4 border-l-[var(--color-brand-primary)]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[var(--color-brand-primary)]">
                                        {/* Eye Icon */}
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5C7.305 4.5 3.5 8.31 3.5 12S7.305 19.5 12 19.5 20.5 15.69 20.5 12 16.695 4.5 12 4.5z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold">Our Vision</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To be the most trusted and result-oriented coaching institute in India, providing world-class education and mentorship to aspiring medical and engineering professionals.
                                </p>
                            </Card>
                        </motion.div>

                        {/* Mission */}
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <Card className="p-8 h-full border-l-4 border-l-[var(--color-brand-accent)]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[var(--color-brand-accent)]">
                                        {/* Target Icon */}
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

            {/* Faculty Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Meet Our Expert Faculty</h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {facultyData.map((faculty) => (
                            <motion.div
                                key={faculty.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: faculty.id * 0.2 }}
                            >
                                <Card className="relative p-6 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden">

                                    {/* Faculty Image (circular, centered) */}
                                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border border-gray-300 shadow-sm">
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>

                                    {/* Faculty Details */}
                                    <h3 className="text-lg font-bold mb-1">{faculty.name}</h3>
                                    <span className="inline-block px-2 py-1 mt-1 text-xs font-semibold text-white bg-[var(--color-brand-accent)] rounded-full">
                                        {faculty.subject}
                                    </span>
                                    <p className="text-xs text-gray-500 mt-2">{faculty.experience}</p>

                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;
