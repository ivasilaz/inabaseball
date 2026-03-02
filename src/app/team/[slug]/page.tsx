import { notFound } from "next/navigation";
import Image from "next/image";

export default function TeamDetailsPage({ params }: { params: { slug: string } }) {
    // Dummy Team Database
    const teamDatabase: Record<string, {
        name: string;
        city: string;
        established: number;
        color: string;
        short: string;
        stadium: string;
        manager: string;
        championships: number;
        logo: string;
        hero: string;
        roster: { id: number; name: string; position: string; number: number; avg: string; era: string }[];
    }> = {
        "jakarta-rhinos": {
            name: "Jakarta Rhinos", city: "Jakarta", established: 2015, color: "from-gray-800 to-black", short: "JKT", logo: "/images/teams/jakarta-rhinos-logo.png", hero: "/images/teams/jakarta-rhinos-hero.jpeg",
            stadium: "Gelora Bung Karno Baseball Field", manager: "Budi Santoso", championships: 3,
            roster: [
                { id: 1, name: "Andi Wijaya", position: "Pitcher", number: 45, avg: ".---", era: "2.14" },
                { id: 2, name: "Kevin Pratama", position: "Shortstop", number: 2, avg: ".315", era: "-.--" },
                { id: 3, name: "Reza Mahendra", position: "Center Fielder", number: 27, avg: ".298", era: "-.--" },
                { id: 4, name: "David Setiawan", position: "First Base", number: 10, avg: ".342", era: "-.--" },
                { id: 5, name: "Michael Tjahjadi", position: "Catcher", number: 9, avg: ".275", era: "-.--" },
            ]
        },
        "bali-waves": {
            name: "Bali Waves", city: "Denpasar", established: 2018, color: "from-blue-900 to-cyan-900", short: "BAL", logo: "/images/teams/bali-waves-logo.png", hero: "/images/teams/bali-waves-hero.png",
            stadium: "Nusa Dua Diamond", manager: "Wayan Sukadana", championships: 1,
            roster: [
                { id: 1, name: "Made Putra", position: "Pitcher", number: 99, avg: ".---", era: "3.05" },
                { id: 2, name: "Ketut Ardana", position: "Right Fielder", number: 24, avg: ".302", era: "-.--" },
                { id: 3, name: "Agus Sutanto", position: "Designated Hitter", number: 44, avg: ".355", era: "-.--" },
            ]
        },
        "surabaya-thunder": {
            name: "Surabaya Thunder", city: "Surabaya", established: 2016, color: "from-yellow-900 to-amber-900", short: "SBY", logo: "/images/teams/surabaya-thunder-logo.png", hero: "/images/teams/surabaya-thunder-hero.jpeg",
            stadium: "Bung Tomo Diamond", manager: "Hendro Siswanto", championships: 2,
            roster: []
        },
        "bandung-tigers": {
            name: "Bandung Tigers", city: "Bandung", established: 2015, color: "from-brand-orange/80 to-red-900", short: "BDO", logo: "/images/teams/bandung-tigers-logo.png", hero: "/images/teams/bandung-tigers-hero.jpeg",
            stadium: "Siliwangi Field", manager: "Asep Sunandar", championships: 1,
            roster: []
        },
        "medan-eagles": {
            name: "Medan Eagles", city: "Medan", established: 2019, color: "from-green-900 to-emerald-900", short: "KNO", logo: "/images/teams/medan-eagles-logo.png", hero: "/images/teams/medan-eagles-hero.jpeg",
            stadium: "Teladan Ballpark", manager: "Harus Nasution", championships: 0,
            roster: []
        },
        "yogyakarta-royals": {
            name: "Yogyakarta Royals", city: "Yogyakarta", established: 2020, color: "from-purple-900 to-fuchsia-900", short: "YOG", logo: "/images/teams/yogyakarta-royals-logo.png", hero: "/images/teams/yogyakarta-royals-hero.jpeg",
            stadium: "Mataram Field", manager: "Sultan Hamengku", championships: 0,
            roster: []
        }
    };

    const team = teamDatabase[params.slug];
    if (!team) notFound();

    return (
        <div className="min-h-screen bg-brand-black text-white pt-24 pb-24 relative overflow-hidden">
            {/* Team Header Hero */}
            <div className={`w-full h-[40vh] border-b border-white/10 bg-gradient-to-r ${team.color} relative flex items-end pb-12 px-6 overflow-hidden`}>
                <Image src={team.hero} alt={`${team.name} Full Banner`} fill className="object-cover opacity-50" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between">
                    <div className="flex items-end space-x-8">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-black/80 border-4 border-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 shadow-2xl relative overflow-hidden">
                            <Image src={team.logo} alt={`${team.name} Logo`} fill className="object-contain p-4" />
                        </div>
                        <div className="mb-2">
                            <div className="text-brand-orange font-mono tracking-widest uppercase font-bold text-sm md:text-base mb-2">
                                {team.city}
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-lg">
                                {team.name}
                            </h1>
                        </div>
                    </div>

                    <div className="hidden lg:flex space-x-12 mb-4 bg-black/40 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/10">
                        <div className="text-center">
                            <div className="text-3xl font-black text-brand-orange">{team.championships}</div>
                            <div className="text-xs uppercase font-mono tracking-widest text-gray-400">Titles</div>
                        </div>
                        <div className="text-center border-l border-white/10 pl-12">
                            <div className="text-3xl font-black">{team.established}</div>
                            <div className="text-xs uppercase font-mono tracking-widest text-gray-400">Founded</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Content: Roster */}
                <div className="lg:col-span-2">
                    <div className="flex justify-between items-end mb-8 border-b border-brand-orange/30 pb-4">
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Active Roster</h2>
                    </div>

                    {team.roster.length > 0 ? (
                        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-black/50 text-xs tracking-widest text-gray-400 uppercase border-b border-white/10">
                                        <th className="p-4 font-normal w-16 text-center">No.</th>
                                        <th className="p-4 font-normal">Player</th>
                                        <th className="p-4 font-normal">Position</th>
                                        <th className="p-4 font-normal text-right hidden md:table-cell">AVG</th>
                                        <th className="p-4 font-normal text-right hidden md:table-cell">ERA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {team.roster.map((player) => (
                                        <tr key={player.id} className="border-b border-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                                            <td className="p-4 font-mono text-center text-brand-orange font-bold text-lg">{player.number}</td>
                                            <td className="p-4 font-bold text-lg group-hover:text-brand-orange transition-colors">{player.name}</td>
                                            <td className="p-4 text-gray-400 font-mono text-sm uppercase">{player.position}</td>
                                            <td className="p-4 text-right font-mono text-gray-500 hidden md:table-cell">{player.avg}</td>
                                            <td className="p-4 text-right font-mono text-gray-500 hidden md:table-cell">{player.era}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="bg-white/5 border border-white/10 rounded-xl p-12 text-center text-gray-500 font-mono uppercase tracking-widest">
                            Roster Data Generating for {team.name}...
                        </div>
                    )}
                </div>

                {/* Sidebar: Info */}
                <div className="space-y-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                        <h3 className="text-xl font-bold uppercase tracking-widest border-b border-white/10 pb-4 mb-6">Franchise Info</h3>

                        <div className="space-y-6">
                            <div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Home Stadium</div>
                                <div className="font-bold text-lg">{team.stadium}</div>
                            </div>

                            <div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">General Manager</div>
                                <div className="font-bold text-lg">{team.manager}</div>
                            </div>

                            <div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Location</div>
                                <div className="font-bold text-lg">{team.city}, Indonesia</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-brand-orange to-red-600 rounded-xl p-8 text-center border border-white/20 shadow-2xl">
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Get Official Gear</h3>
                        <p className="text-white/80 text-sm mb-6">Support the {team.name} with official jerseys, caps, and merchandise.</p>
                        <button className="bg-white text-brand-orange uppercase tracking-widest font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors w-full">
                            Shop Store
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
