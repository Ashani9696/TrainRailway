const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  engineId: { type: String, required: true },
  gpsData: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
  }
});

module.exports = mongoose.model('Train', trainSchema);
