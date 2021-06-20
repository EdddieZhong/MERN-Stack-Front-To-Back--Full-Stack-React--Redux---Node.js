const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
// Public ---> if you need a token to access a specific route like to add a profile, obviously you need to be authenticated. so you need to send along a token to that route in order for it to work. Otherwise may get 'unauthorized'  And this is a public route which we dont need a token for
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
