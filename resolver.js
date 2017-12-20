const mongoose = require('mongoose');

const Book = mongoose.model('Book');

module.exports = {
  Query: {
    getAllBooks: async () => await Book.find(),
    getBookById: async (parent, args) => await Book.findById(args.id)
  },
  Mutation: {
    postBook: async (parent, args) => {
      const newBook = new Book(args);
      return await newBook.save();
    },
    deleteBook: async (parent, { id }) => { // You can destructure the args
      return await Book.findByIdAndRemove(id)
    },
    updateBook: async (parent, { id: _id, ...doc }) => {
      await Book.update({ _id }, doc);
      return { _id, ...doc }
    }
  }
}