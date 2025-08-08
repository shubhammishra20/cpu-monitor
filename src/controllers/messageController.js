const { scheduleMessage } = require("../services/schedulerService");

exports.scheduleMessagePost = async (req, res) => {
  try {
    console.log(req.body);
    const { message, day, time } = req.body;

    if (!message || !day || !time) {
      return res
        .status(400)
        .json({ error: "message, day, and time are required" });
    }

    const now = new Date();
    const scheduledDate = new Date(
      `${now.getFullYear()}-${now.getMonth() + 1}-${day} ${time}`
    );

    if (scheduledDate < now) {
      return res
        .status(400)
        .json({ error: "Scheduled time must be in the future" });
    }

    scheduleMessage(message, scheduledDate);

    res.json({ success: true, scheduledFor: scheduledDate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
