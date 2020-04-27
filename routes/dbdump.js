const express = require('express');
const router = express.Router();

// @route Get dbdump
// @desc FullDBDump
// @access Public
router.get('/', (req, res) => {
      
    var spawn = require('child_process').spawn;
    var mongoExport = spawn('mongoexport', [
            '--uri', process.env.MONGO_URI, 
            '--collection', 'items', 
            '--type=csv'
    ]);
   
    res.set('Content-Type', 'text/plain');
    mongoExport.stdout.on('data', function (data) {
        if (data) {
            res.send(data.toString());
        } else {
            res.send('mongoexport returns no data');
        }
    });
});

module.exports = router;
