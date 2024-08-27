import Train from "../models/Train.js"
import Route from "../models/Route.js"
import {waypoints, waypoint2} from "../scripts/generateMockData.js"
import LocationHistory from '../models/LocationHistory.js'; 

export const addTrain = async (req, res)=> {
  try {
    const train = new Train({...req.body})
    await train.save()
    res.send("Train has been added")
  } catch (error) {
    throw error
  }
}

export const getTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    res.status(200).json(trains);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


export const findById = async (req, res) => {
  try {
    const trains = await Train.findById(req.params.id);
    res.json({  
        engineId:trains.engineId,
        route:trains.route,
        currentLocation:trains.currentLocation,
        latitude:trains.latitude,
        longitude:trains.longitude
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error findById' });
  }
};


export const updateLocation1 = async (req, res) => {
  try {
    let curIndex = 0;

    const updateLocation = async () => {
      try {
        const currentLocation = waypoints[curIndex].name
        const latitude = waypoints[curIndex].latitude
        const longitude = waypoints[curIndex].longitude
        const timestamp = new Date();
        await Train.findOneAndUpdate({engineId: 'T001'}, {currentLocation, latitude, longitude,timestamp})
        console.log(`train1 cuurent location updated to ${currentLocation}`)

         // Save the location history
         const history = new LocationHistory({
          engineId: 'T001',
          location: currentLocation,
          latitude,
          longitude,
          timestamp
        });
        await history.save();

        curIndex = (curIndex + 1) % waypoints.length
      } catch (error) {
        throw error
      }
    }

    await updateLocation()

    setInterval(updateLocation, 60000)
    console.log("data ganarator is started")
  } catch (error) {
    throw error
  }
};
export const updateLocation2 = async (req, res) => {
  try {
    let curIndex = 0;

    const updateLocation = async () => {
      try {
        const currentLocation = waypoint2[curIndex].name
        const latitude = waypoint2[curIndex].latitude
        const longitude = waypoint2[curIndex].longitude
        const timestamp = new Date();
        await Train.findOneAndUpdate({engineId: 'T002'}, {currentLocation, latitude, longitude,timestamp})
        console.log(`train2 cuurent location updated to ${currentLocation}`)

        curIndex = (curIndex + 1) % waypoint2.length
      } catch (error) {
        throw error
      }
    }

    await updateLocation()

    setInterval(updateLocation, 60000)
    console.log("data ganarator is started")
  } catch (error) {
    throw error
  }
};

// export const updateLocation = async (req, res) => {
//   const { trainId, gpsData } = req.body;
//   try {
//     const train = await Train.findById(trainId);
//     if (!train) {
//       return res.status(404).json({ message: 'Train not found' });
//     }
//     train.gpsData = gpsData;
//     await train.save();
//     res.status(200).json({ message: 'Location updated', train });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

export const changeEngine = async (req, res) => {
  const { trainId, newEngineId, newGpsData } = req.body;
  try {
    // Step 1: Find the train by ID
    const train = await Train.findById(trainId);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }

    // Step 2: Save the current location to LocationHistory before engine change
    const currentLocationHistory = new LocationHistory({
      engineId: train.engineId,  // Save current engine ID before changing
      location: train.currentLocation,
      latitude: train.latitude,
      longitude: train.longitude,
      timestamp: train.timestamp
    });
    await currentLocationHistory.save();

    // Step 3: Update the train's engineId and gpsData
    train.engineId = newEngineId;
    train.currentLocation = newGpsData.currentLocation;
    train.latitude = newGpsData.latitude;
    train.longitude = newGpsData.longitude;
    train.timestamp = new Date();  // Update the timestamp to the current time

    // Step 4: Save the updated train object
    await train.save();

    // Step 5: Return a success response
    res.status(200).json({ message: 'Engine changed and location updated', train });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


export const getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


export const getTrainSchedule = async (req, res) => {
  try {
    const train = await Train.findById(req.params.id).populate('route');
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    res.status(200).json(train.schedule);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
// export const getLocationHistorybyId = async (req, res) => {
//   try {
//     const trains = await LocationHistory.findById(req.params.engineId);
//     res.json({  
//         engineId:trains.engineId,
//         route:trains.route,
//         currentLocation:trains.currentLocation,
//         latitude:trains.latitude,
//         longitude:trains.longitude
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error findById' });
//   }
// };

export const getLocationHistory = async (req, res) => {
  try {
    const his = await LocationHistory.find();
    res.status(200).json(his);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


