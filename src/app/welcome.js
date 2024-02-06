let username;
const startName = '--username=';

const getWelcome = () => {
  const usernameIndex = process.argv.findIndex((arg) =>
    arg.startsWith(startName)
  );
  const args = process.argv.slice(2)[0];

  if (usernameIndex !== -1 && args !== startName) {
    username = process.argv[usernameIndex].substring(11);
    console.log(`Welcome to the File Manager, ${username}!\n`);
  } else {
    console.error(
      'Invalid command to log in \nPlease enter from the example: \n\nnpm run start -- --username=your_username\n'
    );
    process.exit();
  }
};
export { getWelcome, username };
