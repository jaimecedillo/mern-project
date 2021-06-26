const {User} = require("../models")
const {signToken,authMiddleware} = require ("../utils/auth")
const { AuthenticationError} = require("apollo-server-express")
const resolvers = {
    Query: { 
        categories: 
    }, 
    Mutation:{
     addUser: async(parent,args) => {
         const user = await User.create (args)
        const token = signToken(user)
        return { user,token }
     },   
     login: async(parent,args) => {
         const user = await User.findOne ({email:args.email})
         if (!user) {
             throw new AuthenticationError("could not find user")
         }
         const correctPassword = await user.isCorrectPassword (args.password)
         if (!correctPassword) {
             throw new AuthenticationError("could not find password")
         }
         const token = signToken(user)
         return { user, token}
     }
    }
}