import { Link } from "react-router-dom";
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

export default function AlbumCard({ album }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group max-w-sm">
      <div className="relative overflow-hidden">
        <img
          src={getImageByArtist(album.artist, album.language)}
          alt={album.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          ₹{album.price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {album.title}
        </h3>
        
        <p className="text-gray-600 mb-1">by {album.artist}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm font-medium">
            {album.genre}
          </span>
          <span className="text-gray-500 text-sm">{album.releaseYear}</span>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/album/${album._id || album.id}`}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-center transition-colors font-medium"
          >
            View
          </Link>
          <button
            onClick={() => addToCart(album)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}