import Link from "next/link";
import Image from "next/image";

export default function HomeSections() {
    const latestScores = [
        { id: 1, teamA: "Jakarta Rhinos", teamB: "Bali Waves", scoreA: 5, scoreB: 3, date: "Mar 1, 2026" },
        { id: 2, teamA: "Surabaya Thunder", teamB: "Bandung Tigers", scoreA: 2, scoreB: 4, date: "Feb 28, 2026" },
        { id: 3, teamA: "Medan Eagles", teamB: "Yogyakarta Royals", scoreA: 6, scoreB: 6, date: "Feb 27, 2026" },
    ];

    const upcomingMatches = [
        { id: 1, teamA: "Bali Waves", teamB: "Bandung Tigers", date: "Mar 5, 2026", time: "19:00 WIB" },
        { id: 2, teamA: "Jakarta Rhinos", teamB: "Surabaya Thunder", date: "Mar 6, 2026", time: "15:00 WIB" },
    ];

    const standings = [
        { rank: 1, team: "Jakarta Rhinos", w: 12, l: 3, pct: ".800" },
        { rank: 2, team: "Bandung Tigers", w: 10, l: 5, pct: ".667" },
        { rank: 3, team: "Surabaya Thunder", w: 9, l: 6, pct: ".600" },
        { rank: 4, team: "Bali Waves", w: 8, l: 7, pct: ".533" },
        { rank: 5, team: "Medan Eagles", w: 7, l: 8, pct: ".467" },
    ];

    const news = [
        { id: "rhinos-clinch-playoff", title: "Rhinos Clinch Playoff Spot in Thriller", category: "League", date: "Mar 2, 2026", image: "/images/news/rhinos-clinch-playoff.jpeg" },
        { id: "rookie-sensation-no-hitter", title: "Rookie Sensation: Waves Pitcher Throws No-Hitter", category: "Players", date: "Feb 29, 2026", image: "/images/news/rookie-sensation-no-hitter.jpeg" },
        { id: "all-star-rosters-announced", title: "All-Star Game Rosters Announced", category: "Events", date: "Feb 25, 2026", image: "/images/news/all-star-rosters-announced.jpeg" },
    ];

    return (
        <div className="bg-brand-black text-white relative z-10 pt-20">
            {/* Section 1: Headline */}
            <section className="relative pb-24 px-6 container mx-auto text-center border-b border-white/10">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-2xl">
                    Indonesia League <span className="text-brand-orange">Baseball</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-3xl text-gray-400 font-light tracking-widest mb-12 uppercase">
                    Power. Precision. Pride.
                </p>
                <Link
                    href="/schedule"
                    className="inline-block bg-brand-orange text-white text-lg font-bold tracking-wider uppercase px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(255,106,0,0.6)]"
                >
                    View Schedule
                </Link>
            </section>

            {/* Section 2: Latest Scores */}
            <section className="py-24 px-6 container mx-auto">
                <div className="flex justify-between items-end mb-12 border-b border-brand-orange/30 pb-4">
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-brand-orange">Latest Scores</h2>
                    <Link href="/schedule" className="text-sm tracking-widest uppercase hover:text-brand-orange transition-colors">Full Results &rarr;</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestScores.map((match) => (
                        <div key={match.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                            <div className="text-xs text-brand-orange mb-4 font-mono tracking-widest uppercase">{match.date}</div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-lg">{match.teamA}</span>
                                <span className={`text-2xl font-black ${match.scoreA > match.scoreB ? "text-brand-orange" : "text-white"}`}>{match.scoreA}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">{match.teamB}</span>
                                <span className={`text-2xl font-black ${match.scoreB > match.scoreA ? "text-brand-orange" : "text-white"}`}>{match.scoreB}</span>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10 text-center text-sm font-semibold tracking-wider text-gray-400 group-hover:text-brand-orange transition-colors cursor-pointer">
                                Match Details
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3 & 4: Upcoming Matches & Standings Container */}
            <section className="py-24 bg-gradient-to-b from-brand-black to-[#111]">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Upcoming Matches */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold uppercase tracking-widest text-brand-orange mb-12 border-b border-brand-orange/30 pb-4">Upcoming Matches</h2>
                        <div className="space-y-6">
                            {upcomingMatches.map((match) => (
                                <div key={match.id} className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-orange/50 transition-colors">
                                    <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                                        <div className="text-sm text-brand-orange font-mono tracking-widest uppercase mb-1">{match.date} &bull; {match.time}</div>
                                        <div className="text-2xl font-bold">{match.teamA} <span className="text-gray-500 font-light mx-2">vs</span> {match.teamB}</div>
                                    </div>
                                    <Link href={`/schedule/${match.id}`} className="px-6 py-2 border border-brand-orange text-brand-orange uppercase tracking-widest text-sm font-bold rounded-full hover:bg-brand-orange hover:text-white transition-all">
                                        Tickets
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Standings */}
                    <div>
                        <div className="flex justify-between items-end mb-12 border-b border-brand-orange/30 pb-4">
                            <h2 className="text-3xl font-bold uppercase tracking-widest text-brand-orange">Standings</h2>
                            <Link href="/standings" className="text-sm tracking-widest uppercase hover:text-brand-orange transition-colors">Full &rarr;</Link>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden overflow-x-auto">
                            <div className="min-w-[400px]">
                                <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-black/50 text-xs tracking-widest text-brand-orange uppercase border-b border-white/10">
                                        <th className="p-4 font-normal">Pos</th>
                                        <th className="p-4 font-normal">Team</th>
                                        <th className="p-4 font-normal text-center">W-L</th>
                                        <th className="p-4 font-normal text-right">Pct</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {standings.map((team, idx) => (
                                        <tr key={team.team} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${idx < 3 ? 'text-white' : 'text-gray-400'}`}>
                                            <td className="p-4 font-mono">{team.rank}</td>
                                            <td className="p-4 font-bold">{team.team}</td>
                                            <td className="p-4 text-center font-mono">{team.w}-{team.l}</td>
                                            <td className="p-4 text-right font-mono">{team.pct}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Latest News */}
            <section className="py-24 px-6 container mx-auto">
                <div className="flex justify-between items-end mb-12 border-b border-brand-orange/30 pb-4">
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-brand-orange">Latest News</h2>
                    <Link href="/news" className="text-sm tracking-widest uppercase hover:text-brand-orange transition-colors">All News &rarr;</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <Link href={`/news/${item.id}`} key={item.id} className="group block">
                            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col hover:border-brand-orange/50 transition-colors">
                                {/* News Image Placeholder */}
                                <div className="h-48 bg-gradient-to-tr from-brand-orange/20 to-black relative overflow-hidden">
                                    {item.image && (
                                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute bottom-4 left-4 bg-brand-orange text-white text-xs uppercase font-bold tracking-widest px-3 py-1 rounded z-10">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="text-sm text-gray-500 font-mono tracking-widest uppercase mt-4">
                                        {item.date}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
