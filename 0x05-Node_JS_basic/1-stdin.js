process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input on stdin
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Display closing message on end
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
