# 🖥️ CPU Monitor & Auto-Restart Server

This Node.js app:

1. Connects to MongoDB.
2. Tracks **real-time CPU usage**.
3. If CPU usage > 70%, automatically restarts the server using **PM2**.
4. Provides an API to schedule messages.

---

## 📡 API Endpoint

**POST** `/api/schedule-message`
Request Body:

```json
{
  "message": "Send daily report",
  "day": 12,
  "time": "14:30"
}
```

# Install dependencies

npm install

# Start MongoDB (if not running)

mongod

# Start server

node server.js
