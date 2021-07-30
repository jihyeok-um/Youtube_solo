
import express from "express";
import { trending } from "../controllers/videoController";
import { join } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/join", join);
globalRouter.get("/", trending);

export default globalRouter;