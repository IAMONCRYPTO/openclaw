const { execSync } = require("child_process");
const fs = require("fs");

console.log("Installing OpenClaw...");
execSync("npm install -g openclaw@latest", { stdio: "inherit" });

// Create config directory and copy config
fs.mkdirSync("/root/.openclaw", { recursive: true });
fs.copyFileSync("openclaw.json", "/root/.openclaw/openclaw.json");

console.log("Starting OpenClaw...");
// Run gateway in foreground mode for containers
execSync("openclaw gateway", { 
  stdio: "inherit",
  env: { ...process.env, OPENCLAW_NO_DAEMON: "1" }
});
