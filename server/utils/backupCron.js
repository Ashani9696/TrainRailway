import cron from 'node-cron';
import { backupOldLocationHistory } from '../controllers/backupController.js';

// Run backup function every day at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running daily backup job...');
  backupOldLocationHistory();
});
