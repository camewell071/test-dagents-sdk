const { execSync } = require("child_process");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Function to get all package names from the packages directory
function getPackageNames() {
    const packagesDir = path.join(__dirname, "../packages");
    const packages = fs.readdirSync(packagesDir).filter((folder) => {
        const pkgPath = path.join(packagesDir, folder, "package.json");
        return fs.existsSync(pkgPath);
    });
    return packages;
}

// Function to get all client app names from the client directory
function getClientAppNames() {
    const clientDir = path.join(__dirname, "../client");
    const apps = fs.readdirSync(clientDir).filter((folder) => {
        const appPath = path.join(clientDir, folder, "package.json");
        return fs.existsSync(appPath);
    });
    return apps;
}

async function main() {
    const tasks = {
        "Clean Monorepo": "lerna clean && rimraf node_modules packages/**/node_modules",
        "Build All Packages": "node scripts/packages-build.js",
        "Build Specific Package": "node scripts/packages-build.js <package-name>",
        "Start Specific Client App": "node scripts/client-start.js <client-name>"
    };

    const { selectedTask } = await inquirer.prompt([
        {
            type: "list",
            name: "selectedTask",
            message: "Select the task you want to run:",
            choices: Object.keys(tasks),
        },
    ]);

    if (selectedTask === "Build Specific Package") {
        const packageNames = getPackageNames();
        const { packageName } = await inquirer.prompt([
            {
                type: "list",
                name: "packageName",
                message: "Select the package to build:",
                choices: packageNames,
            },
        ]);
        execSync(`node scripts/packages-build.js ${packageName}`, { stdio: "inherit" });
    } else if (selectedTask === "Start Specific Client App") {
        const clientAppNames = getClientAppNames();
        const { clientAppName } = await inquirer.prompt([
            {
                type: "list",
                name: "clientAppName",
                message: "Select the client app to start:",
                choices: clientAppNames,
            },
        ]);
        execSync(`node scripts/client-start.js ${clientAppName}`, { stdio: "inherit" });
    } else {
        execSync(tasks[selectedTask], { stdio: "inherit" });
    }
}

main().catch((error) => {
    console.error("❌ Task failed:", error);
    process.exit(1);
});
