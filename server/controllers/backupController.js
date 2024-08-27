import LocationHistory from '../models/LocationHistory.js';
import BackupLocationHistory from '../models/BackupLocationHistory.js';

export const backupOldLocationHistory = async () => {
  try {
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

    // Find records older than 90 days
    const oldRecords = await LocationHistory.find({ timestamp: { $lt: ninetyDaysAgo } });

    if (oldRecords.length > 0) {
      // Insert the old records into the backup collection
      await BackupLocationHistory.insertMany(oldRecords);

      // Delete the old records from the original collection
      await LocationHistory.deleteMany({ _id: { $in: oldRecords.map(record => record._id) } });

      console.log(`Moved ${oldRecords.length} records to backup and deleted from original collection`);
    } else {
      console.log('No old records to move');
    }
  } catch (error) {
    console.error('Error moving old records:', error);
  }
};
