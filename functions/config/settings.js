const admin = require("firebase-admin");
const serviceAccount = require("../../mob-20-nodejs-dore-firebase-adminsdk-9mwu8-157adefr321.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shoppinglist-e8919.firebaseio.com/"
});

module.exports = admin;
