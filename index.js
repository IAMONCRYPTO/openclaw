const { execSync } = require("child_process");

console.log("Installing OpenClaw...");
execSync("npm install -g openclaw@latest", { stdio: "inherit" });

console.log("Running OpenClaw gateway...");
try {
  execSync("openclaw gateway run", { stdio: "inherit" });
} catch(e) {
  console.log("Gateway output:", e.message);
  // Keep process alive
  setInterval(() => {}, 1000);
}
