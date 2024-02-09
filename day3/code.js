const { exec } = require('child_process');

const executeCommand = (command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      return;
    }

    console.log(`Command Output:\n${stdout}`);
  });
};

// Test Cases:
executeCommand('ls -la');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!
