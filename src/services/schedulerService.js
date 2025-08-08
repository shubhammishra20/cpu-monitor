const cron = require("node-cron");
const Message = require("../models/Message");

function scheduleMessage(message, scheduledDate) {
  const cronTime = `${scheduledDate.getMinutes()} ${scheduledDate.getHours()} ${scheduledDate.getDate()} ${
    scheduledDate.getMonth() + 1
  } *`;

  cron.schedule(cronTime, async () => {
    await Message.create({ message, scheduledFor: scheduledDate });
    console.log(`Message saved: "${message}" at ${scheduledDate}`);
  });

  console.log(`Message scheduled for ${scheduledDate}`);
}

module.exports = { scheduleMessage };
