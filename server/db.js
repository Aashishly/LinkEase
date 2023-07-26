const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://AashishSingh:<password>@cluster0.do3psoe.mongodb.net/  ', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
}).then(() => {
        console.log('connected to MongoDB');
}).catch((error) => {
        console.log('Error connecting to mongoDB:', error);
});