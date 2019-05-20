const Mountaineer = require('../models/Mountaineer');

module.exports = {
    getIndex: function (req, res) {
        Mountaineer
        .find({})
        .then(mountaineers=> {
           res.render('index',{mountaineers
           });
        });
    
     },
     getCreate: function (req, res) {
       res.render('create');
     },
     postCreate: function (req, res) {
       let mountaineer = req.body;
       Mountaineer
       .create(mountaineer)
       .then(()=> {
         res.redirect('/');
       })
     },
     getEdit: function (req, res) {
       const id = req.params.id;
       Mountaineer
       .findById(id)
       .then(mountaineer => {
         res.render('edit', {mountaineer});
       });
     },
     postEdit: function (req, res) {
       const id = req.params.id;
       const updetedMountaineer = req.body;
    
       Mountaineer
       .updateOne({_id: id}, updetedMountaineer)
       .then(()=> {
         res.redirect('/');
       })
     },
     getDelete: function (req, res) {
       const id = req.params.id;
       Mountaineer
       .findById(id)
       .then(mountaineer => {
         res.render('delete', {mountaineer});
       });
     },
     postDelete: function (req, res) {
       const id = req.params.id;
       Mountaineer
       .deleteOne({_id: id})
       .then(()=> {
         res.redirect('/');
       })
     }
};