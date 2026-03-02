import Image from "next/image";

export default function NewsDetailsPage({ params }: { params: { slug: string } }) {
    // Simple slug to title converter for dummy data
    const formatSlugToTitle = (s: string) => {
        return s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="min-h-screen bg-brand-black text-white pt-32 pb-24 relative overflow-hidden">

            {/* Article Header */}
            <div className="container mx-auto max-w-4xl px-6 mb-16 relative z-10">
                <a href="/news" className="text-brand-orange text-xs font-bold font-mono tracking-widest uppercase mb-8 inline-block hover:text-white transition-colors">
                    &larr; Back to News
                </a>

                <div className="flex gap-4 mb-6">
                    <span className="px-3 py-1 bg-white/10 border border-white/20 rounded text-xs uppercase tracking-widest font-bold text-brand-orange">League</span>
                    <span className="text-xs uppercase tracking-widest font-mono text-gray-500 align-bottom pt-1.5">Mar 2, 2026 &bull; 4 Min Read</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                    {formatSlugToTitle(params.slug)}
                </h1>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[50vh] bg-gradient-to-r from-gray-900 via-brand-orange/20 to-black relative mb-16 border-y border-white/10 overflow-hidden">
                <Image src={`/images/news/${params.slug}.jpeg`} alt={formatSlugToTitle(params.slug)} fill className="object-cover opacity-70 hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/40 to-black/20" />
                <div className="absolute bottom-4 right-8 font-mono text-[10px] uppercase tracking-widest text-white/50">
                    IBL Media / Photo Desk
                </div>
            </div>

            {/* Content Body */}
            <div className="container mx-auto max-w-3xl px-6">
                <article className="prose prose-invert prose-lg md:prose-xl max-w-none font-light text-gray-300 leading-relaxed">
                    <p className="text-xl md:text-2xl font-normal text-white mb-10 leading-snug">
                        <span className="text-5xl font-black text-brand-orange float-left mr-4 mt-2 uppercase">I</span>
                        n a dramatic 9th inning comeback, the Jakarta Rhinos secured their post-season berth with a walk-off home run, sending the Gelora Bung Karno crowd into a frenzy.
                    </p>

                    <p className="mb-8">
                        The game had been a tight pitcher&apos;s duel for the first eight innings. Bali Waves starter Made Putra was dealing, allowing only three hits while striking out nine. However, baseball is a game of inches and late-inning execution.
                    </p>

                    <h2 className="text-3xl font-black uppercase tracking-tight text-white mt-16 mb-6">The Turning Point</h2>

                    <p className="mb-8">
                        Entering the bottom of the ninth down 3-2, the Rhinos managed to load the bases against the Waves&apos; exhausted bullpen. With two outs and the season on the line, stepping up to the plate was none other than David Setiawan, the team&apos;s reliable first baseman.
                    </p>

                    <blockquote className="border-l-4 border-brand-orange pl-6 py-2 my-12 text-2xl font-bold uppercase tracking-tight text-white bg-white/5 pr-6 rounded-r-lg">
                        &quot;I just focused on seeing the ball deep and trying to put a good swing on it. The crowd was deafening, but you have to block that out.&quot;
                        <footer className="text-sm text-brand-orange font-mono tracking-widest mt-4">
                            - David Setiawan, Post-game Interview
                        </footer>
                    </blockquote>

                    <p className="mb-8">
                        On a 2-1 count, Setiawan crushed a hanging breaking ball deep into the left-field bleachers, a no-doubter that etched his name into franchise history. The 5-3 victory guarantees the Rhinos a top-two seed entering the October playoffs.
                    </p>

                    <div className="w-full h-px bg-white/10 my-16" />

                    {/* Author Block */}
                    <div className="flex items-center gap-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                        <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center font-black text-2xl uppercase">H</div>
                        <div>
                            <div className="text-xs uppercase tracking-widest text-brand-orange mb-1 font-bold">Author</div>
                            <div className="text-xl font-bold uppercase tracking-tight mb-2">Hendra Baskoro</div>
                            <div className="text-sm text-gray-400 font-mono">Senior Correspondent, IBL Media</div>
                        </div>
                    </div>

                </article>
            </div>
        </div>
    );
}
