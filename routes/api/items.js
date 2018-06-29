// express framework
const express = require("express");

// express Router
const router = express.Router();

// Item model -> model are capitalize
const Item = require("../../models/Item");

// @route GET api/items
// @desc Get all Items
// @acces Public
router.get("/", (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// @route POST api/items
// @desc create an item
// @acces Public
router.post("/", (req, res) => {
    // creating model for mongoDB: newItem is the model name @line: 8
    const newItem = new Item({
        name: req.body.name
    });
    // Saving in BD
    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc delete an item
// @acces Public
router.delete("/:id", (req, res) => {
    // Query to mongoDB
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ succes: true })))
        .catch(err => res.status(404).json({ succes: false }));
});

module.exports = router;
