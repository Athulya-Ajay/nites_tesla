import ResultsSection from '../components/Sections/ResultsSection';
import Card from '../components/UI/Card';

const Results = () => {
    return (
        <div className="pt-20">
            <div className="bg-gray-900 text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Hall of Fame</h1>
                <p className="text-xl text-gray-400">Celebrating Excellence and Hard Work</p>
            </div>

            <ResultsSection />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">NEET 2025 Top Rankers</h2>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                        <table className="w-full text-left">
                            <thead className="bg-[var(--color-brand-primary)] text-white">
                                <tr>
                                    <th className="p-4">Rank</th>
                                    <th className="p-4">Student Name</th>
                                    <th className="p-4">Score</th>
                                    <th className="p-4">Course</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[...Array(10)].map((_, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="p-4 font-bold text-[var(--color-brand-primary)]">#{i + 1}</td>
                                        <td className="p-4 font-medium">Student Name {i + 1}</td>
                                        <td className="p-4">{720 - (i * 5)}/720</td>
                                        <td className="p-4">Two Year Classroom</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Results;
