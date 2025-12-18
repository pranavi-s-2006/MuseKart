import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import AlbumDetails from "./pages/AlbumDetails";
import Cart from "./pages/Cart";
import BuyNow from "./pages/BuyNow";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Genres from "./pages/Genres";
import GenreAlbums from "./pages/GenreAlbums";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums/:language" element={<Albums />} />
          <Route path="/genres/:language" element={<Genres />} />
          <Route path="/genre/:language/:genre" element={<GenreAlbums />} />
          <Route path="/album/:id" element={<AlbumDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/buy"
            element={
              <ProtectedRoute>
                <BuyNow />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
