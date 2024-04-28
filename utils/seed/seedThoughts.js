const { Thought } = require('../../models');
const { User } = require('../../models'); 

const thoughtsData = [
  { thoughtText: "Here's a cool thought...", username: "alexsmith" },
  { thoughtText: "Here's another interesting thought...", username: "janesmith" }
];

const seedThoughts = async (users) => {
  if (!users || users.length === 0) {
    throw new Error('No users available for seeding thoughts.');
  }

  const thoughts = thoughtsData.map(thought => {
    const user = users.find(u => u.username === thought.username);
    if (!user) throw new Error('User not found for the thought');
    return { ...thought, userId: user._id };
  });

  await Thought.deleteMany({});
  return Thought.insertMany(thoughts);
};

module.exports = seedThoughts;
