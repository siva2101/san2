export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a creative agency dedicated to delivering exceptional digital solutions.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Our Projects</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Main St, City, State 12345</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Sanskriti. All rights reserved.</p>
      </div>
    </footer>
  );
}
