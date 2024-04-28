const mongoose = require('mongoose');
const seedUsers = require('./seedUsers');
const seedThoughts = require('./seedThoughts');

mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
}).then(() => {
  console.log('MongoDB connected successfully.');
  runSeeds();
}).catch(err => {
  console.error('Failed to connect to MongoDB:', err);
});

async function runSeeds() {
  try {
    const users = await seedUsers();
    await seedThoughts(users);
    console.log('Database seeded successfully!');
    mongoose.disconnect();
  } catch (err) {
    console.error('Seeding error:', err);
    mongoose.disconnect();
  }
}
