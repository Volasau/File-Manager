const parseCommand = (command) => {
  const args = [];
  let currentArg = '';

  let inQuotes = false;

  for (let i = 0; i < command.length; i++) {
    const char = command[i];

    if (char === ' ' && !inQuotes) {
      if (currentArg.trim() !== '' && currentArg !== '"') {
        args.push(currentArg.trim());
      }
      currentArg = '';
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else {
      currentArg += char;
    }
  }

  if (currentArg.trim() !== '' && currentArg !== '"') {
    args.push(currentArg.trim());
  }

  return args;
};

export { parseCommand };
