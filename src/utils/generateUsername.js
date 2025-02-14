import User from "../models/user.model.js";

const generateUsername = async (name) => {
  const specialChars = ["!", "#", "$", "%", "&", "*"];
  const baseUsername = name.toLowerCase().replace(/ /g, "-");

  let usernameVariants = [];

  for (let i = 0; i < 10; i++) {
    const randomChar =
      specialChars[Math.floor(Math.random() * specialChars.length)];
    const randomNumber = Math.floor(Math.random() * 1000);
    usernameVariants.push(`${baseUsername}${randomChar}${randomNumber}`);
  }

  // Check which usernames already exist
  const existingUsers = await User.find({
    username: { $in: usernameVariants },
  }).select("username");
  const existingUsernames = new Set(existingUsers.map((user) => user.username));

  // Return the first available username
  for (const username of usernameVariants) {
    if (!existingUsernames.has(username)) {
      return username;
    }
  }

  return `${baseUsername}-${Date.now()}`;
};

export default generateUsername;
