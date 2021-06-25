const mongoose = require('mongoose');

const { Schema } = mongoose;

const quoteSchema = new Schema({
    quoteDate: {
        type: Date,
        default: Date.now
    },
    contractor: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Contractor'
        }
    ]
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;