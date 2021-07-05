
const { User, Category, Contractor } = require("../models")
const { signToken } = require("../utils/auth")
const { AuthenticationError } = require("apollo-server-express")
const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        // contractor: async () => {
        //     return await Contractor.find();
        // },
        user: async () => {
            return await User.findById();
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            return { user, token }
        },
        login: async (parent, args) => {
            const user = await User.findOne({ email: args.email })
            if (!user) {
                throw new AuthenticationError("could not find user")
            }
            const correctPassword = await user.isCorrectPassword(args.password)
            if (!correctPassword) {
                throw new AuthenticationError("could not find password")
            }
            const token = signToken(user)
            return { user, token }
        },
        // addContractor: async (parent, args) => {
        //     const contractor = await Contractor.create(args)
        //     const token = signToken(contractor)
        //     return { user, token }
        // },
    }
}

module.exports = resolvers;