import User from "../models/user.model.js";

const generateUsername = async (name) => {
  const char = ["!", "@", "#", "$", "%"];
  const randomChar = char[Math.floor(Math.random() * char.length)];

  let username = name.toLowerCase().replace(/ /g, "-");
  username = name + randomChar + Math.floor(Math.random() * 100);

  let existingUser = await User.findOne({ username });

  while (existingUser) {
    randomChar = char[Math.floor(Math.random() * char.length)];
    username = name + randomChar + Math.floor(Math.random() * 100);
    existingUser = await User.findOne({ username });
  }

  return username;
};

export default generateUsername;
