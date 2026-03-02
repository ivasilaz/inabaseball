import Image from "next/image";

export default function StandingsPage() {
    const standings = [
        { rank: 1, id: "jakarta-rhinos", team: "Jakarta Rhinos", w: 12, l: 3, pct: ".800", gb: "-", home: "7-1", away: "5-2", strk: "W4", l10: "8-2", icon: "JKT" },
        { rank: 2, id: "bandung-tigers", team: "Bandung Tigers", w: 10, l: 5, pct: ".667", gb: "2.0", home: "6-2", away: "4-3", strk: "W1", l10: "6-4", icon: "BDO" },
        { rank: 3, id: "surabaya-thunder", team: "Surabaya Thunder", w: 9, l: 6, pct: ".600", gb: "3.0", home: "5-2", away: "4-4", strk: "L1", l10: "5-5", icon: "SBY" },
        { rank: 4, id: "bali-waves", team: "Bali Waves", w: 8, l: 7, pct: ".533", gb: "4.0", home: "4-3", away: "4-4", strk: "W2", l10: "6-4", icon: "BAL" },
        { rank: 5, id: "medan-eagles", team: "Medan Eagles", w: 7, l: 8, pct: ".467", gb: "5.0", home: "4-4", away: "3-4", strk: "L3", l10: "3-7", icon: "KNO" },
        { rank: 6, id: "yogyakarta-royals", team: "Yogyakarta Royals", w: 4, l: 11, pct: ".267", gb: "8.0", home: "2-6", away: "2-5", strk: "L5", l10: "2-8", icon: "YOG" },
    ];

    return (
        <div className="min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <header className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6 border-b border-brand-orange/30 pb-8">
                    <div>
                        <div className="text-sm text-brand-orange uppercase tracking-widest font-bold mb-4 font-mono">Season 2026 Table</div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-2">
                            League <span className="text-brand-orange">Standings</span>
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-lg text-sm uppercase tracking-widest font-bold">East Div</button>
                        <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-lg text-sm uppercase tracking-widest font-bold">West Div</button>
                    </div>
                </header>

                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead>
                            <tr className="bg-black/80 text-xs tracking-widest text-brand-orange uppercase border-b border-white/10">
                                <th className="px-6 py-5 font-bold w-16">Pos</th>
                                <th className="px-6 py-5 font-bold text-left">Franchise</th>
                                <th className="px-6 py-5 font-mono text-center">W</th>
                                <th className="px-6 py-5 font-mono text-center">L</th>
                                <th className="px-6 py-5 font-mono text-right font-bold text-white">PCT</th>
                                <th className="px-6 py-5 font-mono text-right">GB</th>
                                <th className="px-6 py-5 font-mono text-center text-gray-500 hidden md:table-cell">Home</th>
                                <th className="px-6 py-5 font-mono text-center text-gray-500 hidden md:table-cell">Away</th>
                                <th className="px-6 py-5 font-mono text-center hidden lg:table-cell">STRK</th>
                                <th className="px-6 py-5 font-mono text-center text-gray-500 hidden lg:table-cell">L10</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standings.map((team, idx) => (
                                <tr key={team.team} className={`border-b border-white/5 hover:bg-white/10 transition-colors group cursor-pointer ${idx < 4 ? 'bg-white/[0.02]' : ''}`}>
                                    <td className="px-6 py-5 font-mono text-lg font-bold text-gray-400 group-hover:text-white transition-colors">{team.rank}</td>
                                    <td className="px-6 py-5 font-bold text-lg flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center relative overflow-hidden">
                                            <Image src={`/images/teams/${team.id}-logo.png`} alt={team.team} fill className="object-contain p-1" />
                                        </div>
                                        {team.team}
                                    </td>
                                    <td className="px-6 py-5 font-mono text-center text-xl">{team.w}</td>
                                    <td className="px-6 py-5 font-mono text-center text-xl">{team.l}</td>
                                    <td className="px-6 py-5 font-mono text-right text-brand-orange font-bold text-xl">{team.pct}</td>
                                    <td className="px-6 py-5 font-mono text-right text-gray-400">{team.gb}</td>
                                    <td className="px-6 py-5 font-mono text-center text-gray-500 hidden md:table-cell">{team.home}</td>
                                    <td className="px-6 py-5 font-mono text-center text-gray-500 hidden md:table-cell">{team.away}</td>
                                    <td className={`px-6 py-5 font-mono text-center font-bold hidden lg:table-cell ${team.strk.startsWith('W') ? 'text-green-500' : 'text-red-500'}`}>{team.strk}</td>
                                    <td className="px-6 py-5 font-mono text-center text-gray-500 hidden lg:table-cell">{team.l10}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="bg-black/50 p-4 border-t border-white/10 text-xs tracking-widest uppercase font-mono text-gray-500 flex justify-between">
                        <span>* Top 4 teams qualify for playoffs</span>
                        <span>Last Updated: Mar 4, 2026</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
