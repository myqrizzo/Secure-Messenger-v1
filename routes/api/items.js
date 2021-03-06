const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Item Model
const Item = require('../../models/Item');

// @route Get api/items
// @desc Get All Items
// @access Public
router.get('/', auth, (req, res) => {
    User.findById(req.user.id, function(err,user){
        Item.find({ toemail: user.email })
           .sort({ date: -1 })
           .then(items => res.json(items));
    });
});


// @route Post api/items
// @desc Create An Item
// @access Private
router.post('/', auth, (req, res) => {

    User.findById(req.user.id, function(err,user){

        const newItem = new Item({
            body: req.body.body,
            toemail: req.body.toemail,
            fromemail: user.email
        });

        newItem.save().then(item => res.json(item));
    });
});

// @route DELETE api/items/:id
// @desc Delete A Item
// @access Private
router.delete('/:id', auth, (req, res) => {
   Item.findById(req.params.id)
   .then(item => item.remove().then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success: false}));
});

module.exports = router;

