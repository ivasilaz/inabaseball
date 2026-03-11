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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Teams", path: "/teams" },
        { name: "Schedule", path: "/schedule" },
        { name: "Standings", path: "/standings" },
        { name: "News", path: "/news" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? "bg-black/95 backdrop-blur-md py-4 shadow-lg" : "bg-black/70 backdrop-blur-sm py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold tracking-wider uppercase z-50">
                    INA<span className="text-brand-orange">Baseball</span>
                </Link>

                {/* Desktop Menu */}
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

                {/* Mobile Menu Trigger */}
                <div className="md:hidden flex items-center z-50">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none p-2"
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-black transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                        }`}
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`text-2xl tracking-[0.2em] uppercase font-black transition-colors ${pathname === link.path ? "text-brand-orange" : "text-white hover:text-brand-orange"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-8 border-t border-white/10 w-full flex flex-col items-center gap-6">
                            {session ? (
                                <>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full border-2 border-brand-orange overflow-hidden relative">
                                            {session.user?.image ? (
                                                <Image src={session.user.image} alt="Profile" fill className="object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-brand-orange" />
                                            )}
                                        </div>
                                        <span className="text-white font-bold tracking-widest uppercase">{session.user?.name}</span>
                                    </div>
                                    <button
                                        onClick={() => signOut()}
                                        className="text-gray-400 hover:text-brand-orange text-sm uppercase tracking-[0.3em] font-mono transition-colors"
                                    >
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => signIn('google')}
                                    className="w-full max-w-xs py-4 border border-brand-orange text-brand-orange uppercase tracking-[0.2em] font-bold rounded-full hover:bg-brand-orange hover:text-white transition-all"
                                >
                                    Sign In
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
