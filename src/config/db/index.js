const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/tiktok_clone_dev", {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully");
  } catch (error) {
    // throw new Error("Connect failed");
    console.log("Connect failed");
  }
}

module.exports = { connect };
