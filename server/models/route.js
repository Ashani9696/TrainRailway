import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  waypoints: [
    {
      name: { type: String, required: true },
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true }
    }
  ]
});

export default mongoose.model('Route', routeSchema);
