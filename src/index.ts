import express from "express";
import cors from "cors";
import helmet from "helmet";
import { Server } from "http";
import { Secrets } from "./secrets";

function initializeApplication(): Promise<Server> {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(helmet());

  app.get("/", function (req, res) {
    return res.status(200).json({
      you: req.headers["user-agent"],
      message: "Hello, world!",
    });
  });

  const server = app.listen(Secrets.PORT);
  return Promise.resolve(server);
}

initializeApplication()
  .then(function (server) {
    console.log("Server address info: ", server.address());
    console.log(`Current environment: ${Secrets.NODE_ENV}`);
    console.log(`Running on Node JS ${process.version}`);
    console.log("Application up and running 🚀");
  })
  .catch(function (error) {
    console.log("Something has failed during app initialization");
    console.error(error);
  });
