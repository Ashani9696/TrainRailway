import mongoose from 'mongoose';

const locationHistorySchema = new mongoose.Schema({
  engineId: { type: String, required: true },
  location: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('LocationHistory', locationHistorySchema);

