const express = require('express');
const { getAlbums, getAlbumById, createAlbum, updateAlbum, deleteAlbum } = require('../controller/albumController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getAlbums).post(protect, admin, createAlbum);
router.route('/:id').get(getAlbumById).put(protect, admin, updateAlbum).delete(protect, admin, deleteAlbum);

module.exports = router;