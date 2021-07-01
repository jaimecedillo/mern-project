const { gql } = require("apollo-server-express")

const typeDefs = gql`
type User { 
    _id: ID 
    firsName: String
    lastName: String
    email: String
    password: String
}

type Contractor {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    workType: String
}

type Category {
    _id: ID
    name: String
}

type Auth {
    token: ID
    user: User
}

type Query {
    user: User
    contractor: Contractor
    categories: [Category]
}

type Mutation {
    addUser(firstName:String!, lastName:String!, email:String!, password:String!):Auth
    login(email:String!, password:String!):Auth
    updateUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    addContractor(firstName: String!, lastName: String!, email: String!, password: String!, workType: String!): Auth
    updateContractor(firstName: String!, lastName: String!, email: String!, password: String!, worktype: String!): Contractor
}

`
// categories: [ Category ]
module.exports = typeDefs