export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-4 px-4 mt-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="mt-0 text-green-600 text-lg">About Us</h3>
          <p className="leading-relaxed text-sm">We are a creative agency dedicated to delivering exceptional digital solutions.</p>
        </div>

        <div>
          <h3 className="mt-0 text-green-600 text-lg">Quick Links</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><a href="/" className="text-zinc-400 no-underline hover:text-green-600 transition-colors">Home</a></li>
            <li className="mb-2"><a href="/about" className="text-zinc-400 no-underline hover:text-green-600 transition-colors">About</a></li>
            <li className="mb-2"><a href="/projects" className="text-zinc-400 no-underline hover:text-green-600 transition-colors">Our Projects</a></li>
            <li className="mb-2"><a href="/contact" className="text-zinc-400 no-underline hover:text-green-600 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mt-0 text-green-600 text-lg">Contact Info</h3>
          <p className="leading-relaxed text-sm">Email: info@example.com</p>
          <p className="leading-relaxed text-sm">Phone: +1 (555) 123-4567</p>
          <p className="leading-relaxed text-sm">Address: 123 Main St, City, State 12345</p>
        </div>

        <div>
          <h3 className="mt-0 text-green-600 text-lg">Follow Us</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><a href="#" className="text-zinc-400 no-underline hover:text-green-600 transition-colors">Facebook</a></li>
            <li className="mb-2"><a href="#" className="text-zinc-400 no-underline hover:text-green-600 transition-colors">Twitter</a></li>
            <li className="mb-2"><a href="#" className="text-zinc-400 no-underline hover:text-green-600 transition-colors">LinkedIn</a></li>
            <li className="mb-2"><a href="#" className="text-zinc-400 no-underline hover:text-green-600 transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-700 pt-6 text-center text-sm text-zinc-500">
        <p>&copy; {currentYear} Sanskriti. All rights reserved.</p>
      </div>
    </footer>
  );
}
