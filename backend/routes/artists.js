var express    = require('express');
const mongoose = require('mongoose');
var router     = express.Router();
const Artist   = require('../models/artist');


/* GET Artist Listing */
router.get('/', (req, res, next) => {
  Artist.find({})
    .exec((err, Venues) => {
      if (err) {
        return res.send(err);
      }
      return res.json(Venues);
    });
});

module.exports = router;
