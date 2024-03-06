import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema({
  pagename: {
    type: String,
  },
  timespent: {
    type: String,
  },
});

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

export default Dashboard;
