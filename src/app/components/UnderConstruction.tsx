import Link from 'next/link';

export default function UnderConstruction() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-xl w-full text-center space-y-8">
                {/* Under Construction Graphic */}
                <div className="flex justify-center relative">
                    <div className="absolute inset-0 bg-sansRed/5 rounded-full blur-3xl scale-150 -z-10"></div>
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-sansRed animate-pulse"
                    >
                        <path d="M12 2L2 22h20L12 2z" />
                        <path d="M12 11v4" />
                        <path d="M12 18h.01" />
                    </svg>
                </div>

                <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-sansRed font-bold">Under Construction</p>
                    <h2 className="text-4xl md:text-5xl font-heading text-sansGray italic">Drafting the details.</h2>
                    <div className="h-1 w-16 bg-sansRed mx-auto"></div>
                </div>

                <div className="space-y-6">
                    <p className="text-lg text-sansGray/60 font-light leading-relaxed">
                        We're meticulously
                        refining the narrative to better reflect our architectural journey.
                    </p>

                    <div className="pt-4">
                        <Link
                            href="/"
                            className="inline-block px-8 py-3 bg-sansGray text-white text-sm font-medium uppercase tracking-widest hover:bg-sansRed transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>

                {/* Construction Tape Effect */}
                <div className="flex justify-center gap-4 overflow-hidden py-4 opacity-20 select-none pointer-events-none">

                    <span className="text-[12px] font-bold uppercase whitespace-nowrap">
                        Design in Progress /// Sanskriti Architects
                    </span>

                </div>
            </div>
        </div>
    );
}
