const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcryptjs = require('bcryptjs');
const Quote = require('./Quote');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7 
    },
    quote: [Quote.schema]
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcryptjs.compare(password, this.password); 
};

const User = mongoose.model('User', userSchema);

module.exports = User;