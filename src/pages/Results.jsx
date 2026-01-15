import ResultsSection from '../components/Sections/ResultsSection';

const neetRankers = [
    { rank: 1, name: "Arjun Krishnan", score: "720 / 720", course: "Two Year Classroom" },
    { rank: 2, name: "Ananya Menon", score: "715 / 720", course: "Two Year Classroom" },
    { rank: 3, name: "Rahul Suresh", score: "710 / 720", course: "One Year Repeater" },
    { rank: 4, name: "Sneha Pillai", score: "705 / 720", course: "Two Year Classroom" },
    { rank: 5, name: "Vishnu Narayanan", score: "700 / 720", course: "One Year Repeater" },
    { rank: 6, name: "Meera Nandakumar", score: "695 / 720", course: "Two Year Classroom" },
    { rank: 7, name: "Abhinav Raj", score: "690 / 720", course: "Crash Course" },
    { rank: 8, name: "Lakshmi Priya", score: "685 / 720", course: "Two Year Classroom" },
    { rank: 9, name: "Karthik Ramesh", score: "680 / 720", course: "One Year Repeater" },
    { rank: 10, name: "Athira Mohan", score: "675 / 720", course: "Crash Course" },
];

const Results = () => {
    return (
        <div className="pt-20">

            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Our Hall of Fame
                </h1>
                <p className="text-xl text-gray-400">
                    Celebrating Excellence and Hard Work
                </p>
            </div>

            {/* Stats + Ranker Cards */}
            <ResultsSection />

            {/* NEET Rankers Table */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        NEET 2025 Top Rankers
                    </h2>

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
                                {neetRankers.map((student) => (
                                    <tr
                                        key={student.rank}
                                        className="hover:bg-gray-50 transition"
                                    >
                                        <td className="p-4 font-bold text-[var(--color-brand-primary)]">
                                            #{student.rank}
                                        </td>
                                        <td className="p-4 font-medium">
                                            {student.name}
                                        </td>
                                        <td className="p-4">
                                            {student.score}
                                        </td>
                                        <td className="p-4">
                                            {student.course}
                                        </td>
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
