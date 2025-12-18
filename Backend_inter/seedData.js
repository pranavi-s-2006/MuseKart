const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Album = require('./models/Album');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

const albums = [
  {
    title: "Tamil Love Hits",
    artist: "A.R. Rahman",
    language: "tamil",
    genre: "Love",
    price: 299,
    coverImage: "/src/assets/languages/rahman.jpg",
    tracks: ["Kadhal Rojave", "Munbe Vaa", "Uyire Uyire"],
    releaseYear: 2023
  },
  {
    title: "Hindi Sad Songs",
    artist: "Arijit Singh",
    language: "hindi",
    genre: "Sad",
    price: 199,
    coverImage: "/src/assets/languages/hindi.jpg",
    tracks: ["Tum Hi Ho", "Channa Mereya", "Ae Dil Hai Mushkil"],
    releaseYear: 2022
  },
  {
    title: "English Pop Hits",
    artist: "Various Artists",
    language: "english",
    genre: "Pop",
    price: 399,
    coverImage: "/src/assets/languages/english.jpg",
    tracks: ["Shape of You", "Blinding Lights", "Watermelon Sugar"],
    releaseYear: 2023
  },
  {
    title: "Korean OST Collection",
    artist: "K-Drama OST",
    language: "korean",
    genre: "OST",
    price: 349,
    coverImage: "/src/assets/languages/ost.jpg",
    tracks: ["Stay With Me", "Spring Snow", "Love,Maybe"],
    releaseYear: 2023
  },
  {
    title: "Tamil Folk Songs",
    artist: "Ilaiyaraaja",
    language: "tamil",
    genre: "Folk",
    price: 249,
    coverImage: "/src/assets/languages/raja.jpg",
    tracks: ["Raasaathi", "Malare Ninne", "Kanmani Anbodu"],
    releaseYear: 2022
  },
  {
    title: "Hindi Party Mix",
    artist: "Badshah",
    language: "hindi",
    genre: "Party",
    price: 279,
    coverImage: "/src/assets/languages/badshah.jpg",
    tracks: ["Garmi", "Paagal", "Genda Phool"],
    releaseYear: 2023
  },
  {
    title: "Hip Hop Classics",
    artist: "Eminem",
    language: "english",
    genre: "HipHop",
    price: 450,
    coverImage: "/src/assets/languages/eminem.jpg",
    tracks: ["Lose Yourself", "Stan", "The Real Slim Shady"],
    releaseYear: 2023
  },
  {
    title: "Rock Legends",
    artist: "Queen",
    language: "english",
    genre: "Rock",
    price: 500,
    coverImage: "/src/assets/languages/queen.jpg",
    tracks: ["Bohemian Rhapsody", "We Will Rock You", "Don't Stop Me Now"],
    releaseYear: 2022
  },
  {
    title: "Jazz Essentials",
    artist: "Miles Davis",
    language: "english",
    genre: "Jazz",
    price: 380,
    coverImage: "/src/assets/languages/davis.jpg",
    tracks: ["Kind of Blue", "So What", "All Blues"],
    releaseYear: 2023
  },
  {
    title: "K-Pop Hits",
    artist: "BTS",
    language: "korean",
    genre: "KPop",
    price: 420,
    coverImage: "/src/assets/languages/korean.jpg",
    tracks: ["Dynamite", "Butter", "Permission to Dance"],
    releaseYear: 2023
  },
  {
    title: "Tamil Sad Melodies",
    artist: "Yuvan Shankar Raja",
    language: "tamil",
    genre: "Sad",
    price: 249,
    coverImage: "/src/assets/languages/tamil.jpg",
    tracks: ["Nenjukkul Peidhidum", "Kadhal Anukkal", "Mounam Pesiyadhe"],
    releaseYear: 2024
  }
];

const importData = async () => {
  try {
    await connectDB();
    
    await Album.deleteMany();
    await User.deleteMany();
    
    await Album.insertMany(albums);
    
    // Create admin user
    await User.create({
      email: 'admin@musekart.com',
      password: 'admin123',
      isAdmin: true
    });
    
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();