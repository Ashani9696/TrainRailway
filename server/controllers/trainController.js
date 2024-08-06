const Train = require('../models/Train');
const Route = require('../models/Route');

exports.updateLocation = async (req, res) => {
  const { trainId, gpsData } = req.body;
  try {
    const train = await Train.findById(trainId);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    train.gpsData = gpsData;
    await train.save();
    res.status(200).json({ message: 'Location updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.changeEngine = async (req, res) => {
  const { trainId, newEngineId, newGpsData } = req.body;
  try {
    const train = await Train.findById(trainId);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }
    train.engineId = newEngineId;
    train.gpsData = newGpsData;
    await train.save();
    res.status(200).json({ message: 'Engine changed and location updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
