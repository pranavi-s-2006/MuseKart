import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { albumsAPI } from "../api/api";
import AlbumCard from "../components/AlbumCard";

export default function Albums() {
  const { language } = useParams();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const data = await albumsAPI.getAll(language);
        console.log('Albums fetched:', data);
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbums();
  }, [language]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 capitalize">
            🎵 {language} Albums
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing {language} music albums
          </p>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🎵</div>
            <p className="text-gray-600">Loading albums...</p>
          </div>
        ) : albums.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {albums.map(album => (
              <AlbumCard key={album._id} album={album} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No albums found
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
