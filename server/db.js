const mongoose = require('mongoose');

mongoose.connect('', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
}).then(() => {
        console.log('connected to MongoDB');
}).catch((error) => {
        console.log('Error connecting to mongoDB:', error);
});