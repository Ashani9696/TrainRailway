import mongoose from 'mongoose';

const trainSchema = new mongoose.Schema({
  engineId: { type: String, required: true },
  route: { type: String, required: true },
  currentLocation: { type: String, default: "" },
 latitude: {type: Number, default: 0},
 longitude: {type: Number, default: 0},
timestamp: { type: Date, required: true }
});

export default mongoose.model('Train', trainSchema);
