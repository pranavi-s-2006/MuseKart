import { Link } from "react-router-dom";
import LanguageCard from "../components/LanguageCard";

const languages = [
  {
    name: "Tamil",
    image: "/src/assets/languages/tamil.jpg",
    description: "Discover soulful Tamil melodies"
  },
  {
    name: "Hindi",
    image: "/src/assets/languages/hindi.jpg",
    description: "Bollywood hits and classics"
  },
  {
    name: "English",
    image: "/src/assets/languages/english.jpg",
    description: "International pop and rock"
  },
  {
    name: "Korean",
    image: "/src/assets/languages/korean.jpg",
    description: "K-Pop and K-Drama OSTs"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-purple-600">🎵 MuseKart</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover and collect your favorite music albums from around the world. 
          Explore diverse languages and genres in one place.
        </p>
        <Link
          to="/albums/tamil"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block"
        >
          Start Exploring
        </Link>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Explore by Language
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {languages.map((language) => (
              <LanguageCard key={language.name} language={language} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose MuseKart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold mb-2">Diverse Collection</h3>
              <p className="text-gray-600">Albums from multiple languages and genres</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold mb-2">Easy Shopping</h3>
              <p className="text-gray-600">Simple cart and checkout process</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Purchase</h3>
              <p className="text-gray-600">Safe and secure payment system</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
