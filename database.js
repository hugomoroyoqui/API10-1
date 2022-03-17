const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin:hugo123@cluster0.ekgqv.mongodb.net/test';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Conexion exitosa a BD'))
.catch(err => console.log('Tienes un error: ' + err));

module.exports = mongoose;