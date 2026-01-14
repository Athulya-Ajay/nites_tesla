import CoursesSection from '../components/Sections/CoursesSection';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Courses = () => {
    // Reusing the section because it already lists courses well. 
    // In a real app, I might map more detailed data here.
    return (
        <div className="pt-20">
            <div className="bg-[var(--color-bg-light)] py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-primary)]">Our Programs</h1>
                <p className="text-xl text-[var(--color-text-secondary)]">Comprehensive Coaching for NEET, JEE & Foundation</p>
            </div>

            <CoursesSection />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-[var(--color-brand-primary)] rounded-2xl p-8 md:p-16 text-center text-white">
                        <h2 className="text-3xl font-bold mb-6">Not sure which course is right for you?</h2>
                        <p className="text-lg mb-8 opacity-90">Talk to our academic counselors for a free profile evaluation and roadmap.</p>
                        <Button className="bg-white text-[var(--color-brand-primary)] hover:bg-gray-100">
                            Book Counseling Session
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
