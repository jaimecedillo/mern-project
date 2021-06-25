const mongoose = require('mongoose');

const { SChema } = mongoose;
const bcrypt = require('bcrypt');

const contractorSChema = new Schema({
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
    workType: {
        type: String,
        required: true
    }
});

contractorSChema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

contractorSChema.method.isCorrectPassword = async function(password) {
    return await bcyrpt.compare(password, this.password);
};

const Contractor = mongoose.model('Contractor', contractorSChema);

module.exports = Contractor;