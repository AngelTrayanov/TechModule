const Band = require('../models/Band');

module.exports = {
  getIndex: function (req, res) {
    Band
    .find({})
    .then(bands=> {
       res.render('index',{bands
       });
    });

 },
 getCreate: function (req, res) {
   res.render('create');
 },
 postCreate: function (req, res) {
   let band = req.body;
   Band
   .create(band)
   .then(()=> {
     res.redirect('/');
   })
 },
 getEdit: function (req, res) {
   const id = req.params.id;
   Band
   .findById(id)
   .then(band => {
     res.render('edit', {band});
   });
 },
 postEdit: function (req, res) {
   const id = req.params.id;
   const updetedBand = req.body;

   Band
   .updateOne({_id: id}, updetedBand)
   .then(()=> {
     res.redirect('/');
   })
 },
 getDelete: function (req, res) {
   const id = req.params.id;
   Band
   .findById(id)
   .then(band => {
     res.render('delete', {band});
   });
 },
 postDelete: function (req, res) {
   const id = req.params.id;
   Band
   .deleteOne({_id: id})
   .then(()=> {
     res.redirect('/');
   })
 }
};