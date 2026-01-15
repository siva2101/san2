import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="max-w-xl w-full text-center space-y-8">
                {/* Architectural Graphic (Simple SVG) */}
                <div className="flex justify-center">
                    <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-sansRed"
                    >
                        {/* The Base & Tower */}
                        <path d="M10 21h4" />
                        <path d="M11 21V3h2v18" />
                        <path d="M11 7v0" />
                        <path d="M11 11h2" />
                        <path d="M11 15h2" />

                        {/* The Jib (Arm) */}
                        <path d="M2 5h20v2H2z" fill="currentColor" fillOpacity="0.1" />
                        <path d="M2 5h20" />
                        <path d="M2 7h20" />

                        {/* The Hook & Trolley */}
                        <path d="M18 7v8" strokeDasharray="2 1" />
                        <path d="M17 15h2" />
                        <path d="M18 15l-1.5 2h3z" fill="currentColor" />

                        {/* Ground */}
                        <path d="M3 21h18" />
                    </svg>
                </div>

                <div className="space-y-4">
                    <h1 className="text-6xl md:text-8xl font-bold text-sansGray">404</h1>
                    <h2 className="text-2xl md:text-4xl font-heading text-sansGray">Watch your head!</h2>
                    <div className="h-1 w-20 bg-sansRed mx-auto"></div>
                </div>

                <div className="space-y-6">
                    <p className="text-lg text-sansGray/60 font-light leading-relaxed">
                        This part of the site has been leveled for redevelopment.
                    </p>

                    <div className="pt-4">
                        <Link
                            href="/"
                            className="inline-block px-10 py-4 bg-sansRed text-white font-medium rounded-full hover:bg-sansGray transition-all duration-300 shadow-xl shadow-sansRed/20"
                        >
                            Return to Home
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
