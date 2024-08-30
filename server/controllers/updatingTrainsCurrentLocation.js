import Train from "../models/Train.js";
import { waypoints, waypoint2, waypoint3, waypoint4, waypoint5,waypoint6,waypoint7,waypoint8,waypoint9,waypoint10} from "../scripts/generateMockData.js";
import LocationHistory from '../models/LocationHistory.js'; 

export const updateLocation1 = async (req, res) => {
  try {
    let curIndex = 0;

    const updateLocation = async () => {
      try {
        const currentLocation = waypoints[curIndex].name;
        const latitude = waypoints[curIndex].latitude;
        const longitude = waypoints[curIndex].longitude;
        const timestamp = new Date();

        await Train.findOneAndUpdate(
          { route: "Colombo to Kandy" },
          { currentLocation: { latitude, longitude }, timestamp: new Date()}
        );
        console.log(`train1 cuurent location updated to ${currentLocation}`);

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
        throw error;
      }
    };

    await updateLocation();

    setInterval(updateLocation, 6000);
    console.log("data ganarator is started");
  } catch (error) {
    throw error;
  }
};

export const updateLocation2 = async (req, res) => {
  try {
    let curIndex = 0;

    const updateLocation = async () => {
      try {
        const currentLocation = waypoint2[curIndex].name;
        const latitude = waypoint2[curIndex].latitude;
        const longitude = waypoint2[curIndex].longitude;

        await Train.findOneAndUpdate(
          { route: "Colombo to Galle" },
          { currentLocation: { latitude, longitude } }
        );
        console.log(`train2 cuurent location updated to ${currentLocation}`);
        curIndex = (curIndex + 1) % waypoint2.length
        
      } catch (error) {
        throw error;
      }
    };

    await updateLocation();

    setInterval(updateLocation, 60000);
    console.log("data ganarator is started");
  } catch (error) {
    throw error;
  }
};

export const updateLocation3 = async (req, res) => {
  try {
    let curIndex = 0;

    const updateLocation = async () => {
      try {
        const currentLocation = waypoint3[curIndex].name;
        const latitude = waypoint3[curIndex].latitude;
        const longitude = waypoint3[curIndex].longitude;

        await Train.findOneAndUpdate(
          { route: "Colombo to Jaffna" },
          { currentLocation: { latitude, longitude } }
        );
        console.log(`train3 cuurent location updated to ${currentLocation}`);
        curIndex = (curIndex + 1) % waypoint3.length
      } catch (error) {
        throw error;
      }
    };

    await updateLocation();

    setInterval(updateLocation, 60000);
    console.log("data ganarator is started");
  } catch (error) {
    throw error;
  }
};

