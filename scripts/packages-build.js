const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Get the command-line argument (package name)
const targetPackage = process.argv[2];

// Define the packages directory
const packagesDir = path.join(__dirname, "../packages");

// Read all package folders
const packages = fs.readdirSync(packagesDir).filter((folder) => {
    const pkgPath = path.join(packagesDir, folder, "package.json");
    return fs.existsSync(pkgPath);
});

// Function to build a package using Lerna
const buildPackage = (pkg) => {
    console.log(`🚀 Building ${pkg} with Lerna...`);
    execSync(`lerna run build --scope ${pkg}`, { stdio: "inherit" });
};

// Determine what to build
if (targetPackage) {
    if (!packages.includes(targetPackage)) {
        console.error(`❌ Package "${targetPackage}" not found. Available packages: ${packages.join(", ")}`);
        process.exit(1);
    }
    buildPackage(targetPackage);
} else {
    console.log(`🔨 Building all packages with Lerna...`);
    execSync("lerna run build", { stdio: "inherit" });
}

console.log("✅ Build completed!");
