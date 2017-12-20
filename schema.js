module.exports = `
  type Query{
    getAllBooks: [Book]
    getBookById(id: String!): Book
  }
  type Mutation{
    postBook(title:String! author:String! price: Int!): Book!
    deleteBook(id:String!): Book
    updateBook(title:String! author:String! price: Int! id:String!): Book!
  }
  type Book{
    _id: String!
    title: String!
    author: String!
    price: Int!
  }
`