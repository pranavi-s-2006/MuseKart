const Album = require('../models/Album');

const getAlbums = async (req, res) => {
  try {
    const { language, genre } = req.query;
    let filter = {};
    
    if (language) filter.language = language;
    if (genre) filter.genre = genre;
    
    const albums = await Album.find(filter);
    res.json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAlbumById = async (req, res) => {
  try {
    if (!req.params.id || req.params.id === 'undefined') {
      return res.status(400).json({ message: 'Invalid album ID' });
    }
    
    const album = await Album.findById(req.params.id);
    
    if (album) {
      res.json(album);
    } else {
      res.status(404).json({ message: 'Album not found' });
    }
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};

const createAlbum = async (req, res) => {
  try {
    const album = new Album(req.body);
    const createdAlbum = await album.save();
    res.status(201).json(createdAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateAlbum = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    
    if (album) {
      Object.assign(album, req.body);
      const updatedAlbum = await album.save();
      res.json(updatedAlbum);
    } else {
      res.status(404).json({ message: 'Album not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAlbum = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    
    if (album) {
      await Album.deleteOne({ _id: req.params.id });
      res.json({ message: 'Album removed' });
    } else {
      res.status(404).json({ message: 'Album not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAlbums, getAlbumById, createAlbum, updateAlbum, deleteAlbum };