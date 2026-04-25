const { execSync, spawnSync } = require("child_process");
const fs = require("fs");

console.log("Installing OpenClaw...");
execSync("npm install -g openclaw@latest", { stdio: "inherit" });

// Write config
fs.mkdirSync("/root/.openclaw", { recursive: true });
fs.writeFileSync("/root/.openclaw/openclaw.json", JSON.stringify({
  gateway: {
    mode: "local"
  },
  agent: {
    workspace: "/root/.openclaw/workspace",
    model: "openai/google/gemma-2-2b-it"
  },
  channels: {
    telegram: {
      botToken: process.env.TELEGRAM_BOT_TOKEN
    }
  }
}));

console.log("Starting OpenClaw...");
spawnSync("openclaw", ["gateway"], {
  stdio: "inherit",
  shell: true
});
