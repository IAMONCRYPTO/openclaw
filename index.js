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
