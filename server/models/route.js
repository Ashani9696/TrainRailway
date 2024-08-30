const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  waypoints: [
    {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model('Route', routeSchema);
