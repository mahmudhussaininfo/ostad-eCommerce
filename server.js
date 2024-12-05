import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import color from "colors";
import router from "./routes/api.js";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import {
  MAX_JSON_SIZE,
  PORT,
  REQUEST_NUMBER,
  REQUEST_TIME,
  URL_ENCODE,
  WEB_CACHE,
} from "./app/config/config.js";
import { mongoDbConnection } from "./app/config/db.js";

//express init
const app = express();

//middleware
app.use(cors());
const corsOptions = {
  origin: "http://localhost:5173", // React app URL during development
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true, // Allow cookies
};
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(helmet());

//app use limiter
const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

//cache
app.set("etag", WEB_CACHE);

//route
app.use("/api", router);

app.use(express.static("client/dist"));

//add React Front End Routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

//listen
app.listen(PORT, () => {
  mongoDbConnection();
  console.log(`server is running with port ${PORT}`.bgCyan.black);
});
