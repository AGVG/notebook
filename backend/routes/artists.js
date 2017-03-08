var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const Artist = require('../models/artist');
const passport = require('../config/passport');

/* GET Phones listing. */
router.get('/', (req, res, next) => {
  Artist.find({})
    .exec((err, Artists) => {
      if (err) {
        return res.send(err);
      }
      return res.json(Artists);
    });
});


/* GET a single Phone. */
router.get('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }

  Artist.findById(req.params.id, (err, Artists) => {
      if (err) {
        return res.send(err);
      }

      return res.json(Artists);
    });
});

// /* EDIT a Phone. */
// router.put('/:id', (req, res) => {
//   if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     return res.status(400).json({ message: 'Specified id is not valid' });
//   }
//
//   Phone.findByIdAndUpdate(req.params.id, {
//     brand: req.body.brand,
//     name: req.body.name,
//     specs: req.body.specs,
//     image: req.body.image
//   }, (err) => {
//     if (err) {
//       return res.send(err);
//     }
//
//     return res.json({
//       message: 'Phone updated successfully'
//     });
//   });
// })
//
// /* DELETE a Phone. */
// router.delete('/:id', (req, res) => {
//   if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     return res.status(400).json({ message: 'Specified id is not valid' });
//   }
//
//   Phone.remove({ _id: req.params.id }, (err) => {
//     if (err) {
//       return res.send(err);
//     }
//
//     return res.json({
//       message: 'Phone has been removed!'
//     });
//   })
// });
//
// router.post('/', upload.single('file'), function(req, res) {
//   const phone = new Phone({
//     name: req.body.name,
//     brand: req.body.brand,
//     image: `/uploads/${req.file.filename}`,
//     specs: JSON.parse(req.body.specs) || []
//   });
//
//   phone.save((err) => {
//     if (err) {
//       return res.send(err);
//     }
//
//     return res.json({
//       message: 'New Phone created!',
//       phone: phone
//     });
//   });
// });

module.exports = router;
