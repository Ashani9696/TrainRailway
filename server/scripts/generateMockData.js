const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Train = require('../models/train');
const Route = require('../models/route');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const generateRandomCoordinates = () => {
  const latitude = (Math.random() * 180 - 90).toFixed(6);
  const longitude = (Math.random() * 360 - 180).toFixed(6);
  return { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };
};

const generateMockRoutes = (numRoutes = 10) => {
  const routes = [];
  for (let i = 0; i < numRoutes; i++) {
    const waypoints = Array.from({ length: 5 }, generateRandomCoordinates);
    routes.push({
      name: `Route ${i + 1}`,
      start: `Station ${i + 1}`,
      end: `Station ${i + 2}`,
      waypoints
    });
  }
  return routes;
};

const generateMockTrains = (numTrains = 10) => {
  const trains = [];
  for (let i = 0; i < numTrains; i++) {
    const { latitude, longitude } = generateRandomCoordinates();
    trains.push({
      engineId: `Engine-${i + 1}`,
      gpsData: { latitude, longitude }
    });
  }
  return trains;
};

const loadMockData = async () => {
  try {
    await Route.deleteMany({});
    await Train.deleteMany({});

    const mockRoutes = generateMockRoutes();
    const mockTrains = generateMockTrains();

    await Route.insertMany(mockRoutes);
    await Train.insertMany(mockTrains);

    console.log('Mock data generated successfully');
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
};

loadMockData();
