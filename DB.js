const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017", (err, client) => {});

let dbConnection;
let tables = {
    users : "users"
}


export const connectToServer = (callback) => {

    client.connect((err, db) =>{

        if (err || !db) {
            return callback(err);
        }

        dbConnection = db.db("sample_airbnb");
        console.log("Successfully connected to MongoDB.");

        return callback();
    });
}

//
// // addNewUser
// export const addNewUser = (newUser) => {
//     // return new Promise((resolve, reject) => {
//     //     dbConnection
//     //         .collection(tables.users)
//     //         .insertOne(newUser, (err, result) => {
//     //             if (err) {
//     //                 reject()
//     //             } else {
//     //                 resolve(result.insertedId)
//     //             }
//     //         });
//     // })
//
// }
