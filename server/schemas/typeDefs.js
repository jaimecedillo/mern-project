const { gql } = require ("apollo-server-express")

const typeDefs = gql`
type User { 
    _id: ID 
    firsName: String
    lastName: String
    email: String
    password: String
}



type Auth {
    token: ID
    user: User
}

type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
  }


type Mutation {
    addUser(firstName:String!, lastName:String!, email:String!, password:String!):Auth
    login(email:String!, password:String!):Auth
}


`
 categories: [ Category ]
module.exports = typeDefs