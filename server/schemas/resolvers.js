const { User, Category, Contractor, Quote } = require("../models")
const {signToken,authMiddleware} = require ("../utils/auth")
const { AuthenticationError} = require("apollo-server-express")
const resolvers = {
    Query: { 
        categories: async () => {
        return await Category.find();
    },
    contractors: async (parent, { category, name }) => {
        const params = {};
  
        if (category) {
          params.category = category;
        }
  
        if (name) {
          params.name = {
            $regex: name
          };
        }
  
        return await Contractor.find(params).populate('category');
    },
    Mutation:{
        addUser: async(parent,args) => {
            const user = await User.create (args)
            const token = signToken(user)
            return { user,token }
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
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
};

module.exports = resolvers;