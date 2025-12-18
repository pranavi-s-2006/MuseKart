import { useState, useEffect } from "react";
import { albumsAPI } from "../api/api";
import { useAuth } from "../context/AuthContext";
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
    "K-Drama OST": ostImg,
  };

  const languageImages = {
    tamil: rahmanImg,
    hindi: hindiImg,
    english: englishImg,
    korean: koreanImg,
  };

  return artistImages[artist] || languageImages[language] || englishImg;
};

export default function Admin() {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    language: "",
    genre: "",
    price: "",
    coverImage: "",
    tracks: "",
    releaseYear: "",
  });
  const [albumList, setAlbumList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const albums = await albumsAPI.getAll();
      setAlbumList(albums);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newAlbum = {
      title: formData.title,
      artist: formData.artist,
      language: formData.language.toLowerCase(),
      genre: formData.genre,
      price: Number(formData.price),
      coverImage:
        formData.coverImage || getImageByArtist(formData.artist, formData.language),
      tracks: formData.tracks.split(",").map((track) => track.trim()),
      releaseYear: Number(formData.releaseYear),
    };

    try {
      await albumsAPI.create(newAlbum, user.token);
      await fetchAlbums();
      setFormData({
        title: "",
        artist: "",
        language: "",
        genre: "",
        price: "",
        coverImage: "",
        tracks: "",
        releaseYear: "",
      });
      setShowForm(false);
      alert("Album added successfully!");
    } catch (error) {
      alert("Error adding album. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this album?")) {
      try {
        await albumsAPI.delete(id, user.token);
        await fetchAlbums();
        alert("Album deleted successfully!");
      } catch (error) {
        alert("Error deleting album. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              {showForm ? "Cancel" : "Add New Album"}
            </button>
          </div>

          {/* Add Album Form */}
          {showForm && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Add New Album</h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Album Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Album Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter album title"
                    required
                  />
                </div>

                {/* Artist */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Artist *
                  </label>
                  <input
                    type="text"
                    name="artist"
                    value={formData.artist}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter artist name"
                    required
                  />
                </div>

                {/* Language */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language *
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Language</option>
                    <option value="tamil">Tamil</option>
                    <option value="hindi">Hindi</option>
                    <option value="english">English</option>
                    <option value="korean">Korean</option>
                  </select>
                </div>

                {/* Genre */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Genre *
                  </label>
                  <input
                    type="text"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Pop, Rock, Love"
                    required
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter price"
                    min="1"
                    required
                  />
                </div>

                {/* Release Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Release Year *
                  </label>
                  <input
                    type="number"
                    name="releaseYear"
                    value={formData.releaseYear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 2023"
                    min="1900"
                    max="2030"
                    required
                  />
                </div>

                {/* Cover Image URL */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Image URL
                  </label>
                  <input
                    type="url"
                    name="coverImage"
                    value={formData.coverImage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter image URL (optional)"
                  />
                </div>

                {/* Tracks */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tracks (comma separated) *
                  </label>
                  <textarea
                    name="tracks"
                    value={formData.tracks}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Track 1, Track 2, Track 3"
                    rows="3"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                  >
                    {loading ? "Adding..." : "Add Album"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Albums List */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">
                Manage Albums ({albumList.length})
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Album
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Artist
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Language
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Genre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {albumList.map((album) => (
                    <tr key={album._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={album.coverImage}
                            alt={album.title}
                            className="w-12 h-12 object-cover rounded-lg mr-4"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {album.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {album.releaseYear}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {album.artist}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                          {album.language}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          {album.genre}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                        ₹{album.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleDelete(album._id)}
                          className="text-red-600 hover:text-red-900 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
