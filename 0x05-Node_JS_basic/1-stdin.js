process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input on stdin
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);

  // Close the program
  process.exit();
});

// Display closing message on exit
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
