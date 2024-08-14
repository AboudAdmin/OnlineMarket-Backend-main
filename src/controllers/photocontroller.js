const Photo = require('../models/Photo'); 


exports.createPhoto = async (req, res) => {
  try {
    const { title, url, description } = req.body;
    const photo = new Photo({ title, url, description });
    await photo.save();
    res.status(201).send(photo);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).send(photos);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.getPhotoById = async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).send({ message: 'Photo not found' });
    }
    res.status(200).send(photo);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.updatePhoto = async (req, res) => {
  try {
    const { title, url, description } = req.body;
    const photo = await Photo.findByIdAndUpdate(req.params.id, { title, url, description }, { new: true, runValidators: true });
    if (!photo) {
      return res.status(404).send({ message: 'Photo not found' });
    }
    res.status(200).send(photo);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.deletePhoto = async (req, res) => {
  try {
    const photo = await Photo.findByIdAndDelete(req.params.id);
    if (!photo) {
      return res.status(404).send({ message: 'Photo not found' });
    }
    res.status(200).send(photo);
  } catch (error) {
    res.status(500).send(error);
  }
};
