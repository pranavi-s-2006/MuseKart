import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl hover:text-yellow-300 transition-colors">
            🎵 MuseKart
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-yellow-300 transition-colors font-medium">
              Home
            </Link>
            <div className="relative group">
              <span className="hover:text-yellow-300 transition-colors font-medium cursor-pointer">
                Albums
              </span>
              <div className="absolute top-full left-0 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[150px]">
                <Link to="/albums/tamil" className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg">
                  Tamil
                </Link>
                <Link to="/albums/hindi" className="block px-4 py-2 hover:bg-gray-100">
                  Hindi
                </Link>
                <Link to="/albums/english" className="block px-4 py-2 hover:bg-gray-100">
                  English
                </Link>
                <Link to="/albums/korean" className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg">
                  Korean
                </Link>
              </div>
            </div>
            <Link to="/cart" className="hover:text-yellow-300 transition-colors font-medium relative">
              Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-yellow-300">Hi, {user.name}</span>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors font-medium"
              >
                Login
              </Link>
            )}
            <Link to="/admin" className="hover:text-yellow-300 transition-colors font-medium">
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-purple-400">
            <div className="flex flex-col space-y-2 pt-4">
              <Link to="/" className="hover:text-yellow-300 transition-colors py-2">
                Home
              </Link>
              <Link to="/albums/tamil" className="hover:text-yellow-300 transition-colors py-2 pl-4">
                Tamil Albums
              </Link>
              <Link to="/albums/hindi" className="hover:text-yellow-300 transition-colors py-2 pl-4">
                Hindi Albums
              </Link>
              <Link to="/albums/english" className="hover:text-yellow-300 transition-colors py-2 pl-4">
                English Albums
              </Link>
              <Link to="/albums/korean" className="hover:text-yellow-300 transition-colors py-2 pl-4">
                Korean Albums
              </Link>
              <Link to="/cart" className="hover:text-yellow-300 transition-colors py-2">
                Cart ({cart.length})
              </Link>
              {user ? (
                <div className="py-2">
                  <span className="text-yellow-300 block mb-2">Hi, {user.name}</span>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors inline-block">
                  Login
                </Link>
              )}
              <Link to="/admin" className="hover:text-yellow-300 transition-colors py-2">
                Admin
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
