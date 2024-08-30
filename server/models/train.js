import mongoose from 'mongoose';

const trainSchema = new mongoose.Schema({
  route: { type: String, required: true },
  currentLocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  timestamp: { type: Date, required: true },
  path: [{ 
    latitude: { type: Number, required: true }, 
    longitude: { type: Number, required: true },
    label: { type: String, required: true }
  }],
  engineHistory: [{
    engineId: { type: String },
    detachedAt: { type: Date },
    current: { type: Boolean, default: false }
  }]
});


export default mongoose.model('Train', trainSchema);
