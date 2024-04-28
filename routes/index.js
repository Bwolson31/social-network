const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Prefix all user routes with `/users`
router.use('/api/users', userRoutes);

// Prefix all thought routes with `/thoughts`
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;
