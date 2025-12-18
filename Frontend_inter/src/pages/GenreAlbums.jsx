import { useParams } from "react-router-dom";
import albums from "../data/albums";
import AlbumCard from "../components/AlbumCard";

export default function GenreAlbums() {
  const { language, genre } = useParams();
  const filtered = albums.filter(a => a.language === language && a.genre === genre);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 capitalize">
            {genre} Albums in {language}
          </h1>
          <p className="text-gray-600 text-lg">
            {filtered.length} album{filtered.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {filtered.map(album => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No albums found
            </h3>
            <p className="text-gray-500">
              No {genre} albums available in {language}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}