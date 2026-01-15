import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-sansGray border-t border-sansGray/10 py-8 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-sansGray/40">
          {/* Contact & Copyright Info */}
          <div className="text-center md:text-left space-y-1.5">
            <p className="text-sansGray/60 ">
              Sanskriti Architects, Labour Corner, Eroor, Tripunithura, Kerala. 682 306
            </p>
            <p className="text-sansGray/60 ">
              +91 484 277 6569 | info@sanskritiarchitects.in
            </p>
            <p className="">
              &copy; {currentYear} Sanskriti Architects
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <Link href="/about" className="no-underline hover:text-sansRed transition-colors">About</Link>
              <Link href="/projects" className="no-underline hover:text-sansRed transition-colors">Projects</Link>
              <Link href="/contact" className="no-underline hover:text-sansRed transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-5 border-t border-sansGray/10 md:border-0 pt-4 md:pt-0">
              <a href="#" className="hover:text-sansRed transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-sansRed transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="hover:text-sansRed transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
