const express = require('express');
const router = express.Router();

// @route Get dbdump
// @desc FullDBDump
// @access Public
router.get('/', (req, res) => {
    res.body="<body><h1>Hello, World!</h1></body>"
});

module.exports = router;