import { changeEngine, getRoutes, getTrainSchedule, getLocationHistory, addTrain, getTrains,findById,} from "../controllers/trainController.js"
import express from "express"
import { protect, adminOnly } from '../middleware/authMiddleware.js';
const router = express.Router();

//router.post('/add', addTrain);
router.post('/add', protect, adminOnly, addTrain);
router.get('/get', getTrains);
router.get('/get/:id', findById); 
router.get('/getLocationHistory/', getLocationHistory);
router.post('/changeEngine', protect, adminOnly, changeEngine);
 // Add the new route // New route to get a specific train by ID
//router.get('/get/:id', );

// router.post('/update-location', updateLocation);
// router.post('/change-engine',changeEngine);
// router.get('/routes', getRoutes);
// router.get('/:id/schedule', getTrainSchedule); // New route for getting schedule
// router.get('/:trainId/location-history',getLocationHistory);


export default router
