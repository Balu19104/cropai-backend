const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

  try {
    const formData = new FormData();
    formData.append('image', fs.createReadStream(req.file.path));

    const flaskRes = await axios.post('http://localhost:5050/predict', formData, {
      headers: formData.getHeaders()
    });

    fs.unlinkSync(req.file.path);
    res.json(flaskRes.data);
  } catch (err) {
    fs.unlinkSync(req.file.path);
    res.status(500).json({ error: 'Inference failed', details: err.message });
  }
});

module.exports = router;
