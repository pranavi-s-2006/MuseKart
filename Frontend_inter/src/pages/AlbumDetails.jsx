import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { albumsAPI } from "../api/api";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import rahmanImg from "../assets/languages/rahman.jpg";
import hindiImg from "../assets/languages/hindi.jpg";
import englishImg from "../assets/languages/english.jpg";
import koreanImg from "../assets/languages/korean.jpg";
import rajaImg from "../assets/languages/raja.jpg";
import badshahImg from "../assets/languages/badshah.jpg";
import eminemImg from "../assets/languages/eminem.jpg";
import queenImg from "../assets/languages/queen.jpg";
import davisImg from "../assets/languages/davis.jpg";
import ostImg from "../assets/languages/ost.jpg";

const getImageByArtist = (artist, language) => {
  const artistImages = {
    "A.R. Rahman": rahmanImg,
    "Ilaiyaraaja": rajaImg,
    "Badshah": badshahImg,
    "Eminem": eminemImg,
    "Queen": queenImg,
    "Miles Davis": davisImg,
    "K-Drama OST": ostImg
  };
  
  const languageImages = {
    tamil: rahmanImg,
    hindi: hindiImg,
    english: englishImg,
    korean: koreanImg
  };
  
  return artistImages[artist] || languageImages[language] || englishImg;
};

export default function AlbumDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      if (!id || id === 'undefined') {
        setLoading(false);
        return;
      }
      
      try {
        const data = await albumsAPI.getById(id);
        setAlbum(data);
      } catch (error) {
        console.error('Error fetching album:', error);
        setAlbum(null);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbum();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🎵</div>
          <p className="text-gray-600">Loading album...</p>
        </div>
      </div>
    );
  }

  if (!album) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎵</div>
          <h2 className="text-2xl font-bold text-gray-700">Album not found</h2>
          <p className="text-gray-500 mt-2">The album you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleBuy = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/buy", { state: { album } });
    }
  };

  const handleAddToCart = () => {
    addToCart(album);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={getImageByArtist(album.artist, album.language)}
                alt={album.title}
                className="w-full h-96 md:h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2 p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{album.title}</h1>
                <p className="text-xl text-gray-600 mb-2">by {album.artist}</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {album.genre}
                  </span>
                  <span className="text-gray-500">{album.language}</span>
                  <span className="text-gray-500">{album.releaseYear}</span>
                </div>
                <p className="text-3xl font-bold text-green-600 mb-6">₹{album.price}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Track List</h3>
                <ul className="space-y-2">
                  {album.tracks && album.tracks.map((track, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-6 h-6 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      {track}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBuy}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  ⚡ Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  🛍 Add to Cart
                </button>
              </div>

              {!user && (
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Please login to purchase this album
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
