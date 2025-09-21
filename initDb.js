// backend/initDb.js
import db from "./db.js";

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS partners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    partnerType TEXT,
    companyName TEXT,
    contactPerson TEXT,
    email TEXT,
    phone TEXT,
    services TEXT,
    location TEXT
  )`, (err) => {
    if (err) {
      console.error("❌ Error creating table:", err.message);
    } else {
      console.log("✅ Partners table is ready.");
    }
  });
});
