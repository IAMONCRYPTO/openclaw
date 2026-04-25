const { execSync } = require("child_process");

console.log("Installing OpenClaw...");
execSync("npm install -g openclaw@latest", { stdio: "inherit" });

console.log("Starting OpenClaw gateway directly...");
execSync("openclaw gateway --no-daemon", { stdio: "inherit" });
