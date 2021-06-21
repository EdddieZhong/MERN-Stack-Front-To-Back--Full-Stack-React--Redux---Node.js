const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../modules/Profile');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
// Public ---> if you need a token to access a specific route like to add a profile, obviously you need to be authenticated. so you need to send along a token to that route in order for it to work. Otherwise may get 'unauthorized'  And this is a public route which we dont need a token for
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.masssage);
  }
});

module.exports = router;
