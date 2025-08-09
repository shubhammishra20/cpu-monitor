const os = require("os");

function getCPUUsage() {
  return new Promise((resolve) => {
    const start = os.cpus();

    setTimeout(() => {
      const end = os.cpus();
      let idleDiff = 0;
      let totalDiff = 0;

      for (let i = 0; i < start.length; i++) {
        const startCPU = start[i].times;
        const endCPU = end[i].times;

        const idle = endCPU.idle - startCPU.idle;
        const total = Object.keys(endCPU).reduce((acc, key) => {
          return acc + (endCPU[key] - startCPU[key]);
        }, 0);

        idleDiff += idle;
        totalDiff += total;
      }

      const usage = (1 - idleDiff / totalDiff) * 100;
      resolve(usage);
    }, 1000);
  });
}

async function monitorCPU() {
  setInterval(async () => {
    const usage = await getCPUUsage();
    console.log(`CPU Usage: ${usage.toFixed(2)}%`);

    if (usage > 70) {
      console.log("CPU usage above 70%! Restarting server...");
      process.exit(1); // nodemon restarts automatically
    }
  }, 5000);
}

module.exports = monitorCPU;
