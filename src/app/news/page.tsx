import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {
    const categories = ["All", "League", "Players", "Events", "Analysis"];

    const newsList = [
        {
            id: "rhinos-clinch-playoff",
            title: "Rhinos Clinch Playoff Spot in Thriller Against Waves",
            excerpt: "In a dramatic 9th inning comeback, the Jakarta Rhinos secured their post-season berth with a walk-off home run by David Setiawan.",
            category: "League",
            date: "Mar 2, 2026",
            readTime: "4 min read",
            author: "Hendra Baskoro",
            featured: true,
            image: "/images/news/rhinos-clinch-playoff.jpeg"
        },
        {
            id: "rookie-sensation-no-hitter",
            title: "Rookie Sensation: Waves Pitcher Throws No-Hitter",
            excerpt: "Made Putra stunned the baseball world by throwing the season's first no-hitter against the Thunder.",
            category: "Players",
            date: "Feb 29, 2026",
            readTime: "6 min read",
            author: "Rina Kusuma",
            featured: false,
            image: "/images/news/rookie-sensation-no-hitter.jpeg"
        },
        {
            id: "all-star-rosters-announced",
            title: "All-Star Game Rosters Announced",
            excerpt: "The league office has released the final rosters for the upcoming Midsummer Classic in Bandung.",
            category: "Events",
            date: "Feb 25, 2026",
            readTime: "3 min read",
            author: "IBL Press",
            featured: false,
            image: "/images/news/all-star-rosters-announced.jpeg"
        },
        {
            id: "tigers-new-stadium-plans",
            title: "Bandung Tigers Unveil Plans for New 40,000 Seat Ballpark",
            excerpt: "The historic franchise looks to the future with a state-of-the-art facility featuring a retractable roof.",
            category: "League",
            date: "Feb 20, 2026",
            readTime: "5 min read",
            author: "Hendra Baskoro",
            featured: false,
            image: "/images/news/tigers-new-stadium-plans.jpeg"
        },
        {
            id: "midseason-analysis",
            title: "Midseason Report: Who's Hot and Who's Not",
            excerpt: "A deep dive into the analytics behind the surprising rise of the Bandung Tigers and the struggles of the Royals.",
            category: "Analysis",
            date: "Feb 15, 2026",
            readTime: "8 min read",
            author: "Dimas Anggara",
            featured: false,
            image: "/images/news/midseason-analysis.jpeg"
        }
    ];

    const featuredArticle = newsList.find(n => n.featured);
    const regularArticles = newsList.filter(n => !n.featured);

    return (
        <div className="min-h-screen bg-brand-black text-white pt-32 pb-24 px-6 relative overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <div className="container mx-auto max-w-7xl">
                <header className="mb-12">
                    <div className="text-sm text-brand-orange uppercase tracking-widest font-bold mb-4 font-mono">IBL Media Desk</div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-brand-orange">News</span>
                    </h1>
                </header>

                {/* Categories Navbar */}
                <div className="flex overflow-x-auto pb-4 mb-12 border-b border-white/10 gap-8 scrollbar-hide">
                    {categories.map((cat, idx) => (
                        <button
                            key={cat}
                            className={`text-sm uppercase tracking-widest font-bold whitespace-nowrap pb-4 border-b-2 transition-colors ${idx === 0 ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-500 hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Article */}
                {featuredArticle && (
                    <Link href={`/news/${featuredArticle.id}`} className="block mb-16 group">
                        <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex flex-col md:flex-row group-hover:border-brand-orange/50 transition-all duration-500">

                            <div className="md:w-3/5 h-[400px] md:h-auto bg-gradient-to-tr from-gray-900 to-brand-orange/20 relative overflow-hidden flex-shrink-0">
                                {featuredArticle.image && (
                                    <Image src={featuredArticle.image} alt={featuredArticle.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                )}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                                <div className="absolute top-6 left-6 px-4 py-1 bg-brand-orange text-white text-xs uppercase tracking-widest font-bold rounded">
                                    {featuredArticle.category}
                                </div>
                            </div>

                            <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center text-xs text-gray-400 font-mono uppercase tracking-widest mb-6 gap-4">
                                    <span>{featuredArticle.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-brand-orange" />
                                    <span>{featuredArticle.readTime}</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 group-hover:text-brand-orange transition-colors leading-none">
                                    {featuredArticle.title}
                                </h2>

                                <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-1">
                                    {featuredArticle.excerpt}
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10" />
                                    <div className="text-sm font-bold uppercase tracking-widest">{featuredArticle.author}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularArticles.map((article) => (
                        <Link href={`/news/${article.id}`} key={article.id} className="group block h-full">
                            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col hover:border-brand-orange/50 hover:transform hover:-translate-y-2 transition-all duration-300">
                                <div className="h-56 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center justify-center">
                                    {article.image && (
                                        <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-white text-[10px] uppercase font-bold tracking-widest rounded border border-white/10">
                                        {article.category}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center text-[10px] text-brand-orange font-mono uppercase tracking-widest mb-4">
                                        {article.date} &bull; {article.readTime}
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-brand-orange transition-colors line-clamp-3 leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <div className="mt-auto border-t border-white/10 pt-6 text-xs text-gray-400 font-bold tracking-widest uppercase flex justify-between items-center">
                                        <span>By {article.author}</span>
                                        <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-transparent border border-brand-orange text-brand-orange uppercase tracking-widest font-bold text-sm rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                        Load More Stories
                    </button>
                </div>
            </div>
        </div>
    );
}
