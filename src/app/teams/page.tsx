import Link from "next/link";
import Image from "next/image";

export default function TeamsPage() {
    const teams = [
        { id: "jakarta-rhinos", name: "Jakarta Rhinos", city: "Jakarta", established: 2015, color: "from-gray-800 to-black", short: "JKT", logo: "/images/teams/jakarta-rhinos-logo.png", hero: "/images/teams/jakarta-rhinos-hero.jpeg" },
        { id: "bali-waves", name: "Bali Waves", city: "Denpasar", established: 2018, color: "from-blue-900 to-cyan-900", short: "BAL", logo: "/images/teams/bali-waves-logo.png", hero: "/images/teams/bali-waves-hero.png" },
        { id: "surabaya-thunder", name: "Surabaya Thunder", city: "Surabaya", established: 2016, color: "from-yellow-900 to-amber-900", short: "SBY", logo: "/images/teams/surabaya-thunder-logo.png", hero: "/images/teams/surabaya-thunder-hero.jpeg" },
        { id: "bandung-tigers", name: "Bandung Tigers", city: "Bandung", established: 2015, color: "from-brand-orange/80 to-red-900", short: "BDO", logo: "/images/teams/bandung-tigers-logo.png", hero: "/images/teams/bandung-tigers-hero.jpeg" },
        { id: "medan-eagles", name: "Medan Eagles", city: "Medan", established: 2019, color: "from-green-900 to-emerald-900", short: "KNO", logo: "/images/teams/medan-eagles-logo.png", hero: "/images/teams/medan-eagles-hero.jpeg" },
        { id: "yogyakarta-royals", name: "Yogyakarta Royals", city: "Yogyakarta", established: 2020, color: "from-purple-900 to-fuchsia-900", short: "YOG", logo: "/images/teams/yogyakarta-royals-logo.png", hero: "/images/teams/yogyakarta-royals-hero.jpeg" },
    ];

    return (
        <div className="min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto">
                <header className="mb-20 text-center md:text-left">
                    <div className="text-sm text-brand-orange uppercase tracking-widest font-bold mb-4 font-mono">League Franchise</div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
                        Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">Teams</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-light max-w-2xl">
                        Discover the powerhouse franchises competing for ultimate glory in the Indonesia Baseball League.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teams.map((team) => (
                        <Link href={`/team/${team.id}`} key={team.id} className="group block">
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-orange/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,106,0,0.3)] h-full flex flex-col">

                                {/* Team Hero Image / Gradient Placeholder */}
                                <div className={`h-48 bg-gradient-to-br ${team.color} relative overflow-hidden flex items-center justify-center`}>
                                    {team.hero && (
                                        <Image src={team.hero} alt={`${team.name} background`} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                    <span className="text-9xl font-black text-white/10 absolute -bottom-8 -right-4 italic">{team.short}</span>
                                    <div className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 overflow-hidden shadow-2xl bg-black/50">
                                        {team.logo ? (
                                            <Image src={team.logo} alt={`${team.name} logo`} fill className="object-contain p-2" />
                                        ) : (
                                            <span className="text-3xl font-black tracking-tighter">{team.short}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/50">
                                    <div>
                                        <h2 className="text-3xl font-black uppercase tracking-tight mb-2 group-hover:text-brand-orange transition-colors">
                                            {team.name}
                                        </h2>
                                        <div className="flex items-center text-gray-400 text-sm font-mono tracking-widest uppercase mb-6">
                                            <svg className="w-4 h-4 mr-2 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {team.city}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center border-t border-white/10 pt-6 mt-6">
                                        <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                                            Est. {team.established}
                                        </div>
                                        <div className="text-sm font-bold text-brand-orange uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                            View Roster &rarr;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
