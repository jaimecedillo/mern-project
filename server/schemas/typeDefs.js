const { gql } = require("apollo-server-express")

const typeDefs = gql
`
type User { 
    _id: ID 
    firsName: String
    lastName: String
    email: String
}
type Query {
    categories: [Category]

    user: User

}

type Category {
    _id: ID
    name: String
}

type Auth {
    token: ID
    user: User
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User

    login(email: String!, password: String!): Auth
}
`;

// type Mutation {
//     addUser(firstName:String!, lastName:String!, email:String!, password:String!):Auth
//     login(email:String!, password:String!):Auth
//     updateUser(firstName: String!, lastName: String!, email: String!, password: String!): User
//     addContractor(firstName: String!, lastName: String!, email: String!, password: String!, workType: String!): Auth
//     updateContractor(firstName: String!, lastName: String!, email: String!, password: String!, worktype: String!): Contractor
// }

//`
 
module.exports = typeDefs