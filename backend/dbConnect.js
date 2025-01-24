const mongoose = require('mongoose')

let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        mongoose.connect('mongodb://localhost:27017/UA1IntroWeb')
        .then(() => {
            dbConnection = mongoose.connection
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}
