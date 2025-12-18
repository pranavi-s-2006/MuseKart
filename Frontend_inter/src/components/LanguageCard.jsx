import { Link } from "react-router-dom";

export default function LanguageCard({ language }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={language.image}
          alt={language.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-2xl font-bold">{language.name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{language.description}</p>
        <div className="flex gap-3">
          <Link
            to={`/albums/${language.name.toLowerCase()}`}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg transition-colors font-medium"
          >
            View Albums
          </Link>
          <Link
            to={`/genres/${language.name.toLowerCase()}`}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-center py-2 px-4 rounded-lg transition-colors font-medium"
          >
            Browse Genres
          </Link>
        </div>
      </div>
    </div>
  );
}
