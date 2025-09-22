import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">H.N Sarees</h2>
          <p className="text-gray-400 leading-relaxed">
            Celebrating tradition and elegance with handcrafted sarees. 
            Every drape tells a story of heritage, artistry, and timeless beauty.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-rose-500">Home</a></li>
            <li><a href="#about" className="hover:text-rose-500">About</a></li>
            <li><a href="#collection" className="hover:text-rose-500">Collection</a></li>
            <li><a href="#testimonials" className="hover:text-rose-500">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-rose-500">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
          <form className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>

          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-rose-500"><Facebook /></a>
            <a href="#" className="hover:text-rose-500"><Instagram /></a>
            <a href="#" className="hover:text-rose-500"><Twitter /></a>
            <a href="mailto:info@hnsarees.com" className="hover:text-rose-500"><Mail /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} H.N Sarees. All rights reserved.
      </div>
    </footer>
  );
}
