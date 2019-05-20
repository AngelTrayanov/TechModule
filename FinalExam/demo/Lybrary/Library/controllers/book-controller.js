const Book = require('../models/Book');

module.exports = {
  getIndex: function (req, res) {
    Book
    .find()
    .then(books => {
      res.render('index', {
        books
      });
    })
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    let book = req.body;
    Book
    .create(book)
    .then(()=> {
      res.redirect('/');
    });
  },
  getEdit: function (req, res) {
    const id = req.params.id;
    Book
    .findById(id)
    .then(book => {
      res.render('edit', {
        book
      });
    });
  },
  postEdit: function (req, res) {
    const id = req.params.id;
    const updatedBook = req.body;
    Book
    .findByIdAndUpdate(id, updatedBook)
    .then(()=> {
      res.redirect('/');
    })
  },
  getDelete: function (req, res) {
    const id = req.params.id;
    Book
    .findById(id)
    .then(book => {
      res.render('delete', {
        book
      });
    });
  },
  postDelete: function (req, res) {
    const id = req.params.id;
    Book
    .findByIdAndRemove(id)
    .then(()=> {
      res.redirect('/')
    })
  }
};