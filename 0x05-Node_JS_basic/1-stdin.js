process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input on stdin
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

// Display closing message on end
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
