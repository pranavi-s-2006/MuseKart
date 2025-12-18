import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import albums from "../data/albums";

export default function Genres() {
  const { language } = useParams();
  const languageAlbums = albums.filter(a => a.language === language);
  
  // Get unique genres for this language
  const genres = [...new Set(languageAlbums.map(album => album.genre))];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 capitalize">
            {language} Genres
          </h1>
          <p className="text-gray-600 text-lg">
            Browse {language} albums by genre
          </p>
        </div>

        {genres.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {genres.map(genre => {
              const genreAlbums = languageAlbums.filter(album => album.genre === genre);
              const sampleAlbum = genreAlbums[0];
              
              return (
                <div key={genre} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={sampleAlbum.coverImage}
                      alt={genre}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{genre}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {genreAlbums.length} album{genreAlbums.length !== 1 ? 's' : ''} available
                    </p>
                    <Link
                      to={`/genre/${language}/${genre}`}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors font-medium inline-block text-center"
                    >
                      View {genre} Albums
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No genres found
            </h3>
            <p className="text-gray-500">
              We don't have any {language} albums yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}