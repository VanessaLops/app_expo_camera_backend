import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import http from "http";
import * as StoreController from "./src/api/StoreController";

// const PORT = 3000;

const PORT = process.env.PORT || 3000;
async function startup() {
  await createConnection();
  const app = express();

  app.get("/", async (req, res) => {
    res.send("<h1>GET SUCESS</h1>");
  });

  const server = http.createServer(app);

  app.use(express.json());
  app.use(cors());

  app.post("/store", StoreController.save);
  app.get("/store", StoreController.getAll);

  app.listen(PORT, () => {
    console.log(`🔥 Servidor iniciado em http://localhost:${PORT}`);
  });
}

startup();
