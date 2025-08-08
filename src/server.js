const connectDB = require("./config/db");
const app = require("./app");
const monitorCPU = require("./services/cpuMonitor");

// Connect to MongoDB
connectDB();

// Start CPU monitoring
monitorCPU();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
