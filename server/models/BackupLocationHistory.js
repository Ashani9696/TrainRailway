import mongoose from 'mongoose';

const backupLocationHistorySchema = new mongoose.Schema({
  engineId: { type: String, required: true },
  location: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, required: true }
});

export default mongoose.model('BackupLocationHistory', backupLocationHistorySchema);
