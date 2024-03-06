import asyncHandler from "express-async-handler";
import Dashboard from "../models/dashboard.model.js";

export const dashboardControl = asyncHandler(async (req, res) => {
  const { pagename, timespent } = req.body;
  try {
    const dashboard = new Dashboard({
      pagename,
      timespent,
    });
    await dashboard.save();
    res.status(201).send(dashboard);
  } catch (error) {
    console.log("Error in Dashboard Controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
