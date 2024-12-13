// scripts/start.js
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Read folder names dynamically from the "client" directory
const clientDir = path.join(__dirname, "../client");
const validApps = fs.readdirSync(clientDir).filter((file) => {
    return fs.statSync(path.join(clientDir, file)).isDirectory();
});

// Get the app argument from the command line
const app = process.argv[2];
if (!app) {
    console.error("❌ Please specify the app to start: core or test");
    process.exit(1);
}

if (!validApps.includes(app)) {
    console.error(`❌ Invalid app name: ${app}. Available apps: ${validApps.join(", ")}`);
    process.exit(1);
}

console.log(`🚀 Starting ${app}...`);
execSync(`cd client/${app} && yarn && yarn start`, { stdio: "inherit" });
