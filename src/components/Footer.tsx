import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 flex items-center gap-2">
                            <span className="text-brand-orange">IBL</span> Baseball
                        </h2>
                        <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                            The premier professional baseball league of Indonesia. Power, precision, and pride since 2015.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-colors">
                                <span className="font-bold text-sm">IG</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-colors">
                                <span className="font-bold text-sm">X</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-colors">
                                <span className="font-bold text-sm">YT</span>
                            </a>
                        </div>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h3 className="text-sm text-brand-orange uppercase tracking-widest font-bold mb-6 font-mono">League</h3>
                        <ul className="space-y-4">
                            <li><Link href="/teams" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Franchises</Link></li>
                            <li><Link href="/schedule" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Schedule & Tickets</Link></li>
                            <li><Link href="/standings" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Standings</Link></li>
                            <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">News & Media</Link></li>
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h3 className="text-sm text-brand-orange uppercase tracking-widest font-bold mb-6 font-mono">Organization</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">About IBL</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Careers</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Partnerships</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div>
                        <h3 className="text-sm text-brand-orange uppercase tracking-widest font-bold mb-6 font-mono">Stay Updated</h3>
                        <p className="text-sm text-gray-400 mb-4 font-light">Get the latest scores, highlights, and news directly to your inbox.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full text-sm focus:outline-none focus:border-brand-orange transition-colors"
                            />
                            <button
                                type="button"
                                className="bg-brand-orange text-white px-4 py-2 rounded-r-lg text-sm font-bold uppercase tracking-widest hover:bg-orange-500 transition-colors border border-brand-orange"
                            >
                                Join
                            </button>
                        </form>
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                        &copy; {currentYear} Indonesia Baseball League. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
