const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Register User
// @access  Public
// Public ---> if you need a token to access a specific route like to add a profile, obviously you need to be authenticated. so you need to send along a token to that route in order for it to work. Otherwise may get 'unauthorized'  And this is a public route which we dont need a token for
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('User route');
});

module.exports = router;
