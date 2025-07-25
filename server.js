const authRoutes = require('./routes/authRoutes');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// All Routes
app.use('/api/auth', authRoutes);

const privateRoutes = require('./routes/privateRoutes');
app.use('/api/private', privateRoutes);

const inferenceRoute = require('./routes/inference'); // ✅ NEW
app.use('/api/inference', inferenceRoute);            // ✅ NEW

app.get('/', (req, res) => {
  res.send('🌿 CropAI Backend API is Running...');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
