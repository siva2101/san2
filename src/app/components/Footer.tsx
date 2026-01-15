export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white pb-4 px-4 ">
      {/* <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="mt-0 text-sansRed text-lg">About Us</h3>
          <p className="leading-relaxed text-sm">We are a creative agency dedicated to delivering exceptional digital solutions.</p>
        </div>

        <div>
          <h3 className="mt-0 text-sansRed text-lg">Quick Links</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><a href="/" className="text-white/60 no-underline hover:text-sansRed transition-colors">Home</a></li>
            <li className="mb-2"><a href="/" className="text-white/60 no-underline hover:text-sansRed transition-colors">About</a></li>
            <li className="mb-2"><a href="/" className="text-white/60 no-underline hover:text-sansRed transition-colors">Our Projects</a></li>
            <li className="mb-2"><a href="/" className="text-white/60 no-underline hover:text-sansRed transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mt-0 text-sansRed text-lg">Contact Info</h3>
          <p className="leading-relaxed text-sm">Email: info@example.com</p>
          <p className="leading-relaxed text-sm">Phone: +1 (555) 123-4567</p>
          <p className="leading-relaxed text-sm">Address: 123 Main St, City, State 12345</p>
        </div>

        <div>
          <h3 className="mt-0 text-sansRed text-lg">Follow Us</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><a href="#" className="text-white/60 no-underline hover:text-sansRed transition-colors">Facebook</a></li>
            <li className="mb-2"><a href="#" className="text-white/60 no-underline hover:text-sansRed transition-colors">Twitter</a></li>
            <li className="mb-2"><a href="#" className="text-white/60 no-underline hover:text-sansRed transition-colors">LinkedIn</a></li>
            <li className="mb-2"><a href="#" className="text-white/60 no-underline hover:text-sansRed transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
 */}
      <div className="border-t border-sansGray/20 pt-6 text-center text-sm text-sansGray">
        <p>&copy; {currentYear} Sanskriti. All rights reserved.</p>
      </div>
    </footer>
  );
}
