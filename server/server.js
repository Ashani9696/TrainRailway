import mongoose from "mongoose";
import trainRoutes from "./routes/trainRoutes.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import "./utils/backupCron.js";
import { updateLocation1, updateLocation2, updateLocation3, updateLocation4,updateLocation5,updateLocation6,updateLocation7,updateLocation8,updateLocation9,updateLocation10 } from "./controllers/updatingTrainsCurrentLocation.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    throw error;
  }
};

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Swagger setup
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

updateLocation1();
updateLocation2();
updateLocation3();
updateLocation4();
updateLocation5();
updateLocation6();
updateLocation7();
updateLocation8();
updateLocation9();
updateLocation10();


app.use("/api/trains", trainRoutes);

app.listen(PORT || 5000, () => {
  connect();
  console.log(`Server run on ${PORT || "5000"}`);
});
