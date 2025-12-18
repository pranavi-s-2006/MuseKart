export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🎵 MuseKart</h3>
            <p className="text-gray-400">Your ultimate destination for music albums across all languages and genres.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/albums/tamil" className="hover:text-white transition-colors">Tamil Albums</a></li>
              <li><a href="/albums/hindi" className="hover:text-white transition-colors">Hindi Albums</a></li>
              <li><a href="/cart" className="hover:text-white transition-colors">Cart</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: support@musekart.com</p>
            <p className="text-gray-400">Phone: +91 12345 67890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          © 2025 MuseKart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