export const updateLocation4 = async (req, res) => {
    try {
      let curIndex = 0;
  
      const updateLocation = async () => {
        try {
          const currentLocation = waypoint4[curIndex].name;
          const latitude = waypoint4[curIndex].latitude;
          const longitude = waypoint4[curIndex].longitude;
  
          await Train.findOneAndUpdate(
            { route: "Kandy to Nuwara Eliya" },
            { currentLocation: { latitude, longitude } }
          );
          console.log(`train4 cuurent location updated to ${currentLocation}`);
          curIndex = (curIndex + 1) % waypoint4.length
  
        } catch (error) {
          throw error;
        }
      };
  
      await updateLocation();
  
      setInterval(updateLocation, 60000);
      console.log("data ganarator is started");
    } catch (error) {
      throw error;
    }
  };

  export const updateLocation5 = async (req, res) => {
    try {
      let curIndex = 0;
  
      const updateLocation = async () => {
        try {
          const currentLocation = waypoint4[curIndex].name;
          const latitude = waypoint5[curIndex].latitude;
          const longitude = waypoint5[curIndex].longitude;
  
          await Train.findOneAndUpdate(
            { route: "Kandy to Nuwara Eliya" },
            { currentLocation: { latitude, longitude } }
          );
          console.log(`train5 cuurent location updated to ${currentLocation}`);
          curIndex = (curIndex + 1) % waypoint5.length
  
        } catch (error) {
          throw error;
        }
      };
  
      await updateLocation();
  
      setInterval(updateLocation, 60000);
      console.log("data ganarator is started");
    } catch (error) {
      throw error;
    }
  };

  export const updateLocation6 = async (req, res) => {
    try {
      let curIndex = 0;
  
      const updateLocation = async () => {
        try {
          const currentLocation = waypoint6[curIndex].name;
          const latitude = waypoint6[curIndex].latitude;
          const longitude = waypoint6[curIndex].longitude;
  
          await Train.findOneAndUpdate(
            { route: "Kandy to Nuwara Eliya" },
            { currentLocation: { latitude, longitude } }
          );
          console.log(`train6 cuurent location updated to ${currentLocation}`);
          curIndex = (curIndex + 1) % waypoint6.length
  
        } catch (error) {
          throw error;
        }
      };
  
      await updateLocation();
  
      setInterval(updateLocation, 60000);
      console.log("data ganarator is started");
    } catch (error) {
      throw error;
    }
  };

  export const updateLocation7 = async (req, res) => {
    try {
      let curIndex = 0;
  
      const updateLocation = async () => {
        try {
          const currentLocation = waypoint7[curIndex].name;
          const latitude = waypoint7[curIndex].latitude;
          const longitude = waypoint7[curIndex].longitude;
  
          await Train.findOneAndUpdate(
            { route: "Kandy to Nuwara Eliya" },
            { currentLocation: { latitude, longitude } }
          );
          console.log(`train7 cuurent location updated to ${currentLocation}`);
          curIndex = (curIndex + 1) % waypoint7.length
  
        } catch (error) {
          throw error;
        }
      };
  
      await updateLocation();
  
      setInterval(updateLocation, 60000);
      console.log("data ganarator is started");
    } catch (error) {
      throw error;
    }
  };


  export const updateLocation8 = async (req, res) => {
    try {
      let curIndex = 0;
  
      const updateLocation = async () => {
        try {
          const currentLocation = waypoint8[curIndex].name;
          const latitude = waypoint8[curIndex].latitude;
          const longitude = waypoint8[curIndex].longitude;
  
          await Train.findOneAndUpdate(
            { route: "Kandy to Nuwara Eliya" },
            { currentLocation: { latitude, longitude } }
          );
          console.log(`train8 cuurent location updated to ${currentLocation}`);
          curIndex = (curIndex + 1) % waypoint8.length
  
        } catch (error) {
          throw error;
        }
      };
  
      await updateLocation();
  
      setInterval(updateLocation, 60000);
      console.log("data ganarator is started");
    } catch (error) {
      throw error;
    }
  };

  export const updateLocation9 = async (req, res) => {
    try {
      let curIndex = 0;
  
      const updateLocation = async () => {
        try {
          const currentLocation = waypoint9[curIndex].name;
          const latitude = waypoint9[curIndex].latitude;
          const longitude = waypoint9[curIndex].longitude;
  
          await Train.findOneAndUpdate(
            { route: "Kandy to Nuwara Eliya" },
            { currentLocation: { latitude, longitude } }
          );
          console.log(`train9 cuurent location updated to ${currentLocation}`);
          curIndex = (curIndex + 1) % waypoint9.length
  
        } catch (error) {
          throw error;
        }
      };
  
      await updateLocation();
  
      setInterval(updateLocation, 60000);
      console.log("data ganarator is started");
    } catch (error) {
      throw error;
    }
  };

  export const updateLocation10 = async (req, res) => {
    try {
      let curIndex = 0;
  
      const updateLocation = async () => {
        try {
          const currentLocation = waypoint10[curIndex].name;
          const latitude = waypoint10[curIndex].latitude;
          const longitude = waypoint10[curIndex].longitude;
  
          await Train.findOneAndUpdate(
            { route: "Kandy to Nuwara Eliya" },
            { currentLocation: { latitude, longitude } }
          );
          console.log(`train10 cuurent location updated to ${currentLocation}`);
          curIndex = (curIndex + 1) % waypoint10.length
  
        } catch (error) {
          throw error;
        }
      };
  
      await updateLocation();
  
      setInterval(updateLocation, 60000);
      console.log("data ganarator is started");
    } catch (error) {
      throw error;
    }
  };