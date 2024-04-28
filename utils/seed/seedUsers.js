const { User } = require('../../models');

const userData = [
  { username: "alexsmith", email: "alexsmith@example.com" },
  { username: "janesmith", email: "janesmith@example.com" }
];

const seedUsers = async () => {
  await User.deleteMany({});
  const users = await User.insertMany(userData);
  console.log('Users seeded successfully!');
  return users;
};

module.exports = seedUsers;
