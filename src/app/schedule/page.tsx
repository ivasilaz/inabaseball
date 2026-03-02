export default function SchedulePage() {
    const scheduleData = [
        {
            date: "March 5, 2026",
            games: [
                { id: 1, time: "15:00 WIB", home: "Jakarta Rhinos", away: "Surabaya Thunder", venue: "Gelora Bung Karno", status: "Upcoming", homeScore: "-", awayScore: "-" },
                { id: 2, time: "19:00 WIB", home: "Bali Waves", away: "Bandung Tigers", venue: "Nusa Dua Diamond", status: "Upcoming", homeScore: "-", awayScore: "-" }
            ]
        },
        {
            date: "March 8, 2026",
            games: [
                { id: 3, time: "14:30 WIB", home: "Yogyakarta Royals", away: "Medan Eagles", venue: "Mataram Field", status: "Upcoming", homeScore: "-", awayScore: "-" },
                { id: 4, time: "18:45 WIB", home: "Bandung Tigers", away: "Jakarta Rhinos", venue: "Siliwangi Field", status: "Upcoming", homeScore: "-", awayScore: "-" }
            ]
        },
        {
            date: "March 1, 2026",
            games: [
                { id: 5, time: "16:00 WIB", home: "Jakarta Rhinos", away: "Bali Waves", venue: "Gelora Bung Karno", status: "Final", homeScore: "5", awayScore: "3" },
                { id: 6, time: "20:00 WIB", home: "Surabaya Thunder", away: "Yogyakarta Royals", venue: "Bung Tomo Diamond", status: "Final", homeScore: "7", awayScore: "2" }
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <div className="container mx-auto max-w-5xl">
                <header className="mb-16 text-center">
                    <div className="text-sm text-brand-orange uppercase tracking-widest font-bold mb-4 font-mono">Season 2026</div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
                        League <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">Schedule</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-light mx-auto max-w-2xl">
                        Don&apos;t miss a pitch. Full regular season schedule, match times, and locations.
                    </p>
                </header>

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <button className="px-6 py-2 rounded-full border border-brand-orange bg-brand-orange text-white text-sm uppercase tracking-widest font-bold">All Matches</button>
                    <button className="px-6 py-2 rounded-full border border-white/20 text-gray-400 hover:text-white text-sm uppercase tracking-widest font-bold hover:border-white/50 transition-colors">Upcoming</button>
                    <button className="px-6 py-2 rounded-full border border-white/20 text-gray-400 hover:text-white text-sm uppercase tracking-widest font-bold hover:border-white/50 transition-colors">Results</button>
                </div>

                <div className="space-y-16">
                    {scheduleData.map((day, idx) => (
                        <div key={idx} className="relative">
                            {/* Date Header */}
                            <div className="sticky top-20 z-10 bg-brand-black/90 backdrop-blur-md py-4 border-b border-brand-orange/30 mb-6 flex justify-between items-end">
                                <h2 className="text-2xl font-black uppercase tracking-widest text-brand-orange">
                                    {day.date}
                                </h2>
                            </div>

                            {/* Games List */}
                            <div className="space-y-4">
                                {day.games.map((game) => (
                                    <div key={game.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-white/30 transition-colors flex flex-col md:flex-row items-center justify-between gap-6 group">

                                        {/* Time & Venue */}
                                        <div className="flex-shrink-0 text-center md:text-left md:w-48">
                                            <div className="text-xl font-mono text-white font-bold">{game.time}</div>
                                            <div className="text-xs tracking-widest text-gray-500 uppercase mt-1">{game.venue}</div>
                                            <div className={`mt-3 text-xs tracking-widest uppercase font-bold px-2 py-1 rounded inline-block ${game.status === 'Live' ? 'bg-red-500 text-white' : game.status === 'Final' ? 'bg-white/10 text-gray-300' : 'bg-brand-orange/20 text-brand-orange'}`}>
                                                {game.status}
                                            </div>
                                        </div>

                                        {/* Teams */}
                                        <div className="flex-1 flex flex-col w-full px-4">
                                            <div className="flex justify-between items-center py-2 border-b border-white/5 mb-2">
                                                <div className="text-lg md:text-xl font-bold">{game.away}</div>
                                                <div className={`text-2xl font-black font-mono ${game.awayScore > game.homeScore ? 'text-brand-orange' : 'text-gray-400'}`}>{game.awayScore}</div>
                                            </div>
                                            <div className="flex justify-between items-center py-2">
                                                <div className="text-lg md:text-xl font-bold">{game.home} <span className="text-xs text-gray-500 ml-2 tracking-widest">(Home)</span></div>
                                                <div className={`text-2xl font-black font-mono ${game.homeScore > game.awayScore ? 'text-brand-orange' : 'text-gray-400'}`}>{game.homeScore}</div>
                                            </div>
                                        </div>

                                        {/* Call to Action */}
                                        <div className="flex-shrink-0 w-full md:w-auto">
                                            {game.status === 'Upcoming' ? (
                                                <button className="w-full md:w-auto block text-center px-8 py-4 bg-white/10 hover:bg-brand-orange hover:text-white border border-white/20 rounded-xl text-sm font-bold uppercase tracking-widest transition-all">
                                                    Tickets
                                                </button>
                                            ) : (
                                                <button className="w-full md:w-auto block text-center px-8 py-4 bg-transparent hover:bg-white/5 text-gray-400 border border-white/10 rounded-xl text-sm font-bold uppercase tracking-widest transition-all">
                                                    Box Score
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
