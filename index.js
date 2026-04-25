const { execSync } = require("child_process");
const fs = require("fs");

execSync("npm install -g openclaw@latest", { stdio: "inherit" });

// Create config directory
fs.mkdirSync("/root/.openclaw", { recursive: true });
fs.copyFileSync("openclaw.json", "/root/.openclaw/openclaw.json");

console.log("Starting OpenClaw foreground...");
execSync("openclaw gateway foreground", { stdio: "inherit" });
