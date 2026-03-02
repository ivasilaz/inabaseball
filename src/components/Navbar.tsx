"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Teams", path: "/teams" },
        { name: "Schedule", path: "/schedule" },
        { name: "Standings", path: "/standings" },
        { name: "News", path: "/news" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg opacity-100 translate-y-0" : "bg-black/70 backdrop-blur-sm py-6 opacity-100"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold tracking-wider uppercase">
                    INA<span className="text-brand-orange">Baseball</span>
                </Link>

                <ul className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.path}
                                className={`text-sm tracking-widest uppercase font-semibold relative group ${pathname === link.path ? "text-brand-orange" : "text-white hover:text-brand-orange transition-colors"
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-0 w-full h-[2px] bg-brand-orange transition-transform origin-left ${pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                        }`}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:block border-l border-white/20 pl-6 ml-4">
                    {session ? (
                        <div className="flex items-center gap-4 group">
                            <div className="flex flex-col items-end">
                                <span className="text-xs font-bold text-white uppercase tracking-widest">{session.user?.name}</span>
                                <button onClick={() => signOut()} className="text-[10px] text-gray-400 hover:text-brand-orange uppercase tracking-widest transition-colors font-mono">Sign Out</button>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-brand-orange overflow-hidden relative">
                                {session.user?.image ? (
                                    <Image src={session.user.image} alt="Profile" fill className="object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-brand-orange" />
                                )}
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => signIn('google')}
                            className="text-sm font-bold uppercase tracking-widest px-6 py-2 bg-white/10 hover:bg-brand-orange hover:text-white border border-white/20 rounded-full transition-all"
                        >
                            Sign In
                        </button>
                    )}
                </div>

                {/* Mobile Menu (simplified) */}
                <div className="md:hidden flex items-center gap-4">
                    {session ? (
                        <div className="w-8 h-8 rounded-full border border-brand-orange overflow-hidden relative" onClick={() => signOut()}>
                            {session.user?.image && <Image src={session.user.image} alt="Profile" fill className="object-cover" />}
                        </div>
                    ) : (
                        <button onClick={() => signIn('google')} className="text-xs uppercase font-bold text-brand-orange">Sign In</button>
                    )}
                    <button className="text-white focus:outline-none ml-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
