import express from "express";
import { dashboardControl } from "../controllers/dashboard.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/", protectRoute, dashboardControl);

export default router;
