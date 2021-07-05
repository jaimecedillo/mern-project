const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nate-admin:yourpassword@cluster0.cashk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;
