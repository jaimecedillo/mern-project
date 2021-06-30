const {User, Category} = require("../models")
const {signToken,authMiddleware} = require ("../utils/auth")
const { AuthenticationError} = require("apollo-server-express")
const resolvers = {
    Query: { 
      Query: {
        categories: async () => {
          return await Category.find();
        },
        
         Query: {
           user(parent, args, context, info) {
             return users.find(user => user.id === args.id);
           }
         }
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