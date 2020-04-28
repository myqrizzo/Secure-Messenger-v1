const express = require('express');
const router = express.Router();

// @route Get dbdump
// @desc FullDBDump
// @access Public
router.get('/', (req, res) => {

    res.send("<body><h2>Hello, World!</h2></body>")

});

module.exports = router;
